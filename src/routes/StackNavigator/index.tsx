import { createStackNavigator } from '@react-navigation/stack';
import { Sregister } from '../../screens/Sregister';
import { Login } from '../../screens/Login';
import {BottonTabRoutes} from '../BottonTabRoutes'
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

export function StackNavigator() {
  
    const { logado, verificarLogado} = useContext(LoginContext);
    const [initial, setInitial] = useState("")

    // useEffect(() => {
    //   verificarLogado();
    // }, []);
  
    // useEffect(() => {
    //   verificarLogado()
    //   if(logado !== "false"){
    //     console.log("oi", logado)
    //     setInitial("Todos")
    //   }else{
    //     setInitial("Login")
    //   }
    // }, [logado]);
  
    // useEffect(()=>{
    //   verificarLogado()
    //   console.log(initial)
    // },[])

    // useEffect(()=>{
    //   console.log(initial)
    // },[initial])
  
    // async function verificarLogado(){
    //   const verificado = await AsyncStorage.getItem("logado");
    //   if(verificado === "true" || verificado === "false"){
    //       // setLogado((prevState) => { return verificado})
    //       if(verificado === "true"){
    //         setInitial((prevState) => (prevState !== "Todos" ? "Todos" : prevState))
    //       }
    //       // alert(initial)
    //     }else{
    //       console.log("deu errado ?")
    //   }
    // }

  return (
    
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}

      initialRouteName={"Todos"}
    >

      <Stack.Screen name="Registro" component={Sregister} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Todos" component={BottonTabRoutes} />

    </Stack.Navigator>
  );
}