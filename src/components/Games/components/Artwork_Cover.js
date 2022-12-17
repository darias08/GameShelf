import {
  View,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {getImage} from '../../services/GameServices';
import COlORS from '../../constants/colors';
import Video_Cover from './Video_Cover';
import Icon  from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Artwork_Cover = (props) => {
  const artcover = props.artwork;

  return (
    <View>
      <ScrollView horizontal={true} style={{width: '100%'}}>
        <FlatList
          data={artcover}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => {
            if (index === 0) {
              return (
                <ImageBackground
                  resizeMode="stretch"
                  style={styles.images}
                  source={{uri: getImage(item.image_id)}}>
                   {/***************Back Button****************/}
                  <View style={styles.projectRow}>
                  <View style={styles.projectText}>
                      <TouchableOpacity activeOpacity={0.8}
                          onPress={() => props.navigation.goBack()}>
                        <Image 
                        style={{ width: 35, height: 35, marginLeft: 30, marginTop: 20, position: 'relative', }}
                        source={require('../../Images/Icons/chevron_left.png')}
                        />
                      </TouchableOpacity>  
                  </View>

                  {/***************More Button****************/}
                  <View style={styles.moreContainer}>
                      <TouchableOpacity activeOpacity={0.5} >
                          
                      </TouchableOpacity>
                      </View>          
                  </View>
                </ImageBackground>
              );
            }
          }}
        />

{/* <Image 
    style={{ width: 35, height: 35, marginLeft: 30, marginTop: 20, position: 'absolute', }}
    source={require('../../Images/Icons/chevron_left.png')}
    /> */}

        {/* <Video_Cover video_cover={props.video_cover} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: 250,
    backgroundColor: COlORS.light_gray,
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30
  },

moreIcon: {
     color: COlORS.white,
     marginTop: 20
},
});
export default Artwork_Cover;
