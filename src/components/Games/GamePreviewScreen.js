import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import COlORS from '../../components/constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getImage,
  IGDB_HTTP_REQUEST_PLATFORMS,
} from '../../components/services/GameServices';
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import ReadMore from '@fawazahmed/react-native-read-more';
import Media from './components/Details/components/Media';
import AvailablePlatforms from './components/Capability/AvailablePlatforms';
import GameCapability from './components/Capability/GameCapability';
import Content from './components/Details/components/Content';
import SimilarGames from './components/Details/components/SimilarGames';
import GameDetailsServiceRequest from '../services/GameDetailsService';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const getHeight = Dimensions.get('screen').height;
const getWidth = Dimensions.get('screen').width;

const GamePreviewScreen = ({route, navigation}) => {
  const {gameId} = route.params;
  const [loading, setLoading] = useState(true);
  const [game, setGameDetails] = useState([]);
  const [displayRating, setDisplayRating] = useState(true);
  const [displayReleaseDate, setReleaseDate] = useState(true);

  // const shadowOpt = {
  //   height: 30,
  //   width: 40,
  //   color: '#fff',
  //   border: 10,
  //   opacity: 0.5,
  //   x: 0,
  //   y: 0,
  // };

  useEffect(() => {
    GameDetailsServiceRequest(gameId)
      .then(response => {
        setGameDetails(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);


  const developer = item => {
  

    const data = item.involved_companies;

    data.sort(function (a, b) {
      return b.developer - a.developer;
    });

    return data.map((item, index) => {


      if (item.developer === true && index === 0) {
        return (
          <View key={item.id}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'RobotoSlab-Regular',
              }}>
              Developer
            </Text>
            <Text
              style={{
                color: COlORS.grey,
                marginTop: 10,
                width: width / 1.8,
                flexWrap: 'wrap',
                flexShrink: 1,
                fontSize: 15
              }}>
              {item.company.name}
            </Text>
            
          </View>
        );
      }
      
      else if (!item.developer) {
        null
      }
      
    });
  
    

  };

  const getArtworkCover = item => {
    if (item.artworks) {
      const artworks = item.artworks[0];

      return getImage(artworks.image_id);
    } else if (!item.artworks) {
      if (item.screenshots) {
        const screenshotBG = item.screenshots[0];

        return getImage(screenshotBG.image_id);
      }
    }
  };

  const genreTextLength = (item) => {

    const HackAndSlash = "hack-and-slash-beat-em-up";
    const Strategy = 'turn-based-strategy-tbs';
    const RolePlaying = 'role-playing-rpg';

    if (item.slug === HackAndSlash) {
      return <Text>Hack and Slash</Text>
    }

    else if(item.slug === RolePlaying) {
      return <Text>Role Playing</Text>
    }
    else if (item.slug === Strategy) {
      return <Text>Turn Based Strategy</Text>
    }

    return <Text>{item.name}</Text>
    
  }

  return (
    <View style={{flex: 1, backgroundColor: '#0D0C0E'}}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#0D0C0E',
          }}>
          <ActivityIndicator size={35} color={COlORS.lightBlue} />
        </View>
      ) : (
        <View>
          {game.map(item => {
            if (!item.first_release_date) {
              let rating = item.total_rating;
              let half = (rating / 5 / 20) * 5;
              var roundRating = half.toFixed(1);

              return (
                <View key={item.id}>
                  <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
                    <ImageBackground
                      resizeMode="stretch"
                      style={{width: '100%', height: 275}}
                      source={{uri: getArtworkCover(item)}}>
                      <LinearGradient
                        colors={['transparent', 'rgba(0,0,0, 1)']}
                        style={styles.linearGradient}>
                        {/***************Back Button****************/}
                        <View style={styles.moreContainer}>
                          <TouchableOpacity activeOpacity={0.5}>
                            <Feather
                              name="more-horizontal"
                              size={30}
                              style={styles.moreIcon}
                            />
                          </TouchableOpacity>
                        </View>
                      </LinearGradient>
                    </ImageBackground>

                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']}>
                      <SafeAreaView>
                        <View style={{height: 100, width: '100%'}}></View>
                      </SafeAreaView>
                    </LinearGradient>
                    {/***************Game Cover****************/}
                    <View
                      style={{
                        marginTop: -190,
                      }}>
                      <ImageBackground
                        imageStyle={{
                          borderRadius: 130 / 2,
                          borderWidth: 1,
                          borderColor: COlORS.light,
                        }}
                        style={styles.containerGame}
                        resizeMode="stretch"
                        source={{
                          uri: getImage(item.cover.image_id),
                        }}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          marginTop: 125,
                        }}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                          <FlatList
                            data={item.genres}
                            keyExtractor={item => item.id.toString()}
                            numColumns={4}
                            style={{marginTop: 20, marginLeft: 20}}
                            renderItem={({item, index}) => {
                                return (
                                  <Text
                                    style={{
                                      color: COlORS.light,
                                      fontFamily: 'RobotoSlab-Regular',
                                      fontSize: 10,
                                      paddingHorizontal: 15,
                                      paddingVertical: 10,
                                      borderRadius: 20,
                                      marginLeft: 5,
                                      backgroundColor: COlORS.dark_gray,
                                    }}>
                                    {genreTextLength(item)}
                                  </Text>
                                );
                            }}
                          />
                        </ScrollView>

                        {/* Add/Wishlist button */}
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 15,
                          }}>
                          <TouchableOpacity
                            style={styles.AddButton}
                            activeOpacity={0.8}>
                            <Ionicons
                              name="add"
                              size={20}
                              color={COlORS.white}
                            />
                            <Text style={styles.textAdd}>Add to library</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={styles.WishlistButton}
                            activeOpacity={0.8}>
                            <Ionicons name="bookmark-outline" size={20} />
                            <Text style={styles.textWishlist}>
                              Save to wishlist
                            </Text>
                          </TouchableOpacity>
                        </View>

                        {/* About this game */}
                        <Text style={styles.AboutGame}>About this game</Text>
                        <SafeAreaView style={styles.safeView}>
                          <View style={styles.root}>
                            <ReadMore
                              seeMoreStyle={{color: COlORS.blue}}
                              animate={true}
                              seeLessStyle={{color: COlORS.blue}}
                              seeMoreText="Read more"
                              seeLessText="Read less"
                              style={styles.textStyle}
                              numberOfLines={3}>
                              <Text style={{lineHeight: 22}}>
                                {item.summary}
                              </Text>
                            </ReadMore>
                          </View>
                        </SafeAreaView>

                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'RobotoSlab-Regular',
                            fontSize: 16,
                            marginTop: 20,
                            marginLeft: 25,
                            flex: 1,
                          }}>
                          Media
                        </Text>
                        <Media
                          videoCover={item.videos}
                          screenshots={item.screenshots}
                          artworks={item}
                        />

                        {/* Release Date & Developer */}
                        <SafeAreaView>
                          <View style={{flexDirection: 'row', marginTop: 15}}>
                            <View style={{flexDirection: 'column'}}>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 16,
                                  fontFamily: 'RobotoSlab-Regular',
                                  marginLeft: 20,
                                  marginTop: 20,
                                }}>
                                Release Date
                              </Text>
                              <Text
                                style={{
                                  marginTop: 10,
                                  marginLeft: 20,
                                  fontSize: 14,
                                  fontFamily: 'RobotoSlab-Regular',
                                  color: COlORS.grey,
                                }}>
                                To Be Determined
                              </Text>
                            </View>

                            <View style={{flexDirection: 'column'}}>
                           
                              <View
                                style={{
                                  marginLeft: 35,
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'left',
                                    textAlignVertical: 'center',
                                    marginTop: 20,
                                    fontSize: 14,
                                    fontFamily: 'RobotoSlab-Regular',
                                    color: COlORS.grey,
                                    width: width / 1.85,

                                  }}>
                                  {developer(item)}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </SafeAreaView>

                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'RobotoSlab-Regular',
                            fontSize: 16,
                            marginLeft: 20,
                            marginTop: 30,
                          }}>
                          More Information
                        </Text>

                        <Content
                          involveCompanies={item.involved_companies}
                          collections = {item.collection}
                          navigation={navigation}
                        />
                      </View>

                      {/* Game Title and Rating */}
                      <View style={{flexDirection: 'column', marginLeft: 165}}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'white',
                            fontFamily: 'RobotoSlab-Regular',
                            marginTop: 35,
                            textAlign: 'left',
                            width: 225,
                          }}>
                          {item.name}
                        </Text>

                        {item.total_rating && displayRating
                          ? !isNaN(roundRating) && (
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginTop: 5,
                                  marginLeft: -5,
                                }}>
                                <StarRatingDisplay
                                  starSize={20}
                                  rating={roundRating}
                                  enableHalfStar={true}
                                  style={{marginTop: 0}}
                                  maxStars={5}
                                  starStyle={{width: 10}}
                                />

                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: 16,
                                    marginLeft: 15,
                                    marginRight: 5,
                                    marginTop: -2,
                                    fontFamily: 'RobotoSlab-Bold',
                                  }}>
                                  {roundRating}
                                </Text>
                              </View>
                            )
                          : isNaN && (
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginTop: 5,
                                  marginLeft: -5,
                                }}>
                                <StarRatingDisplay
                                  starSize={20}
                                  rating={roundRating}
                                  enableHalfStar={true}
                                  style={{marginTop: 0}}
                                  maxStars={5}
                                  starStyle={{width: 10}}
                                />

                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: 14,
                                    marginLeft: 15,
                                    marginRight: 5,
                                    fontFamily: 'RobotoSlab-Bold',
                                  }}>
                                  No rating
                                </Text>
                              </View>
                            )}
                      </View>
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'RobotoSlab-Regular',
                        fontSize: 16,
                        marginTop: 45,
                        marginLeft: 20,
                        marginTop: 1000,
                      }}>
                      More Information
                    </Text>

                   

                    {/* <AvailablePlatforms gamePlatforms={gamePlatforms}/> */}

                    {/* <GameCapability gameModes= {gameModes} playerPerspectives = {playerPerspectives} ganeEngine = {gameEngine}/> */}

                    <SimilarGames
                      navigation={navigation}
                      similarGames={item.similar_games}
                    />
                  </ScrollView>

                  <View style={styles.IconChevronLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                        style={{width: 45, height: 45}}
                        source={require('../Images/Icons/chevron_left_circle.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            } else if (item.first_release_date) {
              let rating = item.total_rating;
              let half = (rating / 5 / 20) * 5;
              var roundRating = half.toFixed(1);

              let currentTimestamp = new Date(item.first_release_date * 1000);
              let date = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }).format(currentTimestamp);

              return (
                <View key={item.id}>
                  <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
                    <ImageBackground
                      resizeMode="stretch"
                      style={{width: '100%', height: 275}}
                      source={{uri: getArtworkCover(item)}}>
                      <LinearGradient
                        colors={['transparent', 'rgba(0,0,0, 1)']}
                        style={styles.linearGradient}>
                        {/***************Back Button****************/}
                        <View style={styles.moreContainer}>
                          <TouchableOpacity activeOpacity={0.5}>
                            <Feather
                              name="more-horizontal"
                              size={30}
                              style={styles.moreIcon}
                            />
                          </TouchableOpacity>
                        </View>
                      </LinearGradient>
                    </ImageBackground>

                    <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']}>
                      <SafeAreaView>
                        <View style={{height: 100, width: '100%'}}></View>
                      </SafeAreaView>
                    </LinearGradient>
                    {/***************Game Cover****************/}
                    <View
                      style={{
                        marginTop: -190,
                      }}>
                      <ImageBackground
                        imageStyle={{
                          borderRadius: 130 / 2,
                          borderWidth: 1,
                          borderColor: COlORS.light,
                        }}
                        style={styles.containerGame}
                        resizeMode="stretch"
                        source={{
                          uri: getImage(item.cover.image_id),
                        }}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          marginTop: 125,
                        }}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}>
                          <FlatList
                            data={item.genres}
                            keyExtractor={item => item.id.toString()}
                            numColumns={4}
                            style={{marginTop: 20, marginLeft: 15}}
                            renderItem={({item, index}) => {
                              return (
                                  <Text
                                    style={{
                                      color: COlORS.light,
                                      fontFamily: 'RobotoSlab-Regular',
                                      fontSize: 10,
                                      paddingHorizontal: 15,
                                      paddingVertical: 10,
                                      borderRadius: 20,
                                      marginLeft: 5,
                                      backgroundColor: COlORS.dark_gray,
                                    }}>
                                    {genreTextLength(item)}
                                  </Text>
                                );
                            }}
                          />
                        </ScrollView>

                        {/* Add/Wishlist button */}
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 20,
                          }}>
                          <TouchableOpacity
                            style={styles.AddButton}
                            activeOpacity={0.8}>
                            <Ionicons
                              name="add"
                              size={20}
                              color={COlORS.white}
                            />
                            <Text style={styles.textAdd}>Add to library</Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={styles.WishlistButton}
                            activeOpacity={0.8}>
                            <Ionicons name="bookmark-outline" size={20} />
                            <Text style={styles.textWishlist}>
                              Save to wishlist
                            </Text>
                          </TouchableOpacity>
                        </View>

                        {/* About this game */}
                        <Text style={styles.AboutGame}>About this game</Text>
                        <SafeAreaView style={styles.safeView}>
                          <View style={styles.root}>
                            <ReadMore
                              seeMoreStyle={{color: COlORS.blue}}
                              animate={true}
                              seeLessStyle={{color: COlORS.blue}}
                              seeMoreText="Read more"
                              seeLessText="Read less"
                              style={styles.textStyle}
                              numberOfLines={3}>
                              <Text style={{lineHeight: 22}}>
                                {item.summary}
                              </Text>
                            </ReadMore>
                          </View>
                        </SafeAreaView>


                        {/* Release Date & Developer */}
                        <SafeAreaView>
                          <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flexDirection: 'column'}}>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 16,
                                  fontFamily: 'RobotoSlab-Regular',
                                  marginLeft: 20,
                                  marginTop: 20,
                                }}>
                                Release Date
                              </Text>
                              <Text
                                style={{
                                  marginTop: 10,
                                  marginLeft: 20,
                                  fontSize: 15,
                                  fontFamily: 'RobotoSlab-Regular',
                                  color: COlORS.grey,
                                }}>
                                {date}
                              </Text>
                            </View>

                            <View style={{flexDirection: 'column'}}>
                           
                              <View
                                style={{
                                  marginLeft: 35,
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'left',
                                    textAlignVertical: 'center',
                                    marginTop: 20,
                                    fontSize: 16,
                                    fontFamily: 'RobotoSlab-Regular',
                                    color: COlORS.grey,
                                    width: width / 1.97,

                                  }}>
                                  {developer(item)}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </SafeAreaView>
                        


                        {/* Media */}
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'RobotoSlab-Regular',
                            fontSize: 16,
                            marginTop: 35,
                            marginLeft: 20,
                            flex: 1,
                          }}>
                          Media
                        </Text>
                        <Media
                          videoCover={item.videos}
                          screenshots={item.screenshots}
                        />

                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'RobotoSlab-Regular',
                            fontSize: 16,
                            marginLeft: 20,
                            marginTop: 30,
                          }}>
                          More Information
                        </Text>

                        <Content
                          involveCompanies={item.involved_companies}
                          collections = {item.collection}
                          DLCS = {item.dlcs}
                          gameName= {item.name}
                          navigation={navigation}
                          gameCover={item}
                        />
                      </View>

                      {/* Game Title and Rating */}
                      <View style={{flexDirection: 'column', marginLeft: 165}}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'white',
                            fontFamily: 'RobotoSlab-Regular',
                            marginTop: 35,
                            textAlign: 'left',
                            width: 225,
                          }}>
                          {item.name}
                        </Text>

                        {item.total_rating && displayRating
                          ? !isNaN(roundRating) && (
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginTop: 5,
                                  marginLeft: -5,
                                }}>
                                <StarRatingDisplay
                                  starSize={20}
                                  rating={roundRating}
                                  enableHalfStar={true}
                                  style={{marginTop: 0}}
                                  maxStars={5}
                                  starStyle={{width: 10}}
                                />

                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: 16,
                                    marginLeft: 15,
                                    marginRight: 5,
                                    marginTop: -2,
                                    fontFamily: 'RobotoSlab-Bold',
                                  }}>
                                  {roundRating}
                                </Text>
                              </View>
                            )
                          : isNaN && (
                              <View
                                style={{
                                  flexDirection: 'row',
                                  marginTop: 5,
                                  marginLeft: -5,
                                }}>
                                <StarRatingDisplay
                                  starSize={20}
                                  rating={roundRating}
                                  enableHalfStar={true}
                                  style={{marginTop: 0}}
                                  maxStars={5}
                                  starStyle={{width: 10}}
                                />

                                <Text
                                  style={{
                                    color: 'white',
                                    fontSize: 14,
                                    marginLeft: 15,
                                    marginRight: 5,
                                    fontFamily: 'RobotoSlab-Bold',
                                  }}>
                                  No rating
                                </Text>
                              </View>
                            )}
                      </View>
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'RobotoSlab-Regular',
                        fontSize: 16,
                        marginTop: 45,
                        marginLeft: 30,
                        marginTop: 1000,
                      }}>
                      More Information
                    </Text>

                    {/* <Content
                      involveCompanies={item.involved_companies}
                      navigation={navigation}
                    /> */}

                    {/* <AvailablePlatforms gamePlatforms={gamePlatforms}/> */}

                    {/* <GameCapability gameModes= {gameModes} playerPerspectives = {playerPerspectives} ganeEngine = {gameEngine}/> */}

                    <SimilarGames
                      navigation={navigation}
                      similarGames={item.similar_games}
                    />
                  </ScrollView>

                  <View style={styles.IconChevronLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                        style={{width: 45, height: 45}}
                        source={require('../Images/Icons/chevron_left_circle.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          })}
        </View>
      )}
      {/* <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
        <TouchableOpacity style={styles.AddButton} activeOpacity={0.8}>
          <Text style={styles.textAdd}>Add</Text>
          <Feather
            name="more-horizontal"
            size={25}
            style={{color: 'white', marginLeft: 40}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.WishlistButton} activeOpacity={0.8}>
          <Text style={styles.textWishlist}>Wishlist</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  AboutGame: {
    color: 'white',
    marginTop: 30,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
  },

  linearGradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  linearGradient2: {
    backgroundColor: 'transparent',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  safeView: {
    flex: 1,
    paddingRight: 35,
  },

  root: {
    paddingLeft: 20,
    marginTop: 5,
  },
  textStyle: {
    fontSize: 15,

    fontFamily: 'RobotoSlab-Regular',
    color: COlORS.grey,
  },

  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },

  myEmptyStarStyle: {
    color: 'grey',
  },

  Genres: {
    marginTop: 10,
    fontSize: 14,
    color: COlORS.light,
  },

  columnWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  projectText: {
    marginLeft: 30,
    marginTop: 20,
  },

  IconChevronLeft: {
    width: 50,
    marginLeft: 30,
    marginTop: getHeight / 40,
    position: 'absolute',
    borderRadius: 15,
    paddingLeft: 8,
    paddingVertical: 7,
  },

  moreContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(85, 85, 85, 0.9)',
    position: 'absolute',
    marginLeft: 340,
    marginTop: 28,
    borderRadius: 20,
  },

  moreIcon: {
    color: COlORS.white,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  containerGame: {
    backgroundColor: COlORS.white,
    width: 130,
    height: 125,
    borderRadius: 130 / 2,
    position: 'absolute',
    marginLeft: 20,
  },

  FlatList: {
    paddingLeft: 50,
  },

  listOfPlatforms: {
    marginTop: 10,
    marginLeft: 50,
    color: COlORS.white,
    alignSelf: 'flex-start',
    fontSize: 16,
  },

  GameTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'EBGaramond-Bold',
    width: 210,
    textAlignVertical: 'center',
    marginLeft: 20,
    marginTop: 25,
  },

  AddButton: {
    backgroundColor: '#2653FF',
    width: 175,
    height: 48,
    paddingTop: 12,
    paddingLeft: 20,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
  },

  textAdd: {
    color: 'white',
    marginLeft: 10,
    fontSize: 14,
  },

  WishlistButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 175,
    height: 48,
    paddingLeft: 20,
    borderRadius: 30,
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'row',
  },

  textWishlist: {
    color: COlORS.white,
    fontSize: 14,
    marginLeft: 5,
  },

  platform: {
    color: COlORS.light,
    backgroundColor: '#1F1C25',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 20,
    fontSize: 12,
    marginRight: 10,
    marginTop: 10,
  },
});

export default GamePreviewScreen;
