import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Menu from './Screens/1_menu';
import Register from './Screens/1.1_register';
import Login from './Screens/1.2_login';
import Home from './Screens/2_home';
import Movements from './Screens/2.1_transactions';


export default function App() {
  return (
    <View style={ {flex: 1}}>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
};

