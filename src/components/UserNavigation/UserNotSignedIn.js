import { StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import ForgotPasswordScreen from '../../Screens/User_Log_in/ForgotPasswordScreen';
import LoginScreen from '../../Screens/User_Log_in/LoginScreen';
import RegisterScreen from '../../Screens/User_Log_in/RegisterScreen';
import MainHomeScreen from '../../Screens/User_Log_in/MainHomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function UserNotSignedIn () {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
          animated={true}
          backgroundColor="#07071F"/>
        <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen  
          name="MainHomeScreen" component={MainHomeScreen} 
          />
          <Stack.Screen
          name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
          name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
          name="ForgotPasswordScreen" 
          component={ForgotPasswordScreen} 
          options={{
          headerTintColor: "white",
          headerTransparent: true,
          title: '',
          headerStyle: {backgroundColor: 'transparent'},  
          headerLeft: () => (
          <TouchableOpacity
            style={styles.headerBtnContainer}
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} color="white" style={{paddingRight:30, paddingLeft: 30}}/>
          </TouchableOpacity>  
          ),
          }} 
          />

        </Stack.Navigator>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
});


export default UserNotSignedIn;