import React from "react"
import { View, ImageBackground, TextInput, Text, Button, Alert, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import fundoCadastro from "../../assets/images/fundoCadastro.png"

export const Sregister = () => {
    
    return (
        <ImageBackground source={fundoCadastro} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.containerInput} >

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
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

                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputViewButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </ImageBackground>
    )
}