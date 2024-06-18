import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/index'

import { Home, Search, Profile } from '../screens';



const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 72
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
         name='home'
         component={Home}
         options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons
                         name={focused ? "home" : "home-outline"}
                         size={24}
                         color={focused ? "#2A4D50" : "#C1C0C8"}
                       />
                }
         }}
        />


        <Tab.Screen
         name='search'
         component={Search}
         options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons
                         name={"search-sharp"}
                         size={24}
                         color={focused ? "#2A4D50" : "#C1C0C8"}
                       />
                }
         }}
        />

        <Tab.Screen
         name='profile'
         component={Profile}
         options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons
                         name={focused ? "person" : "person-outline"}
                         size={24}
                         color={focused ? "#2A4D50" : "#C1C0C8"}
                       />
                }
         }}
        />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation