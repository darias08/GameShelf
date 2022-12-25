import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import AgeRated from './AgeRated';
import {ScrollView} from 'react-native-gesture-handler';
import Media from './Media'
import LinearGradient from 'react-native-linear-gradient';
import Platforms_Genre from './Platforms&Genre';
import COlORS from '../../../constants/colors';
import ReadMore from '@fawazahmed/react-native-read-more';
import Content from './Content';
import SimilarGames from './SimilarGames';
import ReleaseDate_Rating from './ReleaseDate_Rating';

const Details = (props) => {
  const ageRated = props.ageRating;
  const videoCover = props.videoCover;
  const screenshots = props.screenshots
  const involveCompanies = props.involveCompanies;
  const gameSummary = props.gameSummary;
  const similarGames = props.similarGames;
  const navigation = props.navigation;
  const similarGames2 = props.similarGames2;
  const gameReleased = props.gameReleased;
  const total_Rating = props.total_Rating;

  
  return (

    
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'black'}} >
    <LinearGradient colors={['rgba(60, 60, 60, 0.4)', 'rgba(0, 0, 0, 0.7)']}>

      <AgeRated ageRated={ageRated} />

      <ReleaseDate_Rating gameReleased = {gameReleased} total_Rating = {total_Rating}/>

      <Media videoCover={videoCover} screenshots = {screenshots} navigation = {navigation}/> 

      <Text style= {styles.Description}>Description:</Text> 

      <SafeAreaView style={styles.safe}>
        <View style={styles.root}>
          <ReadMore
            seeMoreStyle={{color: COlORS.blue}}
            animate={true}
            seeLessStyle={{color: COlORS.blue}}
            seeMoreText="Read more"
            seeLessText="Read less"
            style={styles.textStyle}
            numberOfLines={8}>
            <Text style={{lineHeight: 22}}>{gameSummary}</Text>
          </ReadMore>
        </View>
      </SafeAreaView>



      <SimilarGames similarGames = {similarGames} navigation = {navigation}  />

      {/* <Content/> */}

      {/* <Genres /> */}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  Description: {
    color: 'white',
    marginLeft:25,
    marginTop: 30,
    fontSize: 20,
    fontFamily: 'EBGaramond-Bold'
  },

  safe: {
    flex: 1,
    marginLeft: 10,
    marginTop: -10,
    width: 370,
  },
  root: {
    flex: 1,
    padding: 16,
  },
  textStyle: {
    fontSize: 16,
    color: COlORS.grey,
  },

});

export default Details;
