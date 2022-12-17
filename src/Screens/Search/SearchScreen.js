import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ScrollTest from './ScrollTest'
import TopTabNav from '../../components/Games/components/TopTabNav'


const SearchScreen = ({navigation}) => {
  return (
    <ScrollView {...TopTabNav} nestedScrollEnabled={true} showsVerticalScrollIndicator= {true} style= {{backgroundColor:'#0C0E26'}}  scrollEnabled= {true} contentContainerStyle={{flexGrow: 1}} >
     <View style = {{width: 300, height: 300, backgroundColor: 'grey', borderRadius: 50}}/>
     <View style = {{width: 200, height: 200, backgroundColor: 'grey', borderRadius: 50}}/>
     
     <TopTabNav/>
    
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0E26',
  }
})

export default SearchScreen;