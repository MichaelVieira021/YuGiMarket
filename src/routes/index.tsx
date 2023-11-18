import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottonTabRoutes } from './BottonTabRoutes';
import { ImageBackground } from 'react-native';
import { background } from '../../assets/images/navbarpedra.png'

export const Routes = () => {
  return (

    <NavigationContainer>
        {/* <ImageBackground source={background} style={{flex: 1, width: "100%", height: 200}}> */}
            <BottonTabRoutes/>
        {/* </ImageBackground> */}
    </NavigationContainer>

  );
}