// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import FAQ from "../screens/FAQ";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Clube PowderMix" component={TabNavigator} />
      <Drawer.Screen name="FAQ" component={FAQ} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;