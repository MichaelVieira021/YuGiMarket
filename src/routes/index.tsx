import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottonTabRoutes } from './BottonTabRoutes';
import { ImageBackground } from 'react-native';
import { background } from '../../assets/images/navbarpedra.png'
import { useEffect, useState } from "react";
import { Loading } from '../screens/Loading';

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 6000); 
    }, []);

    if (isLoading) {
      return <Loading />;
    }
  return (

    <NavigationContainer>
        {/* <ImageBackground source={background} style={{flex: 1, width: "100%", height: 200}}> */}
            <BottonTabRoutes/>
        {/* </ImageBackground> */}
    </NavigationContainer>

  );
}