import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Menu from './Screens/1_menu';
import Register from './Screens/1.1_register';
import Login from './Screens/1.2_login';
import Home from './Screens/2_home';
import Transactions from './Screens/2.1_transactions';
import QR from './Screens/3_qr';
import QR_Scanner from './Screens/3.1_qr_scanner';
import QR_Vaucher from './Screens/3.2_qr_vaucher';
import Transfer_Vaucher from './Screens/4.1_transfer_vaucher';



export default function App() {
  return (
    <View style={ {flex: 1}}>
      <Register/>
      <StatusBar style="auto" />
    </View>
  );
};

