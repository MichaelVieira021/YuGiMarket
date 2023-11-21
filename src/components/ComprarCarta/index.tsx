import { Text, TouchableOpacity, View } from "react-native"
import { styles } from './styles'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect} from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { patchUsuarioCards } from "../../services/ApiConta";

interface Usuario {
    id: number;
    nome: string;
    email: string;
    cartas: [];
    deck: [];
    cash: number;
}

export const InfosUser = () => {

    const { usuario, infos } = useContext(LoginContext);
    // const [usuarioInfos, setUsuarioInfos] = useState<Usuario>();

    useEffect(()=> {
        infos()
    },[])

    const trapAdd = async (tipo:string) => {
     
        const indiceAleatorio = Math.floor(Math.random() * tipo.length);
        const cartaAleatoria = tipo[indiceAleatorio];
        console.log(cartaAleatoria);
        const carta = {
            id: cartaAleatoria.id,
            name: cartaAleatoria.name,
            type: cartaAleatoria.type,
            desc: cartaAleatoria.desc,
            img: cartaAleatoria.card_images[0].image_url
        }

        const cartasDoUsuario = await usuario.cartas;
        const atualizado = [...cartasDoUsuario, {carta}]
        await patchUsuarioCards(usuario.id, atualizado);  
        await infos()
    }

    return (

    )
}