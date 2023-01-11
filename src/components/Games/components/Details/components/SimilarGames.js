import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import React from 'react';
import COlORS from '../../../../constants/colors';
import ItemSeparator from '../../../../constants/ItemSeparator';
import { getImage } from '../../../../services/GameServices';

const SimilarGames = ({navigation, similarGames}) => {
    
    return(
    <View>
      <Text style ={{color: 'white', fontFamily: 'RobotoSlab-Regular', fontSize: 16, marginLeft: 30, marginTop: 45}}>Similar Games</Text>
      <FlatList
      data={similarGames}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{paddingLeft: 10}}
      ItemSeparatorComponent={() => <ItemSeparator width={20} />}
      ListHeaderComponent={() =>    <ItemSeparator width={20} />}
      ListFooterComponent={() =>    <ItemSeparator width={50} />}
      renderItem={({item}) => { 

        if (item.cover) {
          return (
          <TouchableOpacity
                style={{marginTop: 20}}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.push('GamePreview', { gameId: item.id})
                }>
              <Image
                resizeMode="cover"
                style={styles.containerGames}
                source={{uri: getImage(item.cover.image_id)}}
              />
            </TouchableOpacity>
          );
          
        }

        else if (!item.cover) {
          return (
            <TouchableOpacity
                style={styles.noImageGame}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.push('GamePreview', { gameId: item.id})
                }>
              
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', paddingRight: 15, paddingLeft: 15}}>
                  {item.name}
                </Text>

            </TouchableOpacity>
          )
        }
       
        }
      }
      
    />

    </View>
    )
  

};

const styles = StyleSheet.create({
  titlePopularNow: {
      fontSize:16,
      color: COlORS.white
    },

  containerGames: {
      backgroundColor: COlORS.dark_gray,
      height: 200,
      width: 140,
      borderRadius: 5,
    },

  noImageGame: {
    backgroundColor: COlORS.dark_gray,
      marginTop: 20,
      height: 200,
      width: 140,
      borderRadius: 5,

      justifyContent: 'center'
  }, 
  
    containerMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    projectText: {
      flex: 1,
      flexDirection: 'row',
      width: Dimensions.get('window').width
    },
  
    projectRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: 30,
      marginTop: 35,
      marginBottom: 20
    },
  
    moreContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 30
    },


    textStyle: {
      color: '#fff',
      fontSize: 18,
    },
});

export default SimilarGames;
