import { ImageBackground, Image } from 'react-native';
import { styles } from './styles';
import backgroundLoading from '../../assets/images/backgroundLoading.jpg'
import gifLoading from '../../assets/images/gifLoading.gif'
import { useEffect, useState } from 'react';


export const Loading = () =>{
    
    return(

        <ImageBackground source={backgroundLoading} style={styles.backgroundImage}>
        <Image source={gifLoading} style={styles.gifImage}/> 
        </ImageBackground>

    )
}