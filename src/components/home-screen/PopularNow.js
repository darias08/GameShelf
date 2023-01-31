import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import ItemSeparator from '../constants/ItemSeparator';
import COlORS from '../constants/colors';
import {getImage} from '../services/GameServices';
import LinearGradient from 'react-native-linear-gradient';
import GameRating from '../Games/components/Details/components/GameRating';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-reanimated-carousel';
import CarouselDots from 'react-native-animated-dots-carousel';

const ItemWidth = Dimensions.get('screen').width - 30;
const width = Dimensions.get('window').width;

const PopularNow = props => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [textLength, setTextLength] = useState(true);

  const isCarousel = useRef(null);

  const renderItem = ({item, index}) => {
    // const artworkCover = () => {
    //   if (item.artworks || index === 0) {
    //     const artwork = item.artworks[0];
    //     return artwork.image_id;
    //   }
    // };

    const ScreenShotCover = () => {

      const screenShotCover = item.screenshots[0]
      return screenShotCover.image_id
    };

    const textLengthLong = () => {
      if (item.name.length >= 20) {
        return <Text style={{color: 'white'}}>{item.name}</Text>;
      }
    };

    const genreTextLength = item => {
      const HackAndSlash = 'hack-and-slash-beat-em-up';
      const Strategy = 'turn-based-strategy-tbs';
      const RolePlaying = 'role-playing-rpg';

      if (item.slug === HackAndSlash) {
        return <Text>Hack and Slash</Text>;
      } else if (item.slug === RolePlaying) {
        return <Text>Role Playing</Text>;
      } else if (item.slug === Strategy) {
        return <Text>Turn Based Strategy</Text>;
      }

      return <Text>{item.name}</Text>;
    };

    const developer = () => {
      if (item.involved_companies) {
        const data = item.involved_companies;

        data.sort(function (a, b) {
          return b.developer - a.developer;
        });

        return data.map((item, index) => {
          if (item.developer === true && index === 0) {
            return <Text key={item.id}>{item.company.name}</Text>;
          }
        });
      }
    };


    return (

      <View>
        {activeSlide === index ? (
          <FastImage
            resizeMode={'stretch'}
            style={{
              backgroundColor: '#565656',
              borderRadius: 15,
              height: 300,
              width: 450,
              marginTop: -30,
              marginLeft: ItemWidth - 400,
            }}
            source={{uri: getImage(ScreenShotCover())}}>
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0, 0.5)',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <FlatList
                  data={item.platforms}
                  style={{paddingLeft: 15, paddingTop: 5}}
                  numColumns={10}
                  renderItem={({item, index}) => {
                  if(index === 0 || index === 1 || index === 2)
                    return (
                      <View style={{marginLeft: 10, marginTop: 10, flexDirection: 'row'}}>
                        {
                          item.abbreviation === 'PS4' && 'PS5' && (
                            <Ionicons name='logo-playstation' size={25} color={'#DAD9DB'}/>
                          )
                        }
                        {
                          item.abbreviation === 'XONE' && 'Series X' && (
                          <Ionicons name='logo-xbox' size={25} color={'#DAD9DB'} />
                          )
                        }

                        {
                          item.abbreviation === 'PC' && (
                            <AntDesign name='windows' size={25} color={'#DAD9DB'} />
                          )
                        }

                        {
                          item.abbreviation === 'Linux' && (
                            <AntDesign name='apple1' size={25} color={'#DAD9DB'} />
                          )
                        }

                        {
                          item.abbreviation === 'Switch' && (
                            <MaterialCommunityIcons name='nintendo-switch' size={25}  />
                          )
                        }

                      </View>
                    );
                  }}
                />
              </View>

              <View>
                {textLength
                  ? item.name.length >= 25 && (
                      <Text
                        style={{
                          fontSize: 23,
                          color: 'white',
                          fontFamily: 'RobotoSlab-Bold',
                          marginLeft: 25,
                          width: 320,
                          marginTop: 5
                        }}>
                        {textLengthLong()}
                      </Text>
                    )
                  : null}

                {textLength
                  ? item.name.length < 24 && (
                      <Text
                        style={{
                          fontSize: 23,
                          color: 'white',
                          fontFamily: 'RobotoSlab-Bold',
                          marginLeft: 25,
                          marginTop: 5
                        }}>
                        {item.name}
                      </Text>
                    )
                  : null}

                <Text style={styles.developerTitle}>{developer()}</Text>

                <View style={{alignSelf: 'flex-start', height: 50}}>
                  <FlatList
                    data={item.genres}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    style={{paddingLeft: 20}}
                    renderItem={({item, index}) => {
                      return (
                        <Text style={styles.genresText}>
                          {genreTextLength(item)}
                        </Text>
                      );
                    }}
                  />
                </View>
              </View>
              {textLength
                ? item.name.length >= 25 && (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <LinearGradient
                        colors={[COlORS.lightBlue, '#6058cc']}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 1}}
                        style={{
                          marginTop: 30,
                          marginLeft: 30,
                          borderRadius: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('GamePreview', {
                              gameId: item.id,
                            })
                          }>
                          <Text style={styles.seeMoreButton}>See More</Text>
                        </TouchableOpacity>
                      </LinearGradient>

                      <View
                        style={{
                          marginLeft: 350,
                          marginTop: 15,
                          position: 'absolute',
                        }}>
                        <GameRating Rating={item.total_rating} />
                      </View>
                    </View>
                  )
                : null}

              {textLength
                ? item.name.length < 24 && (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <LinearGradient
                        colors={[COlORS.lightBlue, '#6058cc']}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 1}}
                        style={{
                          marginTop: 55,
                          marginLeft: 30,
                          borderRadius: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('GamePreview', {
                              gameId: item.id,
                            })
                          }>
                          <Text
                            style={{
                              color: 'white',
                              paddingHorizontal: 45,
                              paddingVertical: 15,
                              borderRadius: 10,
                              fontSize: 16,
                              position: 'relative',
                            }}>
                            See More
                          </Text>
                        </TouchableOpacity>
                      </LinearGradient>

                      <View
                        style={{
                          marginLeft: 350,
                          marginTop: 45,
                          position: 'absolute',
                        }}>
                        <GameRating Rating={item.total_rating} />
                      </View>
                    </View>
                  )
                : null}
            </View>
          </FastImage>
        ) : (
          <ImageBackground
          resizeMode={'stretch'}
            imageStyle={{borderRadius: 15}}
            style={{
              backgroundColor: '#565656',
              borderRadius: 15,
              height: 300,
              width: 450,
              marginTop: -30,
              marginLeft: ItemWidth - 400,
            }}
            blurRadius={10}
            source={{uri: getImage(ScreenShotCover())}}>
           <View
              style={{
                flex: 1,
                borderRadius: 15,
                backgroundColor: 'rgba(0,0,0, 0.5)',
              }}></View>
          </ImageBackground>
        )}

        

      </View>
    );
  };

  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.projectRow}>
        <View style={styles.projectText}>
          <Text style={styles.titlePopularNow}>Most Popular now</Text>
        </View>
      </View>

      <ScrollView horizontal={true} style={{width: '100%', height: '100%'}}>
        <SafeAreaView style={{flex: 1}}>
          <Carousel
            loop
            width={width}
            height={250}
            data={props.data}
            pagingEnabled={true}
            renderItem={renderItem}
            scrollAnimationDuration={600}
            autoPlayInterval={6000}
            mode="parallax"
            onSnapToItem={index => setActiveSlide(index)}
            windowSize={1}
          />

          
          {/* <Pagination
            dotsLength={props.data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 10,
              marginHorizontal: -5,
              marginTop: -10,
              backgroundColor: COlORS.lightBlue,
            }}
            tappableDots={false}
            inactiveDotStyle={{
              backgroundColor: COlORS.light,
              width: 15,
              height: 15,
              borderRadius: 10,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          /> */}

          {/* <AnimatedDotsCarousel
            length={props.data.length}
            currentIndex={index}
            maxIndicators={5}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
              color: COlORS.blue,
              margin: 3,
              opacity: 1,
              size: 13,
            }}
            inactiveIndicatorConfig={{
              color: 'white',
              margin: 3,
              opacity: 0.5,
              size: 10,
            }}
            decreasingDots={[
              {
                config: {color: 'white', margin: 3, opacity: 0.5, size: 6},
                quantity: 1,
              },
              {
                config: {color: 'white', margin: 3, opacity: 0.5, size: 4},
                quantity: 1,
              },
            ]}
          /> */}

          {/* <Carousel
            layout="default"
            data={props.data}
            sliderWidth={300}
            itemWidth={ItemWidth}
            loop={true}
            onSnapToItem={index => setIndex(index)}
            activeSlideAlignment="start"
            ListFooterComponent={() => <ItemSeparator width={50} />}
            renderItem={renderItem}
            loopClonesPerSide={10}
          /> */}
        </SafeAreaView>
      </ScrollView>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 8,
  },

  titlePopularNow: {
    fontSize: 20,
    marginLeft: 10,
    color: COlORS.white,
    fontFamily: 'RobotoSlab-Regular',
  },

  seeMoreButton: {
    color: 'white',
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: 16,
    position: 'relative',
  },

  developerTitle: {
    color: '#E5E3EA',
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
    marginLeft: 25,
    marginTop: 5,
  },

  genresText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    fontFamily: 'RobotoSlab-Regular',
    marginLeft: 5,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0)',
  },

  containerGames: {
    backgroundColor: COlORS.light_gray,
    height: 200,
    width: 150,
    borderRadius: 15,
  },

  gameTitle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'RobotoSlab-Bold',
    marginLeft: 25,
    width: 270,
  },

  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 20,
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },

  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PopularNow;
