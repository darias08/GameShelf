import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import COlORS from '../../components/constants/colors'

const ListOfGames = () => {
  return (
    <View>
        <TouchableOpacity activeOpacity={0.7}>
            <ImageBackground style={styles.containerGames} imageStyle={{borderRadius: 5}}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    containerGames: {
        backgroundColor: COlORS.light_gray,
        height: 230,
        width: 160,
        borderRadius: 5,
        elevation: 12,
    },
})

export default ListOfGames