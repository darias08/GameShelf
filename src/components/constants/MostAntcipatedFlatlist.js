import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  SafeAreaView,
  ImageBackground,
  StyleSheet
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import COlORS from '../constants/colors';
import {getImage} from '../services/GameServices';
import {BoxShadow} from 'react-native-shadow';
import FastImage from 'react-native-fast-image';


const {width} = Dimensions.get('window');

const MostAntcipatedFlatlist = ({item, index, navigation}) => {
  
  const shadowOpt = {
    width: 150,
    height: 200,
    color: '#000',
    border: 10,
    radius: 10,
    blur: 10,
    opacity: 0.6,
    x: 0,
    y: 0,
  };


  return (
    <View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('GamePreview', {
              gameId: item.id
            })
          }>
          <BoxShadow setting={shadowOpt}>

          <FastImage
          style={styles.containerGames}
          resizeMode={'cover'}
          source={{uri: getImage(item.cover.image_id)}}
          />
            {/* <ImageBackground
              imageStyle={{borderRadius: 12, borderWidth: 3}}
              resizeMode="cover"
              style={styles.containerGames}
              source={{uri: getImage(item.cover.image_id)}}
            /> */}
          </BoxShadow>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    containerGames: {
        backgroundColor: COlORS.light_gray,
        height: 200,
        width: 140,
        marginBottom: 5,
        borderRadius: 12,
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
        marginTop: 10,
      },
    
      genreText: {
        fontSize: 12,
        opacity: 0.7,
        color: 'white',
        fontFamily: 'RobotoSlab-Regular',
      },

      gameTitle: {
        color: COlORS.white,
        fontFamily: 'RobotoSlab-Bold',
        fontSize: 16,
        marginTop: 15,
        textAlign: 'center',
      },
})

export default MostAntcipatedFlatlist;
