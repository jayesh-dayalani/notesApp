import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationProps } from '../AppNavigator'

interface MyProps {
    navigation: StackNavigationProp<RootNavigationProps, 'Home'>
}
const Home = ({navigation}:MyProps) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})