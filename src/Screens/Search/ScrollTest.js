import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ScrollTest = () => {
  return (
    <View>
      <View style = {{width: 300, height: 300, backgroundColor: 'blue', borderRadius: 50}}/>
     <View style = {{width: 300, height: 300, backgroundColor: 'red', borderRadius: 50}}/>
     <TouchableOpacity activeOpacity={0.6} onPress= {() => navigation.navigate('Test1')}>
     <View style = {{width: 300, height: 300, backgroundColor: 'green', borderRadius: 50}}/>
     </TouchableOpacity>
     <View style = {{width: 300, height: 300, backgroundColor: 'black', borderRadius: 50}}/>
    </View>
  )
}

export default ScrollTest