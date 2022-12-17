import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import COlORS from '../../../constants/colors'

const VideoSection = () => {
  return (
    <View style = {{height: 200, width: 300, backgroundColor: COlORS.dark_gray, borderRadius: 10, marginTop: 30, marginLeft: 25}}>
      <Image style = {{width: 45, height: 45, marginLeft: 120, marginTop: 75}} source= {require('../../../Images/Icons/play_button.png')}/>
    </View>
  )
}

export default VideoSection