import { Animated, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './styles'
import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import enigmaLogin from '../../assets/images/enigmaLogin.png'


export const Login = () => {
    const enigmaImage = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                enigmaImage,
                {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: false,
                }
            )
        ).start();
    }, []);
    
    return (
       
        <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
            <View style={styles.container}>
            <View style={styles.containerInput} >
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Login"
                        placeholderTextColor="black"
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.containerEnigma}>
                <Pressable>
                    <Animated.Image
                        source={enigmaLogin}
                        style={[styles.enigmaImage, { transform: [{ translateY: enigmaImage.interpolate({ inputRange: [0, 1], outputRange: [0, -50] }) }] }]}
                    />
                </Pressable>
            </View>
        </View>
        </ImageBackground>
    )
}