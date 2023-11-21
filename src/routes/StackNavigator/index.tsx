import { createStackNavigator } from '@react-navigation/stack';
import { Sregister } from '../../screens/Sregister';
import { Login } from '../../screens/Login';
import {BottonTabRoutes} from '../BottonTabRoutes'
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator ();


export function StackNavigator() {
  
    const { logado, verificarLogado} = useContext(LoginContext);
    const navigate = useNavigation<any>()

    useEffect(() => {
      verificarLogado();
    }, []);
  
    useEffect(() => {
      if(logado == "true"){
        console.log("oi", logado)
        navigate.navigate("Todos")
      }else{
        navigate.navigate("Login")
      }
    }, [logado]);

  return (
    
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}

      initialRouteName={"Login"}
    >

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Sregister} />
      <Stack.Screen name="Todos" component={BottonTabRoutes} />

    </Stack.Navigator>
  );
}