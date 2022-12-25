import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailSection from './Details/DetailSection';
import Capabilities from './Capability/Capabilities';
import COlORS from '../../constants/colors';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

//Screens
import ScreenSliderImages from './Details/components/ScreenSliderImages';



const Tab = createMaterialTopTabNavigator();

const TopTabNav = props => {

  return (
    <Tab.Navigator
      initialRouteName="Details"
      tabBarPosition="top"
      style={{backgroundColor:'transparent'}}
      
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {backgroundColor: 'transparent'},
        swipeEnabled: false,
        tabBarScrollEnabled: true,
      }}>

      
      <Tab.Screen
        name="DETAILS"
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: COlORS.white,
            height: 5,
            borderRadius: 10,
            width: 80,
            marginLeft: 25,
            
          },
          tabBarLabelStyle: {fontSize: 14},
          tabBarItemStyle: {width: 130},
        }}
        children={() => (
          <DetailSection
            gameDesc={props.gameDesc}
            ageRating={props.ageRating}
            ageDescription={props.ageDescription}
            videoCover = {props.videoCover}
            screenshots = {props.Screenshot}
            involveCompanies = {props.involveCompanies}
            gameGenre = {props.gameGenre}
            gamePlatforms = {props.gamePlatforms}
            gameSummary = {props.gameSummary}
            similarGames = {props.similarGames}
            navigation = {props.navigation}
            gameReleased = {props.gameReleased}
            gameName = {props.gameName}
            total_Rating = {props.total_Rating}

          />
        )}
      />

      <Tab.Screen
        name="Capabilities"
        options={{
          tabBarLabelStyle: {fontSize: 14},
          tabBarItemStyle: {width: 130},
          tabBarIndicatorStyle: {
            backgroundColor: COlORS.white,
            height: 5,
            borderRadius: 10,
            width: 125,
            marginLeft: 3
          },
        }}
        children={() => (
          <Capabilities
            gamePlatforms = {props.gamePlatforms}
            gameModes = {props.gameModes}
            playerPerspectives = {props.playerPerspectives}
            gameEngine = {props.gameEngine}
            navigation = {props.navigation}
          />
        )}
      />
    </Tab.Navigator>
  );
};


export default TopTabNav;
