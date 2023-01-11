import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import COlORS from '../../../../../constants/colors';
import {ActivityIndicator} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import ItemSeparator from '../../../../../constants/ItemSeparator';
import {getImage} from '../../../../../services/GameServices';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {
  VideoPlayer,
  DefaultMainControl,
  DefaultBottomControlsBar,
  videoId,
} from 'react_native_youtube_streamer';

const {width, height} = Dimensions.get('screen');
const SPACING = 10;

const ModalTester = ({
  closeModal,
  showModal,
  indexId,
  allData,
  indexClicked,
}) => {
  const [playing, setPlaying] = useState(true);

  const indexMatch = indexId;

  const Data = allData;

  const indexClick = indexClicked;

  const [visible, setIsVisible] = useState(false);

  const toggleModal = () => {
    closeModal(false);
  };

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View>
      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={toggleModal}>
        <View
          style={{
            backgroundColor: COlORS.dark_gray,
            flex: 1,
          }}>
          <View style={styles.closeButton}>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../.../../../../../Images/Icons/close_button.png')}
              />
            </TouchableOpacity>
          </View>

          <Swiper loop={false} index={indexMatch} pagingEnabled>
            {Data.map((item, index) => {
              if (item.video_id) {
                return (
                  <View key={item.id} style={{backgroundColor: 'black', height: 225}}>
                      
                     
                      
                  </View>
                );
              } else if (item.image_id)
                return (
                  <View
                    key={item.id}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                      marginBottom: 65,
                    }}>
                    <ImageBackground
                      resizeMode="stretch"
                      key={item.id}
                      source={{uri: getImage(item.image_id)}}
                      style={{width: width, height: 230}}
                    />
                  </View>
                );
            })}
          </Swiper>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    top: 150,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },

  containerVideo: {},

  Flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButton: {
    zIndex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 25,
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
    width: 65,
  },

  playButton: {
    zIndex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 110,
    right: 180,
    justifyContent: 'center',
    alignContent: 'center',
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

export default ModalTester;
