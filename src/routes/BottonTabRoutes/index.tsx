import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Shop } from '../../screens/Shop';
import { Login } from '../../screens/Login';
import { Image, ImageBackground, View } from 'react-native';
import { background } from '../../assets/images/navbarpedra.png'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import iconCards from '../../assets/icons/cards.png'
import cards from '../../assets/images/cartaHorizontal.jpg'
import { Cards } from '../../screens/Cards';

const Tab = createBottomTabNavigator();

export function BottonTabRoutes() {
  return (

    <ImageBackground source={background} style={{flex: 1, width: "100%", height: "100%", overflow: "hidden"}}>

    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        
        tabBarStyle: {
          height: 60,
          backgroundColor: '#272727',
          borderTopWidth: 3,
          borderTopColor: '#b88019',
        },
        
        tabBarActiveBackgroundColor: '#b88019',
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: '#a5a5a5',

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 3
        },

        tabBarIconStyle: {   
          alignItems: 'center',
          marginBottom: -5,
          justifyContent: 'center',
        },

        // tabBarBackground : () => 
        //             <Image
        //               source={require('../../assets/icons/cards.png')}
        //               resizeMode="cover"
        //               style={{

        //                 width: '100%',
        //                 height: '100%',
        //                 position: 'absolute',
        //                 top: 0,
        //                 left: 0,
        //               }}
        //         />,

        
      }}
      >

      <Tab.Screen
        options={{
          tabBarIcon: (({ color }) => (
            <Entypo name="shop" size={24} color={color} />
          )),

      //     tabBarBackground : () => 
      //     <Image
      //       source={require('../../assets/images/cartaHorizontal.jpg')}
      //       resizeMode="contain"
      //       style={{

      //         width: '140%',
      //         height: '150%',
      //         position: 'absolute',
      //         top: 0,
      //         left: -200,
      //       }}
      // />,
        }}
        name="SHOP" 
        component={Shop} 
      />

      <Tab.Screen 
        options={{
          tabBarIcon: (({ color }) => (
            <View style={{width: 38, height: 38, alignSelf: "center", alignItems: "center", justifyContent: "center"}}>
              <Image source={iconCards} style={{width: "100%", height: "100%", tintColor: color}} />
            </View>
          ))
        }}
        name="DECK" 
        component={Login}
      />

      <Tab.Screen 
        options={{
          tabBarIcon: (({ color }) => (
            <MaterialCommunityIcons name="cards" size={24} color={color} />
          ))
        }}
        name="CARDS" 
        component={Cards}
      />

    </Tab.Navigator>
    </ImageBackground>
  );
}