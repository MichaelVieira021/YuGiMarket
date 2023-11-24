import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';
import { LoginContextProvider } from '../contexts/LoginContext';
import { CartasContextProvider } from '../contexts/CartasContext';


export const Routes = () => {
  return (

    <NavigationContainer>
      <LoginContextProvider>
        <CartasContextProvider>
          <StackNavigator/>
        </CartasContextProvider>
      </LoginContextProvider>
    </NavigationContainer>

  );
}