import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, } from 'react-native'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import COlORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createStackNavigator } from 'react-navigation-stack';

//Screens
import HomeScreen from '../../Screens/Home/HomeScreen';
import SearchScreen from '../../Screens/Search/SearchScreen';
import NotificationScreen from '../../Screens/Notifications/NotificationScreen';
import LibraryScreen from '../../Screens/Library/LibraryScreen';
import ProfileScreen from '../../Screens/Home/ProfileScreen';
import PlaystationScreen from '../../Screens/Home/PlaystationScreen';
import GamePreviewScreen from '../Games/GamePreviewScreen'
import GameDetails from '../Games/GameDetails';
import VideoScreen from '../constants/VideoScreen';
import PopularNow from '../home-screen/PopularNow';
import NewReleaseVideos from '../constants/NewReleaseVideos';
import NewReleases from '../home-screen/NewReleases';


//Bottom Tab Names
const homeName = 'Home';
const searchName = 'Search';
const notificationName = 'Notification';
const libraryName = 'Library';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar hidden/>  
      <Tab.Navigator
      activeColor='#fff'
      inactiveColor= '#666666' 
      barStyle={{backgroundColor: COlORS.dark_gray}} 
      initialRouteName='HomeScreen' 
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, fontSize}) => {
          let iconName;
          let routeName = route.name;

          if (routeName === homeName) {
            iconName = focused ? 'home' : 'home-outline' 
          }
          else if (routeName === searchName) {
              iconName = focused ? 'search' : 'search-outline'
          }
          
          else if (routeName === notificationName) {
              iconName = focused ? 'notifications' : 'notifications-outline'
          }

          else if (routeName === libraryName) {
              iconName = focused ? 'library' : 'library-outline'
          }

          return <Ionicons name ={iconName} size={20} color= {color}/>
          
        },
      })}
      >
    
    
    {/*Bottom Tab navigation*/}
    <Tab.Screen name={homeName} component = {StackScreen} />
    <Tab.Screen name={searchName} component = {SearchScreen}/>
    <Tab.Screen name={notificationName} component = {NotificationScreen}/>
    <Tab.Screen name={libraryName} component = {LibraryScreen}/>


    </Tab.Navigator>

    </SafeAreaView>
  );
}
  const name = "BottomTabs2"; 
  const Stack2 = createSharedElementStackNavigator({
    name: "Stack2",
    debug: false,

  });

  const StackScreen = () => (
    <Stack2.Navigator>
      <Stack2.Screen name = {'Main'} component={HomeScreen} options= {{headerShown: false}}/>
    </Stack2.Navigator>
  );

  //const Stack = createNativeStackNavigator();
  //const Stack = createStackNavigator();
  //const Stack = createSharedElementStackNavigator();

const UserIsSignedIn = () => {
  
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  
  return (
      <Stack.Navigator
        detachInactiveScreens={false}
        screenOptions={{
        headerShown: false
        }}
      >
      {/* Bottom Tabs */}
      <Stack.Screen name={name}  component= {MyTabs} options={{headerShown: false}}/>
      
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>

      <Stack.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{
              headerTintColor: "white",
              headerTransparent: true,
              title: '',
              headerStyle: {backgroundColor: 'transparent'},
              animation: 'slide_from_right',
        }}/>
     
      
      {/* {/* Playstation Screen  */}
      <Stack.Screen 
      name="Playstation" 
      component={PlaystationScreen}
      options={{
      headerTintColor: "white",
      headerTransparent: true,
      title: '',
      headerStyle: {backgroundColor: 'transparent'},
      animation: 'slide_from_right',  
      }} />

      <Stack.Screen name='GamePreview' component={GamePreviewScreen} />


      {/* <Stack.Screen 
      name="GamePreview" 
      component={GamePreviewScreen}
      list
      sharedElements={(route, otherRoute, showing) => {
        if (otherRoute.name === 'GameDetails') {
          return [
           {
            
           }
          ]
        }
        const { item } = route.params;
          return [
            {
            id: `item.${item.id}.game`,
            animation: 'move',
            resize: 'clip',
        
        },
      ];
      }}
      /> */}


      <Stack.Screen name='NewReleaseVideos' component={NewReleaseVideos} />
      
      <Stack.Screen name='VideoScreen' component={VideoScreen} options= {{animationEnabled: false}}/>
      
      
      </Stack.Navigator>
  
  )
}

export default UserIsSignedIn;

// animation: 'slide_from_right',
// headerLeft: () => (
//   <TouchableOpacity
//       style={styles.headerBtnContainer}
//       onPress={() => navigation.goBack()}>
//     <Ionicons name="chevron-back" size={25} color="white" style={{paddingRight:30, paddingLeft: 30}}/>
//   </TouchableOpacity>  
//   ),


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
});