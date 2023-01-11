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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import COlORS from '../../components/constants/colors';
import Feather from 'react-native-vector-icons/Feather';
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

const {width} = Dimensions.get('window');

const GamePreviewScreen = ({route, navigation}) => {
  const {gameId} = route.params;
  const [loading, setLoading] = useState(true);
  const [game, setGameDetails] = useState([]);
  const [displayRating, setDisplayRating] = useState(true);
  const [displayReleaseDate, setReleaseDate] = useState(true);

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

  // involveCompanies.push(involveCompanies[0]);

  return (
    <View style={{flex: 1, backgroundColor: '#0D0C0E'}}>
      {loading ? (
        <ActivityIndicator
          size={35}
          color={COlORS.blue}
          style={{marginTop: 240}}
        />
      ) : (
        <View style={{flex: 1, backgroundColor: '#0D0C0E'}}>
          {game.map(item => {
            if (!item.first_release_date) {
              const involveCompanies = item.involved_companies;
              let rating = item.total_rating;
              let half = (rating / 5 / 20) * 5;
              var roundRating = half.toFixed(1);

              return (
                <View key={item.id}>
                  <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}>
                    {/***************Back Button****************/}
                    <View style={styles.projectRow}>
                      <View style={styles.projectText}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                          <Feather
                            name={'chevron-left'}
                            size={35}
                            color={'white'}
                          />
                        </TouchableOpacity>

                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            marginLeft: 95,
                            marginTop: 5,
                          }}>
                          Game Details
                        </Text>
                      </View>

                      {/***************More Button****************/}
                      <View style={styles.moreContainer}>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Feather
                            name="more-horizontal"
                            size={30}
                            style={styles.moreIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/***************Game Cover****************/}
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 33,
                        marginTop: 35,
                      }}>
                      <ImageBackground
                        imageStyle={{borderRadius: 20}}
                        style={styles.containerGame}
                        resizeMode="cover"
                        source={{
                          uri: getImage(item.cover.image_id),
                        }}></ImageBackground>
                    </View>

                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'white',
                          fontFamily: 'RobotoSlab-Regular',
                          marginTop: 25,
                          textAlign: 'center',
                          width: 300,
                        }}>
                        {item.name}
                      </Text>

                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <FlatList
                          data={item.genres}
                          keyExtractor={item => item.id.toString()}
                          numColumns={2}
                          style={{marginTop: 10}}
                          renderItem={({item, index}) => {
                            if (index === 0 || index === 1) {
                              return (
                                <Text
                                  style={{
                                    marginLeft: 5,
                                    color: COlORS.light,
                                    fontFamily: 'RobotoSlab-Regular',
                                    fontSize: 10,
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: '#242425',
                                  }}>
                                  {item.name}
                                </Text>
                              );
                            }
                          }}
                        />
                      </ScrollView>

                      {item.total_rating && displayRating
                        ? !isNaN(roundRating) && (
                            <View style={{flexDirection: 'row', marginTop: 11}}>
                              <StarRatingDisplay
                                starSize={20}
                                rating={roundRating}
                                enableHalfStar={true}
                                style={{marginTop: 3}}
                                maxStars={5}
                                starStyle={{width: 10}}
                              />

                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 16,
                                  marginLeft: 15,
                                  marginRight: 5,
                                  fontFamily: 'RobotoSlab-Bold',
                                }}>
                                {roundRating}
                              </Text>
                            </View>
                          )
                        : null}
                    </View>

                    <Text style={styles.Description}>Description</Text>

                    <SafeAreaView style={styles.safe}>
                      <View style={styles.root}>
                        <ReadMore
                          seeMoreStyle={{color: COlORS.blue}}
                          animate={true}
                          seeLessStyle={{color: COlORS.blue}}
                          seeMoreText="Read more"
                          seeLessText="Read less"
                          style={styles.textStyle}
                          numberOfLines={9}>
                          <Text style={{lineHeight: 22}}>{item.summary}</Text>
                        </ReadMore>
                      </View>
                    </SafeAreaView>

                    {/* Release Date & Developer */}

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'RobotoSlab-Regular',
                            marginLeft: 30,
                            marginTop: 20,
                          }}>
                          Release Date
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            marginLeft: 30,
                            fontSize: 13,
                            fontFamily: 'RobotoSlab-Regular',
                            color: COlORS.grey,
                          }}>
                          To be determined...
                        </Text>
                      </View>

                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'RobotoSlab-Regular',
                            marginLeft: 35,
                            marginTop: 20,
                          }}>
                          Developer
                        </Text>

                        <View
                          style={{
                            marginLeft: 35,
                            flexWrap: 'wrap',
                            flexShrink: 1,
                          }}>
                          {involveCompanies.map((item, index) => {
                            if (index === 1) {
                              return (
                                <Text
                                  key={item.id}
                                  style={{
                                    marginTop: 10,
                                    fontSize: 13,
                                    fontFamily: 'RobotoSlab-Regular',
                                    color: COlORS.grey,
                                    width: width / 2,
                                  }}>
                                  {item.company.name}
                                </Text>
                              );
                            }
                          })}
                        </View>
                      </View>
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'RobotoSlab-Regular',
                        fontSize: 16,
                        marginTop: 30,
                        marginLeft: 30,
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
                        marginTop: 45,
                        marginLeft: 30,
                      }}>
                      More Information
                    </Text>

                    <Content
                      involveCompanies={involveCompanies}
                      navigation={navigation}
                    />

                    {/* <AvailablePlatforms gamePlatforms={gamePlatforms}/> */}

                    {/* <GameCapability gameModes= {gameModes} playerPerspectives = {playerPerspectives} ganeEngine = {gameEngine}/> */}

                    <SimilarGames
                      navigation={navigation}
                      similarGames={item.similar_games}
                    />
                  </ScrollView>
                </View>
              );
            } 
            
            else if (item.first_release_date) {
              const involveCompanies = item.involved_companies;

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
                    {/***************Back Button****************/}
                    <View style={styles.projectRow}>
                      <View style={styles.projectText}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                          <Feather
                            name={'chevron-left'}
                            size={35}
                            color={'white'}
                          />
                        </TouchableOpacity>

                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            marginLeft: 95,
                            marginTop: 5,
                          }}>
                          Game Details
                        </Text>
                      </View>

                      {/***************More Button****************/}
                      <View style={styles.moreContainer}>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Feather
                            name="more-horizontal"
                            size={30}
                            style={styles.moreIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>

                    {/***************Game Cover****************/}
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 33,
                        marginTop: 35,
                      }}>
                      <ImageBackground
                        imageStyle={{borderRadius: 20}}
                        style={styles.containerGame}
                        resizeMode="cover"
                        source={{
                          uri: getImage(item.cover.image_id),
                        }}></ImageBackground>
                    </View>

                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: 'white',
                          fontFamily: 'RobotoSlab-Regular',
                          marginTop: 25,
                          textAlign: 'center',
                          width: 300,
                        }}>
                        {item.name}
                      </Text>

                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <FlatList
                          data={item.genres}
                          keyExtractor={item => item.id.toString()}
                          numColumns={2}
                          style={{marginTop: 10}}
                          renderItem={({item, index}) => {
                            if (index === 0 || index === 1) {
                              return (
                                <Text
                                  style={{
                                    marginLeft: 5,
                                    color: COlORS.light,
                                    fontFamily: 'RobotoSlab-Regular',
                                    fontSize: 10,
                                    padding: 10,
                                    borderRadius: 10,
                                    backgroundColor: '#242425',
                                  }}>
                                  {item.name}
                                </Text>
                              );
                            }
                          }}
                        />
                      </ScrollView>

                      {item.total_rating && displayRating
                        ? !isNaN(roundRating) && (
                            <View style={{flexDirection: 'row', marginTop: 11}}>
                              <StarRatingDisplay
                                starSize={20}
                                rating={roundRating}
                                enableHalfStar={true}
                                style={{marginTop: 3}}
                                maxStars={5}
                                starStyle={{width: 10}}
                              />

                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 16,
                                  marginLeft: 15,
                                  marginRight: 5,
                                  fontFamily: 'RobotoSlab-Bold',
                                }}>
                                {roundRating}
                              </Text>
                            </View>
                          )
                        : null}
                    </View>

                    <Text style={styles.Description}>Description</Text>

                    <SafeAreaView style={styles.safe}>
                      <View style={styles.root}>
                        <ReadMore
                          seeMoreStyle={{color: COlORS.blue}}
                          animate={true}
                          seeLessStyle={{color: COlORS.blue}}
                          seeMoreText="Read more"
                          seeLessText="Read less"
                          style={styles.textStyle}
                          numberOfLines={9}>
                          <Text style={{lineHeight: 22}}>{item.summary}</Text>
                        </ReadMore>
                      </View>
                    </SafeAreaView>

                    {/* Release Date & Developer */}

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'RobotoSlab-Regular',
                            marginLeft: 30,
                            marginTop: 20,
                          }}>
                          Release Date
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            marginLeft: 30,
                            fontSize: 13,
                            fontFamily: 'RobotoSlab-Regular',
                            color: COlORS.grey,
                          }}>
                          {date}
                        </Text>
                      </View>

                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'RobotoSlab-Regular',
                            marginLeft: 35,
                            marginTop: 20,
                          }}>
                          Developer
                        </Text>

                        <View
                          style={{
                            marginLeft: 35,
                            flexWrap: 'wrap',
                            flexShrink: 1,
                          }}>
                          {involveCompanies.map((item, index) => {
                            if (index === 1) {
                              return (
                                <Text
                                  key={item.id}
                                  style={{
                                    marginTop: 10,
                                    fontSize: 13,
                                    fontFamily: 'RobotoSlab-Regular',
                                    color: COlORS.grey,
                                    width: width / 2,
                                  }}>
                                  {item.company.name}
                                </Text>
                              );
                            }
                          })}
                        </View>
                      </View>
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'RobotoSlab-Regular',
                        fontSize: 16,
                        marginTop: 30,
                        marginLeft: 30,
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
                        marginTop: 45,
                        marginLeft: 30,
                      }}>
                      More Information
                    </Text>

                    <Content
                      involveCompanies={involveCompanies}
                      navigation={navigation}
                    />

                    {/* <AvailablePlatforms gamePlatforms={gamePlatforms}/> */}

                    {/* <GameCapability gameModes= {gameModes} playerPerspectives = {playerPerspectives} ganeEngine = {gameEngine}/> */}

                    <SimilarGames
                      navigation={navigation}
                      similarGames={item.similar_games}
                    />
                  </ScrollView>
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
  Description: {
    color: 'white',
    marginLeft: 30,
    marginTop: 25,
    fontSize: 16,
    fontFamily: 'EBGaramond-Bold',
  },

  safe: {
    marginLeft: 15,
  },
  root: {
    padding: 10,
    marginLeft: 5,
  },
  textStyle: {
    fontSize: 16,
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
    marginLeft: 55,
    marginTop: 10,
    fontSize: 14,
    color: COlORS.light,
  },

  columnWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },

  moreIcon: {
    color: COlORS.white,
    marginTop: 20,
  },

  containerGame: {
    backgroundColor: COlORS.dark_gray,
    height: 380,
    width: 300,
    borderRadius: 20,
    marginLeft: 25,
    position: 'relative',
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
    alignItems: 'flex-start',
    backgroundColor: '#424FDA',
    width: 170,
    height: 53,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 12,
    borderRadius: 20,
    marginLeft: 35,
    flexDirection: 'row',
  },

  textAdd: {
    color: 'white',
    marginLeft: 25,
    fontSize: 16,
  },

  WishlistButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderWidth: 1.5,
    borderColor: COlORS.light,
    width: 170,
    height: 53,
    paddingTop: 13,
    borderRadius: 20,
    marginLeft: 25,
  },

  textWishlist: {
    color: COlORS.light,
    fontSize: 16,
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

{
  /* <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 30}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: 'white',
                  marginTop: 30,
                  fontSize: 16,
                  fontFamily: 'Domine-Regular',
                }}>
                Release Date:
              </Text>
              <Text
                style={{
                  color: COlORS.light,
                  marginTop: 15,
                  fontSize: 14,
                  fontFamily: 'Domine-Regular',
                }}>
                {date}
              </Text>
            </View>

            <GameRating Rating={total_Rating} />
            
          </View> */
}

{
  /* <View style={{flexDirection: 'column', backgroundColor: 'green'}}>
            <Text style={styles.GameTitle}>{gameName}</Text>

            <ScrollView horizontal={true}>
            
              <FlatList
                data={involveCompanies}
                keyExtractor={(item, index) => {
                  return index.toString();
                }}
                renderItem={({item, index}) => {
                  if (index === 0) {
                    return (
                      <Text style={styles.developerName}>
                        {item.company.name}
                      </Text>
                    );
                  }
                }}
              />
              
            </ScrollView>
       
          </View>
        </View> */
}

{
  /* Game Rating */
}
{
  /* <View style={{position: 'absolute', marginLeft: 0}}>
            <GameRating Rating={total_Rating} />
        </View>  */
}

{
  /* Release Date */
}
{
  /* <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 25}}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'white',
                marginTop: 30,
                fontSize: 16,
                fontFamily: 'Domine-Regular',
              }}>
              Release Date:
            </Text>
            <Text
              style={{
                color: COlORS.light,
                marginTop: 15,
                fontSize: 14,
                fontFamily: 'Domine-Regular',
              }}>
              {date}
            </Text>
          </View> */
}

{
  /***************Game Title****************/
}
{
  /* <View style = {{marginTop: 10}}>
          <Text style = {styles.GameTitle}>{gameName}</Text>
      </View> */
}

{
  /***************Game Released****************/
}
{
  /* <View>
          <Text style = {styles.gameReleased}>{date}</Text>
      </View> */
}
