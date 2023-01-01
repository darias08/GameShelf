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
} from '../../../../services/GameServices';
import {getImage} from '../../../../services/GameServices';
import COlORS from '../../../../constants/colors';
import {YOUTUBE_API_KEY} from '@env';
import ItemSeparator from '../../../../constants/ItemSeparator';
import {ActivityIndicator} from 'react-native-paper';
import ModalTester from './Modals/MediaModal';
import {useNavigation} from '@react-navigation/native';
import ImageView from 'react-native-image-viewing';
import {SafeAreaView} from 'react-native-safe-area-context';

const SPACING = 10;

const Media = props => {
  const [playing, setPlaying] = useState(true);
  const videos = props.videoCover;
  const screenshot = props.screenshots;
  const allData = videos.concat(screenshot);
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

  return (
    <SafeAreaView>
      <ScrollView style={{marginTop:35}}>
        <FlatList
          data={allData}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={styles.FlatList}
          decelerationRate={'fast'}
          disableIntervalMomentum={false}
          pagingEnabled={true}
          snapToAlignment={'start'}
          ListFooterComponent={() => <ItemSeparator width={70} />}
          scrollEventThrottle={16}
          initialNumToRender={5}
          renderItem={({item, index}) => {
            if (item.image_id) {
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
                      setClickedIndex(index);
                    }}>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      resizeMode="stretch"
                      source={{uri: getImage(item.image_id)}}
                      style={{width: 340, height: 225}}
                    />
                  </TouchableOpacity>
                </View>
              );
            } else if (item.video_id) {
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
                    style={{width: 340, height: 225}}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.playButton}
                      onPress={() => {
                        setModalVisible(!isModalVisible);
                        setClickedIndex(index);
                      }}>
                      <Image
                        style={{width: 45, height: 45}}
                        source={require('../../../../Images/Icons/play_button.png')}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              );
            }
          }}
        />

        <ModalTester
          showModal={isModalVisible}
          closeModal={setModalVisible}
          indexId={clickedIndex}
          allData={allData}
          allVideoId={videos}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  playButton: {
    zIndex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 95,
    right: 140,
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
