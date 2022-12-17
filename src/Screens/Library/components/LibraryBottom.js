import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import ListOfGames from '../LibraryGames';
import ItemSeparator from '../../../components/constants/ItemSeparator';
import COlORS from '../../../components/constants/colors';

const LibraryBottom = () => {

    const Games = ['Final Fantasy XV', 'Kingdom Hearts', 'Legend of Zelda Ocarina of Time' ]

  return (
    
      <FlatList 
            data={Games}
            keyExtractor={(item, index) => {
            return  index.toString();
            }}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={2}
            renderItem={({ item }) => 
            
            <View>
              <TouchableOpacity activeOpacity={0.7}>
                  <ImageBackground style={styles.containerGames} imageStyle={{borderRadius: 5}}/>
              </TouchableOpacity>
            </View>
            
            }
        />
   
  )
}

const styles = StyleSheet.create({

    columnWrapper: {
        paddingLeft: 35,
        paddingTop: 20,
        paddingEnd: 40,
        justifyContent: 'space-between'
    },

    containerGames: {
      backgroundColor: COlORS.light_gray,
      height: 230,
      width: 160,
      borderRadius: 5,
      elevation: 12,
  },
    

})

export default LibraryBottom