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
  Animated,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {
  getYoutubePoster,
  getYoutubePosterNoMaxRes,
} from '../../../services/GameServices';
import {getImage} from '../../../services/GameServices';
import COlORS from '../../../constants/colors';
import {YOUTUBE_API_KEY} from '@env';
import ItemSeparator from '../../../constants/ItemSeparator';
import {ActivityIndicator} from 'react-native-paper';
import ModalTester from './components/Modal';
import { useNavigation } from '@react-navigation/native';

const SPACING = 10;

const Media = (props) => {
  const [playing, setPlaying] = useState(true);
  const videos = props.videoCover;
  const screenshot = props.screenshots;
  const final = videos.concat(screenshot);
  const [isModalVisible, setModalVisible] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  const shadowOpt = {
    width: 125,
    height: 135,
    color: '#000',
    border: 4,
    radius: 5,
    blur: 10,
    opacity: 0.7,
    x: 0,
    y: 0,
  };

  // const onStateChange = useCallback(state => {
  //   if (state === 'ended') {
  //     setPlaying(false);
  //   }
  // }, []);

  return (
    <View>
      <ScrollView style={{marginTop: 25}}>
        <FlatList
          data={final}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={styles.FlatList}
          decelerationRate={0.7}
          disableIntervalMomentum={false}
          pagingEnabled={true}
          snapToAlignment={'start'}
          ListFooterComponent={() => <ItemSeparator width={100} />}
          scrollEventThrottle={16}
          initialNumToRender={5}
          renderItem={({item, index}) => {
            if (item.video_id) {
              return (
                <View
                  style={{
                    marginHorizontal: SPACING,
                    backgroundColor: COlORS.dark_gray,
                    borderRadius: 10,
                  }}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    resizeMode="stretch"
                    source={{uri: getYoutubePoster(item.video_id)}}
                    style={{width: 330, height: 200}}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.playButton}
                      onPress={() => {
                        setModalVisible(!isModalVisible);
                        setClickedIndex(item.video_id);
                      }}>
                      <Image
                        style={{width: 45, height: 45}}
                        source={require('../../../Images/Icons/play_button.png')}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              );
            } 
            
            else if (item.image_id) {
              return (
                <View
                  style={{
                    marginHorizontal: SPACING,
                    backgroundColor: COlORS.dark_gray,
                    borderRadius: 10,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        setModalVisible(!isModalVisible);
                    }}
                    >
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      resizeMode="stretch"
                      source={{uri: getImage(item.image_id)}}
                      style={{width: 330, height: 200}}
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          }}
        />

        <ModalTester
          showModal={isModalVisible}
          closeModal={setModalVisible}
          videoID={clickedIndex}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  playButton: {
    zIndex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 85,
    right: 135,
    justifyContent: 'center',
    alignContent: 'center',
  },

  FlatList: {
    paddingLeft: 15,
    paddingTop: 20,
  },

  videos: {
    marginTop: 30,
    marginLeft: 25,
    borderRadius: 10,
    backgroundColor: COlORS.dark_gray,
    resizeMode: 'cover',
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 1,
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default Media;
