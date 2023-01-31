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
import React, {useState, useCallback, useEffect, useRef} from 'react';
import {getYoutubePoster} from '../../../../services/GameServices';
import {getImage} from '../../../../services/GameServices';
import COlORS from '../../../../constants/colors';
import {YOUTUBE_API_KEY} from '@env';
import ItemSeparator from '../../../../constants/ItemSeparator';
import MediaModal from './Modals/MediaModal';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import YoutubePlayer from "react-native-youtube-iframe";
import { Carousel } from 'react-native-snap-carousel-v4';


const SPACING = 10;
const ItemWidth = Dimensions.get('screen').width - 45

const Media = props => {
  const Screen = Dimensions.get('window')


  if (props.videoCover && props.screenshots) {
    const videos = props.videoCover;
    const screenshot = props.screenshots;
    const allData = videos.concat(screenshot);
    const [playing, setPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const playerRef = useRef();

    const [isModalVisible, setModalVisible] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);

    const onStateChange = useCallback(state => {
      if (state === 'ended') {
        setPlaying(false);
      }
    }, []);

    const onReady = useCallback(() => {
      setIsLoading(false);
    }, []);

  

   const renderItem = ({item,index}) => {
    if(item.video_id) {
      return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setModalVisible(!isModalVisible);
          setClickedIndex(index);
          
        }}>
        <View style={{width: 370, borderRadius: 5, overflow: 'hidden' , height: 205, marginLeft: 10, backgroundColor: COlORS.dark_gray}} pointerEvents='none'>
          
        <YoutubePlayer
          height={370}
          mute={true}
          videoId={item.video_id}
          onChangeState={onStateChange}
          initialPlayerParams={{ controls: false, modestbranding: false }}
          contentScale={0.8}
          play={playing}
          webViewStyle={ {opacity:0.99} }
          forceAndroidAutoplay={true}
        />
        </View>
        </TouchableOpacity>

      )
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
              setClickedIndex(index);
            }}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              resizeMode="stretch"
              source={{uri: getImage(item.image_id)}}
              style={{width: 365, height: 210}}
            />
          </TouchableOpacity>
        </View>
      );
      }

      
   }

    return (
      <SafeAreaView style={{flex: 1}}>
          <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
          <Carousel 
            data={allData}
            sliderWidth={ItemWidth}
            itemWidth={ItemWidth}
            activeSlideAlignment="start"
            ListFooterComponent={() => <ItemSeparator width={50} />}
            renderItem={renderItem}
          />
            <MediaModal
            showModal={isModalVisible}
            closeModal={setModalVisible}
            indexId={clickedIndex}
            allData={allData}
            allVideoId={videos}
            />

          {/* <FlatList
            data={allData}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles.FlatList}
            decelerationRate={0.9}
            disableIntervalMomentum={false}
            pagingEnabled={true}
          
            snapToAlignment={'start'}
            ListFooterComponent={() => <ItemSeparator width={70} />}
            scrollEventThrottle={16}
            initialNumToRender={5}
            renderItem={({item, index}) => {
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
                        setClickedIndex(index);
                      }}>
                      <ImageBackground
                        imageStyle={{borderRadius: 10}}
                        resizeMode="stretch"
                        source={{uri: getImage(item.image_id)}}
                        style={{width: 380, height: 210}}
                      />
                    </TouchableOpacity>
                  </View>
                );
              } else if (item.video_id) {
                return (
                     
                    <View style={{width: 380, borderRadius: 10, overflow: 'hidden' , height: 210, marginLeft: 10}} pointerEvents='none'>
                    <YoutubePlayer
                      height={300}
                      play={playing}
                      mute={true}
                      videoId={item.video_id}
                      forceAndroidAutoplay={true}
                      onChangeState={onStateChange}
                      initialPlayerParams={{ controls: false }}
                    />
                    </View>
                  
                    
                );
              }
            }}
          /> */}
      </View>
      </SafeAreaView>
    );
  } 
  
  else if (props.videoCover && !props.screenshots) {
    const videos = props.videoCover;
    const [isModalVisible, setModalVisible] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatList
            data={videos}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles.FlatList}
            decelerationRate={0.9}
            disableIntervalMomentum={false}
            pagingEnabled={true}
            snapToAlignment={'start'}
            ListFooterComponent={() => <ItemSeparator width={70} />}
            scrollEventThrottle={16}
            initialNumToRender={5}
            renderItem={({item, index}) => {
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
                      <AntDesign
                        name="playcircleo"
                        size={50}
                        color={COlORS.white}
                        style={{marginRight: 10}}
                      />
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              );
            }}
          />

          <MediaModal
          showModal={isModalVisible}
          closeModal={setModalVisible}
          indexId={clickedIndex}
          allData={videos}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  else if (!props.videoCover && props.screenshots) {
    const screenshots = props.screenshots;
    const [isModalVisible, setModalVisible] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);

    return (
      <SafeAreaView>
        <ScrollView>
          <FlatList
            data={screenshots}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles.FlatList}
            decelerationRate={0.9}
            disableIntervalMomentum={false}
            pagingEnabled={true}
            snapToAlignment={'start'}
            ListFooterComponent={() => <ItemSeparator width={70} />}
            scrollEventThrottle={16}
            initialNumToRender={5}
            renderItem={({item, index}) => {
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
            }}
          />

          <MediaModal
          showModal={isModalVisible}
          closeModal={setModalVisible}
          indexId={clickedIndex}
          allData={screenshots}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
};

{/* <FlatList
            data={allData}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={styles.FlatList}
            decelerationRate={0.9}
            disableIntervalMomentum={false}
            pagingEnabled={true}
          
            snapToAlignment={'start'}
            ListFooterComponent={() => <ItemSeparator width={70} />}
            scrollEventThrottle={16}
            initialNumToRender={5}
            renderItem={({item, index}) => {
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
                        setClickedIndex(index);
                      }}>
                      <ImageBackground
                        imageStyle={{borderRadius: 10}}
                        resizeMode="stretch"
                        source={{uri: getImage(item.image_id)}}
                        style={{width: 380, height: 210}}
                      />
                    </TouchableOpacity>
                  </View>
                );
              } else if (item.video_id) {
                return (
                     
                    <View style={{width: 380, borderRadius: 10, overflow: 'hidden' , height: 210, marginLeft: 10}} pointerEvents='none'>
                    <YoutubePlayer
                      height={300}
                      play={playing}
                      mute={true}
                      videoId={item.video_id}
                      forceAndroidAutoplay={true}
                      onChangeState={onStateChange}
                      initialPlayerParams={{ controls: false }}
                    />
                    </View>
                  
                    
                );
              }
            }}
          /> */}
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

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
    paddingLeft: 10,
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

  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
  },
});

export default Media;
