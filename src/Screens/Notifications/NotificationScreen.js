import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";


const NotificationScreen = ({navigation}) => {
  return (
    <LinearGradient colors={[ '#000', '#000']}>
      <SafeAreaView style = {{height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{ width: "100%" }} >

          </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  
})

export default NotificationScreen