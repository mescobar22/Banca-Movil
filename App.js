import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { FlatListComponent, View } from 'react-native';
import Login from './Screens/login';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='login'
        screenOptions={{
          headerShown: FlatListComponent,
        }}
      ></Stack.Navigator> 
        <Stack.Screen name='login' component={login}/>
        <Stack.Screen name='register' component={register}/>
    </NavigationContainer>
  );
};
