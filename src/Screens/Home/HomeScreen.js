import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  BackHandler
} from 'react-native';
import styles from '../../components/constants/HomeStyles';
import React, {useState, useEffect} from 'react';
import { useFocusEffect} from '@react-navigation/native';
import MostAnticipatedGames from '../../components/home-screen/MostAnticipatedGames';
import ForYouGames from '../../components/home-screen/For_you';
import ForYouGamesNoAlgorithm from '../../components/home-screen/For_you_no_algorithm';
import NewReleases from '../../components/home-screen/NewReleases';
import PopularNow from '../../components/home-screen/PopularNow';
import UserCollections from '../../components/home-screen/UserCollections';
import COlORS from '../../components/constants/colors';
import {IGDB_HTTP_REQUEST_POPULAR} from '../../components/services/GameServices';
import {IGDB_HTTP_REQUEST_MOST_ANTICIPATED} from '../../components/services/GameServices';
import {IGDB_HTTP_REQUEST_GENRES} from '../../components/services/GameServices';
import {getBestRatedGamesRequest} from '../../components/services/GameServices';
import ListOfPlayers from '../../components/home-screen/Players';
import ListOfGenres from '../../components/home-screen/Genres';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {YOUTUBE_CHANNEL_API, RAWG_API_COLLECTIONS} from '@env';
import SearchGames from '../../components/home-screen/SearchGames';
import LoadingDots from 'react-native-loading-dots';


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export default function HomeScreen({navigation}) {
  const [mostAnticipated, setMostAnticipated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [Popular, setPopularNow] = useState({});
  const [collections, setCollections] = useState();
  const [Genres, setGenres] = useState();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      IGDB_HTTP_REQUEST_MOST_ANTICIPATED()
        .then(response => {
          setMostAnticipated(response.data);
        })
        .catch(err => {
          console.error(err);
        }),

      fetch(
        'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJx5KP-pCUmL9eZUv-mIcNw&filter=videos_latest',
        options,
      )
        .then(response => response.json())
        .then(responseJson => {
          setNewReleases(responseJson.contents);
        })
        .catch(err => {
          console.log(err);
        }),

      IGDB_HTTP_REQUEST_POPULAR()
        .then(response => {
          setPopularNow(response.data);
        })
        .catch(err => {
          console.log(err);
        }),

      fetch(
        `https://api.rawg.io/api/collections?key=${RAWG_API_COLLECTIONS}&page_size=10`,
      )
        .then(response => response.json())
        .then(responseJson => {
          setCollections(responseJson.results);
        })
        .catch(err => {
          console.log(err);
        }),

      IGDB_HTTP_REQUEST_GENRES()
        .then(response => {
          setGenres(response.data);
        })
        .catch(err => {
          console.log(err);
        }),
    ])
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': YOUTUBE_CHANNEL_API,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };

  const getContent = () => {
    if (isLoading) {
      return (
        <View style = {{alignItems: 'center', position: 'relative', marginTop: 360 }}>
            <ActivityIndicator color={COlORS.blue} style ={styles.loadingColor} size={'large'} />
        </View>
        
      );
    }

    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          scrollsToTop={true}>
          {/* <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 25, fontFamily: 'RobotoSlab-Bold', marginTop: 25, paddingBottom: 5}}>Discover</Text>
          <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('Profile')}
          style={{marginTop: 45, }}>
          <Image
            source={require('../../components/Images/profile.png')}
            style={{width: 45, height: 45, position: 'absolute', marginLeft: 65, marginTop: -25}}
          />
        </TouchableOpacity>
        </View> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontFamily: 'RobotoSlab-Bold',
                marginTop: 25,
                paddingBottom: 5,
              }}>
              Discover
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Profile')}
              style={{marginTop: 25, position: 'absolute'}}>
              <MaterialCommunityIcon
                name="account-circle"
                size={50}
                color={COlORS.light}
                style={{
                  backgroundColor: COlORS.dark_gray,
                  borderRadius: 50,
                  marginLeft: 310,
                  marginTop: -5,
                }}
              />
            </TouchableOpacity>
          </View>

          <SearchGames />

          <ListOfGenres data={Genres} />

          {/* <ForYouGamesNoAlgorithm/> */}

          <PopularNow data={Popular} navigation={navigation} />

          <MostAnticipatedGames
            data={mostAnticipated}
            navigation={navigation}
          />
          {/* 
        <NewReleases data = {newReleases} navigation = {navigation}/>

        <UserCollections data = {collections} />

        <ListOfGenres data = {Genres}/> */}
        </ScrollView>
      </View>
    );

    {
      /*For you games with algorithm
        <ForYouGamesNoAlgorithm/>*/
    }

    {
      /*For you games with algorithm 
        <ForYouGames/>*/
    }
  };

  return (
      <SafeAreaView
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          backgroundColor: '#0D0D0E', 
          flex: 1,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{width: '100%'}}>
          {getContent()}
        </ScrollView>
      </SafeAreaView>
  );
}

const style = StyleSheet.create({
  loadingColor: {
    color: COlORS.blue,
    marginTop: 100,
    position: 'absolute',
  },

  errorText: {
    color: 'white',
    alignSelf: 'center',
  },



});
