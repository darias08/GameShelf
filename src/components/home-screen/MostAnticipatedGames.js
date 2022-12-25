import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, Animated, SafeAreaView, ImageBackground} from 'react-native'
import React, { useState, useEffect} from "react";
import ItemSeparator from "../constants/ItemSeparator";
import COlORS from '../constants/colors';
import { getImage } from '../services/GameServices';
import { SharedElement } from 'react-navigation-shared-element';
import GamePreviewScreen from '../Games/GamePreviewScreen';
import Svg from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';
import Backdrop from './Backdrop';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ReadMore from '@fawazahmed/react-native-read-more';
import { BoxShadow } from 'react-native-shadow'


const {width} = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = width * 0.60;

const MostAnticipatedGames = (props) => {

    const scrollZ = React.useRef(new Animated.Value(0)).current;

    const listOfGames = props.data;
    
    const shadowOpt = {
      width:220,
      height:310,
      color:"#000",
      border:10 ,
      radius:10,
      blur: 10,
      opacity:0.6,
      x:0,
      y:0,
    }
    
    return (

        <ScrollView>
        
        <Backdrop scrollZ = {scrollZ} games = {listOfGames}/>

        <TouchableOpacity activeOpacity={0.7} onPress={()=> props.navigation.navigate('Profile')} style= {{marginLeft: 195, marginTop: 30}}>
          <Image source={require('../Images/profile.png')} style = {{width: 45, height: 45, marginLeft: 150,  position: 'relative'}}/>
        </TouchableOpacity>

        <Animated.FlatList 
            data={props.data}
            keyExtractor={(item, index) => {
            return  index.toString();
            }}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles.Flatlist}
            decelerationRate= {0.7}
            disableIntervalMomentum={ false } 
            pagingEnabled={true}
            snapToAlignment={"start"}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollZ } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            initialNumToRender={5}
            ListFooterComponent={() => <ItemSeparator width={160} />}
            renderItem={({ item, index }) =>  {

                const inputRange = [
                  (index - 1) * ITEM_SIZE,
                  index * ITEM_SIZE,
                  (index + 1) * ITEM_SIZE
                ];

                const translateY = scrollZ.interpolate({
                  inputRange,
                  outputRange: [100, 50, 100],
                  extrapolate: 'clamp'
                })

                let currentTimestamp = new Date(item.first_release_date * 1000)
                let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit', }).format(currentTimestamp)


                return (
                  <View style = {{width: ITEM_SIZE}}>

                    <Animated.View style={{
                      marginHorizontal: SPACING,
                      padding: SPACING * 2,
                      paddingBottom: 50,
                      transform: [{translateY}]
                    }}>
                      <TouchableOpacity activeOpacity={0.7} onPress = {()=>props.navigation.navigate('GamePreview',  
                      { gameName: item.name, gameCover: item.cover.image_id, gameReleased: item.first_release_date, gamePlatforms: item.platforms, 
                      gameSummary: item.summary, similarGames: item.similar_games, Screenshot: item.screenshots, Videos: item.videos,
                      involveCompanies: item.involved_companies, gameGenre: item.genres, artworks: item.artworks, age_Rating: item.age_ratings,
                      age_Rating_Description: item.age_ratings, gameModes: item.game_modes, playerPerspectives: item.player_perspectives,
                      gameEngine: item.game_engines, item })}>
                      
                      <BoxShadow setting = {shadowOpt}>
                        <ImageBackground imageStyle={{borderRadius: 12, borderWidth: 3}} resizeMode='cover' style={styles.containerGames} source= {{uri: getImage(item.cover.image_id)}} /> 
                      </BoxShadow>


                      </TouchableOpacity>

                      <Text style = {styles.gameTitle}>{item.name}</Text> 
                      
                      <View style = {{ justifyContent: 'center', alignItems: 'center', width: 220}}>
                        
                        <FlatList 
                          data = {item.genres}
                          keyExtractor={(item, index) => {
                          return  index.toString();
                          }}
                          
                          renderItem = {({ item, index }) => { 
                            if (index === 0) {
                              
                              return (
                                
                                <View style = {styles.genres}>
                                  <View style={styles.genre}>
                                    <Text  style = {styles.genreText}>{item.name}</Text>
                                  </View>
                                </View>
                            );
                            }
                          }
                        }
                        />
                        
                        
                        <Text>{date}</Text>
                         
                       
                      </View>

                    </Animated.View>
                  
                  </View>
                )
              }
            }
        />
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    safe: {
      flex: 1,
      marginTop: -15,
      width: 230,
    },
    root: {
      flex: 1,
      padding: 12,
    },
    textStyle: {
      fontSize: 14,
      color: COlORS.grey,
      lineHeight: 22
    },

    titleMostAnticipated: {
        fontSize:18,
        marginLeft: 50,
        marginBottom: 10,
        color: COlORS.white
      },

    containerGames: {
        backgroundColor: COlORS.light_gray,
        height: 310,
        width: 220,
        marginBottom: 5,
        borderRadius: 12,   
      },
     
      projectText: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width
      },

      Flatlist: {
        paddingLeft: 70,
      },
    
      projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 50,
        marginTop: 10,
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

      gameTitle: {
        color: COlORS.white,
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        marginLeft: 30,
        position: 'relative',
        textAlign: 'center'
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
        position: 'relative', //Here is the trick
        bottom: 0,
        paddingLeft: 10,
        borderBottomLeftRadius: 11.5,
        borderBottomRightRadius: 11.5  //Here is the trick
      },

      
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },

      genre: {
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        marginRight: 4,
        marginBottom: 4,
      },

      genres: {
        flexDirection: 'row',
        marginVertical: 8,
      },

      genreText: {
        fontSize: 10, 
        opacity: 0.6,
        color:'white'
      }
});

export default MostAnticipatedGames


