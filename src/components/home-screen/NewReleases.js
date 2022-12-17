import { View, Text, ScrollView, FlatList, TouchableOpacity,ImageBackground, StyleSheet, Image, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import ItemSeparator from "../constants/ItemSeparator";
import COlORS from '../constants/colors';
import { getYoutubePoster } from '../services/GameServices';
import { SharedElement } from 'react-navigation-shared-element';

const NewReleases = (props) => {

    return (
    <ScrollView style={{ width: "100%" }}>
      <View>
      <View style={styles.projectRow}>
          <View style={styles.projectText}>
              <Text style={styles.titleText}>New Release Trailers</Text>
            </View>
          <View style={styles.moreContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={{marginRight:10, color: COlORS.light}}>Show All</Text>
          </TouchableOpacity>
          </View>          
      </View>

      <FlatList 
            data={props.data}
            keyExtractor={(item, index) => {
            return  index.toString();
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:30, marginTop: 10 }}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={65} />}
            renderItem={({ item }) => 

            
            <ImageBackground style={styles.coverGames} source={{uri: getYoutubePoster(item.video.videoId)}} resizeMode='stretch' imageStyle={{borderRadius: 8}} >
              <TouchableOpacity style = {styles.playButton} activeOpacity={0.6} onPress={() => props.navigation.navigate('NewReleaseVideos', {videoId: item.video.videoId, item})}>
                <Image style={{width:50, height:35}} source={require('../Images/Icons/youtube.png')} />
              </TouchableOpacity>
            </ImageBackground>
          
          }
        />

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  titleNewReleases: {
      fontSize:16,
      width: 35,
      height: 35
    },

    playButton: {
      height: 45,
      width: 45,
      marginLeft: 110,
      marginTop: 60,
    },

    projectText: {
      flex: 1,
      flexDirection: 'row',
      width: Dimensions.get('window').width - 50
    },
  
    projectRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: 50,
      marginTop: 30,
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

  coverGames: {
      backgroundColor: COlORS.light_gray,
      width: 260,
      height: 160,
      marginTop: 10,
      borderRadius: 8,
      elevation: 8,
    },

    releasesTitle: {
      fontSize:15,
      marginLeft: 5,
      marginTop: 10,
      color: COlORS.grey,
      width:250,
      lineHeight:20
    },


   
});


export default NewReleases