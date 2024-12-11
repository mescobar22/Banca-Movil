const { Router } = require('express');
const connect = require('../db');
const bcrypt = require('bcrypt');
const router = Router();
const jwt = require('jsonwebtoken');


const QRCode = require('qrcode');

const generateQRCode = async(accountId) => {
    const qrData = `account_id:${accountId}`;
    try{
        const qrCodeImage = await QRCode.toDataURL(qrData);
        return qrCodeImage;
    } catch(err) {
        console.error('Error al generar el codigo QR');
    }
};

router.post('/auth/register', async (req, res) => {
    const { first_name, last_name, email, password} = req.body;
    const BASE_BALANCE = 1000;
    let db;
    try {
        if (!first_name || !last_name || !email || !password) {
            return res.json({
                'status': 400,
                'msg': 'All fields are required'
            });
        }
        const emailNoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailNoValido.test(email)) {
            return res.json({
                'status':400,
                'msg': 'The email is not valid'
            });
        }
        if(password.length < 8){
            return res.json({
                'status':400,
                'msg': 'Password must be at least 8 characters'
            });
        }

        db = await connect();
        await db.beginTransaction();

        
        const queryCheck = `SELECT * FROM users WHERE email = ?`;
        const [existingUser] = await db.execute(queryCheck, [email]);

        if (existingUser.length > 0) {
            return res.json({
                'status': 400,
                'msg': 'The email is already registered'
            });
        }

        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const queryInsertUser = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
        const [userResult] = await db.execute(queryInsertUser, [first_name, last_name, email, hashedPassword]);

        const userId = userResult.insertId;

        const queryCreateAccount = `INSERT INTO accounts (user_id, balance, currency) VALUES (?, ?, ?)`;
        const [accountResult] = await db.execute(queryCreateAccount, [userId, BASE_BALANCE, 'MXN']);

        const qrCodeImage = await generateQRCode(accountResult.insertId);

        const queryInsertQRCode = `INSERT INTO qr_codes (account_id, qr_data) VALUES (?, ?)`;
        await db.execute(queryInsertQRCode, [accountResult.insertId, qrCodeImage]);

        await db.commit();
        res.json({
            'status': 200,
            'msg': 'Successfully created user',
            'user_id': userId,
            'account_id': accountResult.insertId,
            'initial_balance': BASE_BALANCE
        });
    } catch (err) {
        await db.rollback();
        console.error(err);
        res.json({
            'status': 500,
            'msg': 'Server error'
        });
    }
});

router.post('/auth/login', async (req, res) => {
    let db;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                'status': 400,
                'msg': 'All fields are required'
            });
        }

        db = await connect();

        const query = `SELECT * FROM users WHERE email = ?`;
        const [row] = await db.execute(query, [email]);

        if (row.length === 0) {
            return res.json({
                'status': 404,
                'msg': 'There is no user with this email'
            });
        }

        const user = row[0];
        const hashPassword = user.password;
        const passwordValid = await bcrypt.compare(password, hashPassword);

        if (!passwordValid) {
            return res.json({
                'status': 401,
                'msg': 'Incorrect password',
                'token': null
            });
        }

        const token = jwt.sign(
            { email: user.email, user_id: user.user_id, name: user.first_name },
            'secret',
            { expiresIn: '1h' }
        );

        
        const queryAccount = `SELECT account_id FROM accounts WHERE user_id = ?`;
        const [accountResult] = await db.execute(queryAccount, [user.user_id]);

        let qr = { qr_id: null, qr_data: null };

        if (accountResult.length > 0) {
            const accountId = accountResult[0].account_id;

            
            const queryQRCode = `SELECT qr_id, qr_data FROM qr_codes WHERE account_id = ?`;
            const [qrResult] = await db.execute(queryQRCode, [accountId]);

            if (qrResult.length > 0) {
                qr = qrResult[0];
            } else {
                console.log('No QR data found for this account_id.');
            }
        }

        const deviceInfo = req.headers['user-agent'] || 'unknown';

        const queryInsertLog = `INSERT INTO login_logs (user_id, last_login, device_info) VALUES (?, NOW(), ?)`;
        await db.execute(queryInsertLog, [user.user_id, deviceInfo]);

        const queryLastLogin = `SELECT last_login FROM login_logs WHERE user_id = ? ORDER BY last_login DESC LIMIT 1`;
        const [lastLoginResult] = await db.execute(queryLastLogin, [user.user_id]);

        const lastLogin = lastLoginResult.length > 0 ? lastLoginResult[0].last_login : null;

        res.json({
            'status': 200,
            'token': token,
            'msg': 'Successful login',
            'user': {
                'email': user.email,
                'user_id': user.user_id,
                'account_id': accountResult.length > 0 ? accountResult[0].account_id : null,
                'qr_id': qr.qr_id,
                'qr_data': qr.qr_data,
                'last_login': lastLogin,
                'name': user.first_name,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;