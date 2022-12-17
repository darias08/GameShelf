import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const XboxSection = () => {
  return (
    <View style={styles.container}>
        <Text style= {styles.textColor}>Xbox</Text>
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

export default XboxSection