import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';

export const Routes = () => {
  return (
    <NavigationContainer>
        {/* <ImageBackground source={background} style={{flex: 1, width: "100%", height: 200}}> */}
            <StackNavigator/>
            {/* <BottonTabRoutes/> */}
        {/* </ImageBackground> */}
    </NavigationContainer>
  );
}