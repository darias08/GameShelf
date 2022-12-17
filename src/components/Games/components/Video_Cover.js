import {View, Text, ScrollView, FlatList, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import { getYoutubePoster, getYoutubePosterNoMaxRes } from '../../services/GameServices';
import COlORS from '../../constants/colors';
import VideoPlayer from 'react-native-video-player';
import YouTube from 'react-native-youtube';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';

const Video_Cover = (props) => {


  return (
    <View>
      <ScrollView style={{width: '100%'}}>
        <FlatList
          data={props.videoCover}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => {
          
              return (

                  <YouTube 
                  videoId={item.video_id}
                  style={{height: 200, width: 300}}
                  apiKey= ''
                  />

                // <ImageBackground
                //   resizeMode="stretch"
                //   imageStyle= {{borderRadius: 12}}
                //   style={styles.videos}
                //   source={checkThumbnail()}>
                //   <View style={styles.projectRow}>
                //     <View style={styles.projectText}>
                //       <TouchableOpacity
                //         activeOpacity={0.8}
                //         >
                        
                //         <Image style = {{width: 45, height: 45, marginLeft: 120, marginTop: 75}} source= {require('../../Images/Icons/play_button.png')}/>

                //       </TouchableOpacity>
                //     </View>
                //   </View>
                // </ImageBackground>
              );
            
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    videos: {
        width: 300,
        borderRadius: 10, 
        marginTop: 30,
        marginLeft: 25,
        backgroundColor: COlORS.dark_gray,
      },
  
      projectText: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width -1
      },
    
      projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },

})

export default Video_Cover;
