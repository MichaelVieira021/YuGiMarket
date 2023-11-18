import { Animated, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './styles'
import backgroundLogin from '../../assets/images/backgroundLogin.jpg'
import enigmaLogin from '../../assets/images/enigmaLogin.png'


export const Login = () => {
    const enigmaImage = useRef(new Animated.Value(0)).current;

    const teste = () => {
        console.log("teste");

    }

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                enigmaImage,
                {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                }
            )
        ).start();
    }, []);

    return (

        <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.containerInput} >
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Login"
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <Pressable onPress={teste} style={styles.containerEnigma}>
                    <Animated.Image
                        source={enigmaLogin}
                        style={[
                            styles.enigmaImage,
                            {
                                transform: [
                                    {
                                        scale: enigmaImage.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.1,1.3], // Adjust the output range to change the scaling factor
                                        }),
                                    },
                                ],
                            },
                        ]}
                    />
                </Pressable>
                
            </View>
        </ImageBackground>
    )
}