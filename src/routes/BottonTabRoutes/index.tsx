import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Shop } from '../../screens/Shop';
import { Image, View } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import iconCards from '../../assets/icons/cards.png'
import { Cards } from '../../screens/Cards';
import { Deck } from '../../screens/Deck';

const Tab = createBottomTabNavigator();

export function BottonTabRoutes() {

  return (

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
        }
      }}>

      <Tab.Screen
        options={{
          tabBarIcon: (({ color }) => (
            <Entypo name="shop" size={24} color={color} />
          ))
        }}
        name="SHOP"
        component={Shop}
      />

      <Tab.Screen
        options={{
          tabBarIcon: (({ color }) => (
            <View style={{ width: 38, height: 38, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
              <Image source={iconCards} style={{ width: "100%", height: "100%", tintColor: color }} />
            </View>
          ))
        }}
        name="DECK"
        component={Deck}
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

  )
}