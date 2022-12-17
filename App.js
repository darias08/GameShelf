import React, {useEffect, useState} from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, DarkTheme  } from '@react-navigation/native';
import { Appearance } from 'react-native';
import UserNotSignedIn from './src/components/UserNavigation/UserNotSignedIn';
import UserIsSignedIn from './src/components/UserNavigation/UserIsSignedIn';
import 'react-native-gesture-handler';
import COlORS from './src/components/constants/colors';


function GameShelf() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged)
    SplashScreen.hide();
    return unsubscribe;
  }, []);

  if (!user) {
    return (
    <UserNotSignedIn/>
    );
  }

  return (
    
    <UserIsSignedIn/>
  );
}

// const MyTheme = {
//   dark: true,
//   colors: {
//     background: '#0C0E26',
//   },
// };

export default () => {  
  return (
    <NavigationContainer /*theme={DarkTheme}*/>
      <GameShelf />
    </NavigationContainer>
  );
};
