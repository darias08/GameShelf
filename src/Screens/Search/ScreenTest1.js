import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ScreenTest1 = ({navigation}) => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

    <TouchableOpacity activeOpacity={0.6} onPress= {() => navigation.goBack()}>
      <Text style= {{fontSize: 30}}>Back 1</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.6} onPress= {() => navigation.navigate('Test2')}>
      <Text style= {{fontSize: 30, marginTop: 30}}>Next</Text>
    </TouchableOpacity>


    </View>
  )
}

export default ScreenTest1