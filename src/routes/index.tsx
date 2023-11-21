import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';
import { LoginContextProvider } from '../contexts/LoginContext';
import { StorageContextProvider } from '../contexts/StorageContext';


export const Routes = () => {
  return (

    <NavigationContainer>
      <LoginContextProvider>
        <StorageContextProvider>
          <StackNavigator/>
        </StorageContextProvider>
      </LoginContextProvider>
    </NavigationContainer>

  );
}