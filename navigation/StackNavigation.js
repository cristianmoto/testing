import { View, Text,  } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SignupScreen from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
   
   
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Registro' component={SignupScreen}/>
        </Stack.Navigator>
  
   

    
  )
}


export default StackNavigation