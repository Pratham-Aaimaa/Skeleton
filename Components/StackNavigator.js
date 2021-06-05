import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'


const Stack=createStackNavigator();
const HomeNavigator = () => {
    return (
        <NavigationContainer>
           <Stack.Navigator headerMode="none">
               <Stack.Screen name="Home" component={HomeScreen}/>
               <Stack.Screen name="CryptoDetails" component={CryptoDetails}/>
               <Stack.Screen name="EnrollConditions" component={EnrollConditions}/>
           </Stack.Navigator>
           </NavigationContainer>

    )
}
export default HomeNavigator
const styles = StyleSheet.create({})
