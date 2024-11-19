import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Menu from './Screens/1_menu';
import Login from './Screens/login';
import Register from './Screens/register';
import Home from './Screens/home';



export default function App() {
  return (
    <View style={ {flex: 1}}>
      <Menu/>
      <StatusBar style="auto" />
    </View>
  );
};