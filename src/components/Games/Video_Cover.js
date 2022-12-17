import {View, Text, ScrollView, FlatList, ImageBackground, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import { getYoutubePoster } from '../services/GameServices';
import COlORS from '../constants/colors';

const Video_Cover = (props) => {
  return (
    <View>
      <ScrollView horizontal={true} style={{width: '100%'}}>
        <FlatList
          data={props.video_cover}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => {
            if (index === 0) {
              return (
                <ImageBackground
                  resizeMode="stretch"
                  style={styles.videos}
                  source={{uri: getYoutubePoster(item.video_id)}}>
                  <View style={styles.projectRow}>
                    <View style={styles.projectText}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => props.navigation.goBack()}>
                        <Image
                          style={{
                            width: 35,
                            height: 35,
                            marginLeft: 30,
                            marginTop: 20,
                            position: 'absolute',
                          }}
                          source={require('../Images/Icons/chevron_left.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              );
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    videos: {
        width: '100%',
        height: 220,
        backgroundColor: COlORS.light_gray
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
