import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PlaystationSection from '../../Screens/Library/ListOfPlatforms'
import SteamSection from '../../Screens/Library/SteamSection'
import XboxSection from '../../Screens/Library/XboxSection'
import NintendoSection from '../../Screens/Library/NintendoSection'



  const Tab = createMaterialTopTabNavigator();

  export default function TopTabsNavigator () {
  return (
    <Tab.Navigator
      initialRouteName='Playstation'
      tabBarPosition='top'
      style= {{justifyContent: 'space-evenly'}}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {backgroundColor: '#131114'}
      }}
      >
        <Tab.Screen name='Playstation' component={PlaystationSection} />
        <Tab.Screen name='Xbox' component={XboxSection} />
        <Tab.Screen name='Steam' component={SteamSection} />
        <Tab.Screen name='Nintendo' component={NintendoSection} />
    </Tab.Navigator>
  )
}

