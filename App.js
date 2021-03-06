import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Book from './Components/Book'
import addBook from './Components/addBook'
import Login from './Components/Login'
import Singup from './Components/SignUp'




const Stack = createStackNavigator();


export default function App() {


  return (
    
<NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen options={{headerShown:false}}  name="Login" component={Login} />
    <Stack.Screen  name="BookDetails" component={Book} />
    <Stack.Screen  name="Signup" component={Singup} />
    <Stack.Screen  name="Add New Book" component={addBook} />
  </Stack.Navigator>
</NavigationContainer>

  )
}
