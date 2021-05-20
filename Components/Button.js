import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'native-base'
const Button = () => {
    return (
        <Button>
        <Text onPress={()=>console.log("Hello")}>Click Here</Text>
        </Button>
    )
}

export default Button

const styles = StyleSheet.create({})
