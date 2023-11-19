import { createStackNavigator } from '@react-navigation/stack';
import { Sregister } from '../../screens/Sregister';
import { Login } from '../../screens/Login';
import { Shop } from '../../screens/Shop';
import {BottonTabRoutes} from '../BottonTabRoutes'

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
    }}
    initialRouteName='Login'
    >

      <Stack.Screen name="Registro" component={Sregister} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Todos" component={BottonTabRoutes} />

    </Stack.Navigator>
  );
}