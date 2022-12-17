import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SteamSection = () => {
  return (
    <View style={styles.container}>
        <Text style= {styles.textColor}>PC</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  textColor: {
    fontSize: 18,
    color: 'white',
    marginLeft: 50
  },
});

export default SteamSection