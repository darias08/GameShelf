import { View, ScrollView, Text, TouchableOpacity, Image, ActivityIndicator, StyleSheet, Dimensions} from "react-native";
import styles from '../../components/constants/HomeStyles'
import React, {useState, useEffect} from 'react'
import MostAnticipatedGames from "../../components/home-screen/MostAnticipatedGames";
import ForYouGames from "../../components/home-screen/For_you";
import ForYouGamesNoAlgorithm from '../../components/home-screen/For_you_no_algorithm'
import NewReleases from "../../components/home-screen/NewReleases";
import PopularNow from "../../components/home-screen/PopularNow";
import UserCollections from "../../components/home-screen/UserCollections";
import COlORS from "../../components/constants/colors";
import { IGDB_HTTP_REQUEST_POPULAR } from "../../components/services/GameServices";
import { IGDB_HTTP_REQUEST_MOST_ANTICIPATED } from "../../components/services/GameServices";
import { IGDB_HTTP_REQUEST_GENRES } from "../../components/services/GameServices";
import { getBestRatedGamesRequest } from "../../components/services/GameServices";
import ListOfPlayers from "../../components/home-screen/Players";
import ListOfGenres from "../../components/home-screen/Genres";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {YOUTUBE_CHANNEL_API, RAWG_API_COLLECTIONS} from '@env'


const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function HomeScreen ({navigation}) {

  const [topRatedGames, setTopRatedGames] = useState([]);
  const [mostAnticipated, setMostAnticipated] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [Popular, setPopularNow] = useState([]);
  const [collections, setCollections] = useState();
  const [Genres, setGenres] = useState();

  let [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    Promise.all([
      
      IGDB_HTTP_REQUEST_MOST_ANTICIPATED().then(response => {
        setMostAnticipated(response.data);
        
        })
        .catch(err => {
            console.error(err);
        }),
    
      fetch('https://youtube138.p.rapidapi.com/channel/videos/?id=UCJx5KP-pCUmL9eZUv-mIcNw&filter=videos_latest', options)
        .then(response => response.json())
        .then((responseJson) => {
          setNewReleases(responseJson.contents);
        })
        .catch((err) => {
              console.log(err)
            }),
    
      IGDB_HTTP_REQUEST_POPULAR().then(response => {
        setPopularNow(response.data);
        })
        .catch(err => {
        console.log(err)
        }),
    
      fetch(`https://api.rawg.io/api/collections?key=${RAWG_API_COLLECTIONS}&page_size=10`)
        .then(response => response.json())
        .then((responseJson) => {
          setCollections(responseJson.results);
        })
        .catch((err) => {
        console.log(err)
        }),
    
      IGDB_HTTP_REQUEST_GENRES().then(response => {
        setGenres(response.data);
        })
        .catch(err => {
        console.log(err)
        }),
        
    ]).then(() => {
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
    });
    
     
  }, [])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': YOUTUBE_CHANNEL_API,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
 

  const getContent = () => {

    if (isLoading) {
      return (
      <View style = {{alignItems: 'center', position: 'relative', marginTop: 360}}>
          <ActivityIndicator color={COlORS.blue} style ={styles.loadingColor} size={'large'} />
      </View>
      )
    }
    
    return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} scrollsToTop={true}>
          
        {/* <View style={styles.topHeader}>
        <View style= {{flexDirection: 'column'}}>
          <Text style = {styles.textWelcome}>welcome back, </Text>
          <Text style = {{color: 'white', marginLeft: 30, marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>Username</Text>
        </View>
        
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Profile')}>
            <MaterialCommunityIcon name = {'account-circle'} size={50} color={'white'} style = {{marginTop: 30, marginLeft: 150, position: 'relative'}} />
          </TouchableOpacity>
        </View> */}

        <MostAnticipatedGames  data = {mostAnticipated} navigation = {navigation}  />

        <PopularNow data = {Popular} navigation = {navigation} />
{/* 
        <MostAnticipatedGames  data = {mostAnticipated} navigation = {navigation}  />

        <NewReleases data = {newReleases} navigation = {navigation}/>

        <PopularNow data = {Popular} navigation = {navigation} />

        <UserCollections data = {collections} />

        <ListOfGenres data = {Genres}/> */}

        </ScrollView>
      
    </View>
    )
    
    {/*For you games with algorithm
        <ForYouGamesNoAlgorithm/>*/}

        {/*For you games with algorithm 
        <ForYouGames/>*/}
    
  }

  return (

    <LinearGradient colors={[ '#000', '#000',  ]}>
      <SafeAreaView style = {{height: Dimensions.get('screen').height, width: Dimensions.get('screen').width}}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{ width: "100%" }} >
          {getContent()}

          </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({

  loadingColor: {
    color: COlORS.blue,
    marginTop: 100, 
    position: 'absolute'
  },

  errorText: {
    color: 'white',
    alignSelf: 'center',
  },


})




/*

 {isLoading ? (
            <ActivityIndicator color={COlORS.blue} style ={styles.loadingColor} size={'large'} />
          ) : (
            <Text style ={style.errorText}>There is no data available.</Text>
          )}

  <View id="parentView" style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{flex: 1, backgroundColor: '#131114', justifyContent: 'center', alignItems: 'center', }}>
            
          <View style={styles.topHeader}>
          <Text style = {styles.textDiscover}>Discover</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Profile')}>
              <Image style = {styles.userProfileIcon} source={require('../../components/Images/default_profile.png')} />
            </TouchableOpacity>
        </View>


          {For you games with algorithm }
          <ForYouGamesNoAlgorithm/>

          {/*For you games with algorithm }
          <ForYouGames/>
    
          <NewReleases/>

          <PopularNow/>

          <UserCollections/>


          </ScrollView>
          
      </View>

       <View style = {{flex: 1, alignItems: 'center', position: 'relative', marginTop: 360}}>
              <ActivityIndicator color={COlORS.blue} style ={styles.loadingColor} size={'large'} />
        </View> 

    */
