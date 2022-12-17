import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import COlORS from '../constants/colors'
import { getImage } from '../services/GameServices'
import ItemSeparator from '../constants/ItemSeparator'

const TopRatedGames = (props) => {
  return (
    <ScrollView style={{ width: "100%" }} >

    {/* <View style={styles.projectRow}>
        <View style={styles.projectText}>
            <Text style={styles.TopRatedTitle}>Top Rated Games</Text>
          </View>
        <View style={styles.moreContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={{marginRight:10, color: COlORS.light}}>Show All</Text>
        </TouchableOpacity>
        </View>          
    </View> */}

    <FlatList 
        data={props.data}
        keyExtractor={(item, index) => {
        return  index.toString();
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.FlatList}
        decelerationRate='fast'
        disableIntervalMomentum={ false } 
        pagingEnabled={true}
        snapToAlignment={"start"}
        initialNumToRender={5}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={90} />}
        renderItem={({ item }) =>  {
            
             if (item.cover.image_id) {
            return (
              <TouchableOpacity activeOpacity={0.7} onPress = {()=>props.navigation.navigate('GamePreview',  
                { gameName: item.name, gameCover: item.cover.image_id, gameReleased: item.first_release_date, gamePlatforms: item.platforms, 
                gameSummary: item.summary, SG: item.similar_games, Screenshot: item.screenshots, Videos: item.videos,
                involveCompanies: item.involved_companies, gameGenres: item.genres, artworks: item.artworks, item })}>
                      <Image resizeMode='cover' style={styles.containerGames} source= {{uri: getImage(item.cover.image_id)}} />  
                </TouchableOpacity>
            )
          }
        }
        
      }
    />
    
</ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: 40,
        flex: 1,
        backgroundColor: 'blue'
    },

    TopRatedTitle: {
        color: COlORS.white,
        fontWeight: 'bold',
        fontSize: 18
    },

    titleMostAnticipated: {
        fontSize:18,
        marginLeft: 50,
        marginBottom: 10,
        color: COlORS.white
      },

    containerGames: {
        backgroundColor: COlORS.light_gray,
        height: 400,
        width: 340,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 5,
      },
      FlatList: {
        paddingLeft: 30,
        marginTop: 30,
      },

      projectText: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50
      },
    
      projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginTop: 40,
        marginBottom: 10
      },
    
      moreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30
      },

      titleText: {
        color: COlORS.white,
        fontSize: 16,
      },
    
      containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#002fC2',
        justifyContent: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
        paddingLeft: 10,
        borderBottomLeftRadius: 11.5,
        borderBottomRightRadius: 11.5  //Here is the trick
      },
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },

})

export default TopRatedGames