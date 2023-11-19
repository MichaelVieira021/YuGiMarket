import React from "react";
import { Routes } from "./src/routes";
import { useFonts } from 'expo-font';
import { Sregister } from "./src/screens/Sregister";
import { Login } from "./src/screens/Login";

const App = () => {

    const [fontsLoaded, error] = useFonts({
        'Yugi-Bold': require('../yugi-market/src/assets/fonts/yu-gi-oh-matrix-bold.ttf'),
        'Yugi-Normal': require ('../yugi-market/src/assets/fonts/yu-gi-oh-matrix.ttf'),
        'Squealer': require ('../yugi-market/src/assets/fonts/Squealer.otf'),
        'Squealer-Embossed': require ('../yugi-market/src/assets/fonts/SquealerEmbossed.otf')

    });
    if (error) {
        console.error("Erro ao carregar fontes:", error);
    }
    
    return (
        // <Routes />
        <Sregister/>
        // <Login/>
    )
};

export default App;