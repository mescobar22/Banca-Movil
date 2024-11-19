import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './Screens/login';
import Register from './Screens/register';


export default function App() {
  return (
    <View style={ {flex: 1}}>
      <Register/>
      <StatusBar style="auto" />
    </View>
  );
};