import React from "react";
import { Routes } from "./src/routes";
import { useFonts } from 'expo-font';

const App = () => {

    const [fontsLoaded, error] = useFonts({
        'Yugi-Bold': require('./src/assets/fonts/yu-gi-oh-matrix-bold.ttf'),
        'Yugi-Normal': require ('./src/assets/fonts/yu-gi-oh-matrix.ttf'),
    });
    if (error) {
        console.error("Erro ao carregar fontes:", error);
    }
    
    return (
        <Routes />
    )
};

export default App;