import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeNavigator from "./HomeNavigator";
import UpcomingProjects from "../Screens/UpcomingProjects";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
      <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="OngoingProjects" component={HomeNavigator} />
      <Tab.Screen name="UpcomingProjects" component={UpcomingProjects} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomTabNavigator;

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.25,
        shadowRadius:3.5,
        elevation:5
    }
});
