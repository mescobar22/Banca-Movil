import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './Screens/login';


export default function App() {
  return (
    <View style={ {flex: 1}}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
};