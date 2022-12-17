import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailSection from './Details/DetailSection';
import Specifications from './Specifications';

const Tab = createMaterialTopTabNavigator();

const TopTabNav = props => {
  const gameDesc = props.gameDesc;
  const ageRating = props.ageRating;
  const ageDescription = props.ageDescription;
  const videoCover = props.videoCover;

  return (
    <Tab.Navigator
      initialRouteName="Details"
      tabBarPosition="top"
      style={{justifyContent: 'space-evenly', minHeight: 2000}}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {backgroundColor: 'transparent'},
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {color: 'red'},
        
      }}>
      <Tab.Screen
        name="Details"
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
            height: 5,
            borderRadius: 10,
            width: 80,
            marginLeft: 25,
          },
          tabBarLabelStyle: {textTransform: 'capitalize', fontSize: 14},
          tabBarItemStyle: {width: 130},
        }}
        children={() => (
          <DetailSection
            gameDesc={gameDesc}
            ageRating={ageRating}
            ageDescription={ageDescription}
            videoCover = {videoCover}
          />
        )}
      />

      <Tab.Screen
        name="Specifications"
        component={Specifications}
        options={{
          tabBarLabelStyle: {textTransform: 'capitalize', fontSize: 14},
          tabBarItemStyle: {width: 130},
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
            height: 5,
            borderRadius: 10,
            width: 125,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNav;
