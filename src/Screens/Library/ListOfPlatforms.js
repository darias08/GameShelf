import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import COlORS from '../../components/constants/colors';

const ListOfPlatforms = ({numberOfItems, platformTitles, active, iPressed}) => {

  return (
    <View style={styles.container}>
      
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => iPressed(numberOfItems)}>
          <Text style ={{...styles.textColor, color: active ? COlORS.white : COlORS.light_gray}}>{platformTitles}</Text>
          <Image style = {{height: 10, width:10, alignSelf: 'center', marginTop: 5}} source={active ? require('../../components/Images/dot-icon.png') : null} />
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    height: 50
  },

  textColor: {
    fontSize: 18,
  },
});

export default ListOfPlatforms