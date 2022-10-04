// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Inicio from "../screens/Inicio";
import Pedidos from "../screens/Pedidos";
import Historico from "../screens/Historico";
import Contato from "../screens/Contato";

// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Inicio"
        component={Inicio}
      options={{
        headerShown:false,
        tabBarLabel: 'Início',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons
                name="home"
                color={color}
                size={size}
            />
        )
    }}
       />
      <Tab.Screen name="Historico"
       component={Historico}
      options={{
        headerShown:false,
        tabBarLabel: 'Historico',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons
                name="history"
                color={color}
                size={size}
            />
        )
    }} />
      <Tab.Screen 
      name="Pedidos" 
      component={Pedidos}
      
      options={{
        headerShown:false,
        tabBarLabel: 'Pedidos',
        
        tabBarShowLabel:true,
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons
                name="list"
                color={color}
                size={size}
            />
        )
    }} />
      <Tab.Screen name="Contato" component={Contato}
      options={{
        tabBarLabel: 'Contato',
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
                name="whatsapp"
                color={color}
                size={size}
            />
        )
    }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;