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
import COlORS from '../../../constants/colors';
import ItemSeparator from '../../../constants/ItemSeparator';
import { getImage } from '../../../services/GameServices';

const SimilarGames = ({navigation, similarGames}) => {


    return(

    <View>
      <Text style ={{color: 'white', fontFamily: 'EBGaramond-Bold', fontSize: 20, marginLeft: 25, marginTop: 10}}>Similar Games</Text>
      <FlatList
      data={similarGames}
      keyExtractor={(item, index) => {
                  return index.toString();
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{paddingLeft: 5}}
      ItemSeparatorComponent={() => <ItemSeparator width={20} />}
      ListHeaderComponent={() =>    <ItemSeparator width={20} />}
      ListFooterComponent={() =>    <ItemSeparator width={50} />}
      renderItem={({item}) => {

        return (
          <TouchableOpacity
                style={{marginTop: 20}}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.push('GamePreview', {
                    gameName: item.similar_games.similar_games.name,
                    similarGames: item.similar_games,
                    
                  })
                }>
              <Image
                resizeMode="cover"
                style={styles.containerGames}
                source={{uri: getImage(item.cover.image_id)}}
              />
            </TouchableOpacity>
          );
        }
        
        // if (item.cover.image_id) {
        //           return (
        //             <TouchableOpacity activeOpacity={0.7} onPress = {()=>props.navigation.navigate('GamePreview',  
        //             { gameName: item.name, gameCover: item.cover.image_id, gameReleased: item.first_release_date, gamePlatforms: item.platforms, 
        //             gameSummary: item.summary, similarGames: item.similar_games, Screenshot: item.screenshots, Videos: item.videos,
        //             involveCompanies: item.involved_companies, gameGenres: item.genres, artworks: item.artworks, age_Rating: item.age_ratings, allData: props.data, item })}>
        //                   <Image resizeMode='cover' style={styles.containerGames} source={require('../../../Images/no_image.png')}/>  
        //             </TouchableOpacity>
        //           )
        //       }
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
      backgroundColor: COlORS.light_gray,
      height: 200,
      width: 140,
      borderRadius: 5,
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
