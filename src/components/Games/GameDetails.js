import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import COlORS from '../constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReadMore from '@fawazahmed/react-native-read-more';
import {getYoutubePoster} from '../services/GameServices';
import {getImage} from '../services/GameServices';
import GameRating from './components/Details/GameRating';
import GameTabs from './components/GameTabs';
import Artwork_Cover from './components/Artwork_Cover';

const GameDetails = ({route, navigation}) => {
  const {
    gameName,
    gameSummary,
    gameGenres,
    involveCompanies,
    SG,
    aggregated_Ratings,
    Screenshot,
    Videos,
    Artwork,
  } = route.params;

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      {/* Artwork cover */}
      <Artwork_Cover
        artwork={Artwork}
        navigation={navigation}
        video_cover={Videos}
      />
      {/* Video Cover */}

      {/* Header: Title, Developer, Genre */}
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column', marginLeft: 30, width: 250}}>
          <Text style={styles.gameTitle}>{gameName}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.developer}>Developer: </Text>

            <ScrollView horizontal={true} style={{width: '100%'}}>
              <FlatList
                data={involveCompanies}
                renderItem={({item, index}) => {
                  if (index === 0) {
                    return (
                      <Text style={styles.developerTitle}>
                        {item.company.name}
                      </Text>
                    );
                  }
                }}
              />
            </ScrollView>
          </View>
          <View>
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <FlatList
                data={gameGenres}
                keyExtractor={(item, index) => {
                  return index.toString();
                }}
                columnWrapperStyle={{flexWrap: 'wrap'}}
                numColumns={4}
                ItemSeparatorComponent={() => <ItemSeparator width={10} />}
                renderItem={({item, index}) => {
                  if (index === 0 || index === 1) {
                    return (
                      <View>
                        <Text style={styles.Genres}>{item.name}</Text>
                      </View>
                    );
                  }
                }}
              />
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Links or tabs for a game */}
      <View>
        <GameTabs developerName={involveCompanies} />
      </View>

      {/* Description */}
      <View style={{marginTop: 20}}>
        <Text style={styles.subTitles}>Description</Text>
      </View>

      {/* Summary */}
      <SafeAreaView style={styles.safe}>
        <View style={styles.root}>
          <ReadMore
            seeMoreStyle={{color: COlORS.blue}}
            animate={true}
            seeLessStyle={{color: COlORS.blue}}
            seeMoreText="Read more"
            seeLessText="Read less"
            style={styles.textStyle}
            numberOfLines={5}>
            <Text style={{lineHeight: 22}}>{gameSummary}</Text>
          </ReadMore>
        </View>
      </SafeAreaView>

      {/* Screenshots */}
      <View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.subTitles}>Screenshots</Text>
        </View>
        <Screenshots dataScreenshot={Screenshot} />
      </View>

      {/* Videos */}
      <View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text style={styles.subTitles}>Videos</Text>
        </View>
        <ListOfVideos dataVideos={Videos} />
      </View>

      {/* Similar Games */}
      <View style={{marginTop: 30}}>
        <Text style={styles.subTitles}>Similar Games</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0E26',
    width: '100%',
  },

  iconGame: {
    width: 70,
    height: 75,
    borderRadius: 15,
    marginLeft: 30,
    marginTop: 20,
  },

  gameTitle: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 20,
    width: 250,
    fontWeight: 'bold',
  },

  subTitles: {
    color: 'white',
    fontSize: 18,
    marginLeft: 40,
    fontWeight: 'bold',
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  safe: {
    flex: 1,
    marginLeft: 25,
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

  Genres: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
    backgroundColor: COlORS.light_gray,
    padding: 6,
    borderRadius: 5,
    color: COlORS.white,
  },

  developer: {
    color: COlORS.white,
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
  },

  developerTitle: {
    color: COlORS.light_green,
    fontSize: 13,
    marginTop: 7,
    marginLeft: 5,
  },
});

export default GameDetails;
