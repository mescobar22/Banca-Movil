// De acuerdo a las transiciones mostrar los movimientos y mostrar dinero actualizado de acuerdo a la base de datos

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as SecureStore from "expo-secure-store";

export default function Transactions({ route, navigation }) {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0); 
  const { token } = route.params;
  

  const fetchTransactionsAndBalance = async () => {
    try {
      const response = await fetch('https://api-bancamovil-production.up.railway.app/transactions', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.transactions) {
        data.transactions.forEach((transaction) => {
          console.log('Transaction Amount:', transaction.amount);
        });
        setTransactions(data.transactions);
      }
      if (data.balance) {
        setBalance(data.balance);
      }
    } catch (error) {
      console.error('Error fetching transactions and balance:', error);
    }
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('.');
  
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  
    const date = new Date(formattedDate);
  
    if (isNaN(date)) {
      console.error('Invalid Date:', dateString);
      return 'Invalid Date';
    }
  
    const dayFormatted = String(date.getDate()).padStart(2, '0');
    const monthFormatted = String(date.getMonth() + 1).padStart(2, '0');
    const yearFormatted = date.getFullYear();
  
    return `${dayFormatted}.${monthFormatted}.${yearFormatted}`;
  };

  useEffect(() => {
    
    if (token) {
      fetchTransactionsAndBalance();
    }
  }, [token]);


  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	      <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <Text style={styles.txt_1}>Transactions</Text>

      <View style={styles.border}>
        <View style={styles.icon_1}>
          <Entypo name="wallet" size={50} color="#001b48"/>
        </View>
        <Text style={styles.txt_2}>Available Balance</Text>
        <Text style={styles.txt_3}>${balance.toLocaleString()} MXN</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={styles.icon_2}>
          <MaterialIcons name="history" size={24} color="#001b48"/>
        </View>
        <Text style={styles.historyText}>History</Text>
      </View>

      {transactions.map((transaction) => {
        const amount = parseFloat(transaction.amount);
      return (
        <View style={styles.transaction} key={transaction.transaction_id}>
          <View style={styles.icon_3}>
            <FontAwesome5 name="coins" size={24} color="#001b48" />
          </View>
          <Text style={styles.transactionTitle} numberOfLines={1} >{transaction.concept}</Text>
          <Text style={styles.transactionPrice}>
            {transaction.type === 'Receive' ? '➚ ' : '➘ '}
            {isNaN(amount) ? '0.00' : amount.toFixed(2)}
      </Text>
          <Text style={styles.transactionDate}>
            {formatDate(transaction.created_at)}
          </Text>
        </View>
        );
        })}
      <StatusBar style="auto" />
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001b48",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 5,
    backgroundColor: "#001b48",
    borderRadius: 5,
    width:"20%",
  },
  backButtonText: {
    fontSize: 35,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -10,
  },
  txt_1: {
    marginTop: 75,
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  border: {
    marginTop: 30,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  icon_1: {
    position: "absolute",
    top: 25,
    left: 21,
  },
  txt_2: {
    fontSize: 16,
    color: "#cacaca",
    marginStart: -45,
  },
  txt_3: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 35,
    marginTop: -5,
    marginStart: 60,
  },
  historyContainer: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:120,
  },
  icon_2: {
    position: "absolute",
    top: 9,
    left: 15,
  },
  historyText: {
    marginLeft: 24,
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 14,
  },
  transaction: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon_3: {
    position: "absolute",
    top: 15,
    left: 25,
  },
  transactionTitle: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 16,
    marginStart: 40,
    flexShrink: 1, 
    maxWidth: '30%',
    flex: 1, 
  },
  transactionPrice: {
    color: "red",
    fontWeight: "bold",
    fontSize: 17,
    minWidth: 60,
  },
  transactionDate: {
    fontSize: 14,
    color: "#001b48",
    fontWeight: "bold",
    minWidth: 70
  },
});
