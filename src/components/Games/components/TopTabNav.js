import {View, Text, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DetailSection from './Details/DetailSection';
import Capabilities from './Capability/Capabilities';
import COlORS from '../../constants/colors';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Tab = createMaterialTopTabNavigator();

const win = Dimensions.get('window')

const TopTabNav = props => {

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarPosition="top"
      style={{backgroundColor:'transparent'}}
      backBehavior={'none'}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {backgroundColor: 'transparent'},
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        
      }}      
      >


      
      <Tab.Screen
        name="DETAILS"
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: COlORS.white,
            height: 5,
            borderRadius: 10,
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
            gameSeries = {props.gameSeries}
            gameDLC = {props.gameDLC}
          />
        )}
      />

      <Tab.Screen
        name="Capabilities"
        options={{
          tabBarLabelStyle: {fontSize: 14,},
          tabBarItemStyle: {width: 130},
          tabBarIndicatorStyle: {
            backgroundColor: COlORS.white,
            height: 5,
            borderRadius: 10,
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
