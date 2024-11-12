// src/navigators/TabNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CounterScreen from "../screens/CounterScreen";
import ScannerScreen from "../screens/ScannerScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Scanner" component={ScannerScreen} />
      <Tab.Screen name="Counter" component={CounterScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
