import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import COlORS from '../constants/colors'
import { getImage } from '../services/GameServices'
import ItemSeparator from '../constants/ItemSeparator'

const SimilarGames = (props) => {
  

  return (
    <View style= {{marginLeft: 10}}>
      <FlatList 
            data={props.data}
            keyExtractor={(item, index) => {
                    return  index.toString();
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop:20, marginBottom: 50 }}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={30} />}
            ListFooterComponent={() => <ItemSeparator width={40} />}
            renderItem={({ item, index }) => {

              if(!item.cover) {
                return (
                  <TouchableOpacity activeOpacity={0.7}>
                    <ImageBackground style={styles.containerGames} source={require('../Images/no_image.png')} imageStyle={{borderRadius: 5}}/>
                </TouchableOpacity>
                )
              }
              else if (item.cover.image_id) {
                return (
                    <TouchableOpacity activeOpacity={0.7}>
                      <ImageBackground style={styles.containerGames} source={{uri: getImage(item.cover.image_id)}} imageStyle={{borderRadius: 5}}/>
                    </TouchableOpacity>
                )
              }
             
        
              
            }

            }
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
    containerGames: {
        backgroundColor: COlORS.light_gray,
        height: 190,
        width: 140,
        borderRadius: 5,
        elevation: 12,
      },
})

export default SimilarGames