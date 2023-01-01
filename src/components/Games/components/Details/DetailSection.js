import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Media from './components/Media';
import LinearGradient from 'react-native-linear-gradient';
import Platforms_Genre from './components/Platforms&Genre';
import COlORS from '../../../../components/constants/colors';
import ReadMore from '@fawazahmed/react-native-read-more';
import Content from './components/Content';
import SimilarGames from './components/SimilarGames';
import ReleaseDate_Rating from './components/ReleaseDate_Rating';
import Genres from './components/Genres';
import AgeRated from './components/AgeRated';

const Details = props => {
  const ageRated = props.ageRating;
  const videoCover = props.videoCover;
  const screenshots = props.screenshots;
  const involveCompanies = props.involveCompanies;
  const gameSummary = props.gameSummary;
  const similarGames = props.similarGames;
  const navigation = props.navigation;
  const gameReleased = props.gameReleased;
  const total_Rating = props.total_Rating;
  const gameSeries = props.gameSeries;
  const gameGenres= props.gameGenre;
  const gameName = props.gameName;
  const gameDLC = props.gameDLC;


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'black'}}>
      <LinearGradient colors={['rgba(60, 60, 60, 0.4)', 'rgba(0, 0, 0, 0.7)']}>

      <AgeRated ageRated={ageRated} />

      <ReleaseDate_Rating
          gameReleased={gameReleased}
          total_Rating={total_Rating}
        />

        <Media
          videoCover={videoCover}
          screenshots={screenshots}
          navigation={navigation}
        />

        <Text style={styles.Description}>Description:</Text>

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

        <Genres gameGenres= {gameGenres}/>


        <Content gameSeries = {gameSeries} involveCompanies= {involveCompanies} gameName={gameName} gameDLC = {gameDLC} navigation={navigation}/>

        <SimilarGames similarGames={similarGames} navigation={navigation} />


        
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Description: {
    color: 'white',
    marginLeft: 25,
    marginTop: 45,
    fontSize: 20,
    fontFamily: 'EBGaramond-Bold',
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
