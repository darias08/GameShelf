import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COlORS from '../../../../constants/colors'

const ScreenSliderImages = () => {
  return (
    <View style = {styles.backgroundContainer}>
      <Text>ScreenSliderImages</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: COlORS.dark_gray,
        flex: 1
    }

    
})

export default ScreenSliderImages