import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  ImageBackground,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import COlORS from '../../../../../constants/colors';
import {ActivityIndicator} from 'react-native-paper';
import {getImage} from '../../../../../services/GameServices';
import Swiper from 'react-native-swiper';
import YoutubePlayer from 'react-native-youtube-iframe';
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const {width, height} = Dimensions.get('screen');

const MediaModal = ({closeModal, showModal, indexId, allData}) => {
  const [playing, setPlaying] = useState(true);
  const [visible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const indexMatch = indexId;
  const Data = allData;

  const toggleModal = () => {
    closeModal(false);
  };

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }

    if(state === 'paused') {
      setPlaying(false)
    }
    
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);

  }, []);

  console.log(activeSlide)

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

          <Swiper
            loop={false}
            index={indexMatch}
            onIndexChanged={(index) => setActiveSlide(index)}
            >
            {Data.map((item, index) => {
              if (item.video_id) {
               
               return (
                <View key={item.id}>
                  {
                  activeSlide === index ? (
                  <View>
                  
                  <View>
                    

                  </View>

                  <View
                    style={{
                      marginTop: 255,
                      backgroundColor: 'grey',
                      height: 225
                    }}
                    pointerEvents="none">
                    <YoutubePlayer
                      height={300}
                      play={playing}
                      mute
                      videoId={item.video_id}
                      forceAndroidAutoplay={true}
                      onChangeState={onStateChange}
                      initialPlayerParams={{
                        controls: false,
                        modestbranding: false,
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: '100%',
                        position: 'absolute',
                        marginTop: 0,
                      }}
                    />
                  </View>
                  {
                    playing ? (
                      <TouchableOpacity onPress={togglePlaying}>
                      <FontAwesome name='pause' size={25} color={'white'} style={{marginLeft: 40, position: 'absolute'}} />
                    </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={togglePlaying}>
                        <FontAwesome name='play' size={25} color={'white'} style={{marginLeft: 40, position: 'absolute'}} />
                      </TouchableOpacity>
                    )
                  }
                  
                  </View>
                    ) : null
                  }               
                </View>
               )

              } 
              else if (item.image_id) {
                return (
                  <View
                    key={item.id}
                    style={{
                      justifyContent: 'center',
                      flex: 1,
                      marginBottom: 65,
                    }}>
                    <FastImage
                      resizeMode="cover"
                      key={item.id}
                      source={{uri: getImage(item.image_id)}}
                      style={{
                        width: width,
                        height: 230,
                        backgroundColor: '#2A282E',
                      }}
                    />
                    
                  </View>
                )
              }
                
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

export default MediaModal;
