import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ScreenTest2 = ({navigation}) => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

    <TouchableOpacity activeOpacity={0.6} onPress= {() => navigation.goBack()}>
      <Text style= {{fontSize: 30}}>Back 2</Text>
    </TouchableOpacity>


    </View>
  )
}

export default ScreenTest2