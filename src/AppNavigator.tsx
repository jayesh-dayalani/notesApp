import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './screens/Splash'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

export type RootNavigationProps = {

    Splash: undefined,
    Home: undefined,
    Login: undefined,
    SignUp: undefined,
}

const Stack = createStackNavigator<RootNavigationProps>()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})