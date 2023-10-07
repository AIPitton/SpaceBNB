import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeS from '../screens/HomeS'
import SearchS from '../screens/SearchS'
import DetailsS from '../screens/DetailsS'
import DetailsC from '../components/DetailsC'
export type RootStackParamList = {
  HomeR: { unit: string }
  SearchR: { unit: string }
  DetailsR: { unit: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeR">
        <Stack.Screen
          name="HomeR"
          component={HomeS}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchR"
          component={SearchS}
          options={{
            title: 'Search your destination',
            headerStyle: { backgroundColor: '#1B2B85' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="DetailsR"
          component={DetailsS}
          options={{
            title: 'Destination Details',
            headerStyle: { backgroundColor: '#1B2B85' },
            headerTintColor: '#fff',
          }}
        />      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
