import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ItemSeparator from '../constants/ItemSeparator';
import COlORS from '../constants/colors';
import {getImage} from '../services/GameServices';
import {SharedElement} from 'react-navigation-shared-element';

const PopularNow = props => {


  return (
    <ScrollView style={{width: '100%', paddingBottom: 150}}>
      <View style={styles.projectRow}>
        <View style={styles.projectText}>
          <Text style={styles.titlePopularNow}>Popular now</Text>
        </View>
        <View style={styles.moreContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={{marginRight: 10, color: COlORS.light}}>Show All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={props.data}
        keyExtractor={item => item.id.toString()} //id.toString()
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft: 10}}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={50} />}
        renderItem={({item}) => {
          if (!item.cover) {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  props.navigation.navigate('GamePreview', {
                    gameName: item.name,
                    gameCover: item.cover.image_id,
                    gameReleased: item.first_release_date,
                    gamePlatforms: item.platforms,
                    gameSummary: item.summary,
                    similarGames: item.similar_games,
                    Screenshot: item.screenshots,
                    Videos: item.videos,
                    involveCompanies: item.involved_companies,
                    gameGenres: item.genres,
                    artworks: item.artworks,
                    age_Rating: item.age_ratings,
                    gameModes: item.game_modes,
                    multiplayerModes: item.multiplayer_modes,
                    playerPerspectives: item.player_perspectives,
                    gameEngine: item.game_engines,
                    item,
                  })
                }>
                <Image
                  resizeMode="cover"
                  style={styles.containerGames}
                  source={require('../Images/no_image.png')}
                />
              </TouchableOpacity>
            );
          } else if (item.cover.image_id) {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  props.navigation.navigate('GamePreview', {
                    gameId: item.id,
                    gameName: item.name,
                    gameCover: item.cover.image_id,
                    gameReleased: item.first_release_date,
                    gamePlatforms: item.platforms,
                    gameSummary: item.summary,
                    similarGames: item.similar_games,
                    Screenshot: item.screenshots,
                    Videos: item.videos,
                    involveCompanies: item.involved_companies,
                    gameGenre: item.genres,
                    artworks: item.artworks,
                    total_Rating: item.total_rating,
                    age_Rating: item.age_ratings,
                    age_Rating_Description: item.age_ratings,
                    gameModes: item.game_modes,
                    multiplayerModes: item.multiplayer_modes,
                    playerPerspectives: item.player_perspectives,
                    gameEngine: item.game_engines,
                    item,
                  })
                }>
                <Image
                  resizeMode="cover"
                  style={styles.containerGames}
                  source={{uri: getImage(item.cover.image_id)}}
                />
              </TouchableOpacity>
            );
          }
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titlePopularNow: {
    fontSize: 16,
    color: COlORS.white,
  },

  containerGames: {
    backgroundColor: COlORS.light_gray,
    height: 200,
    width: 140,
    borderRadius: 5,
    elevation: 12,
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
    marginLeft: 30,
    marginTop: 35,
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

/*

fields game.cover.height, game.cover.width, game.cover.url, game.cover.image_id, game.name, category,checksum,created_at,date,game,human,m,platform,region,updated_at,y;

where game.platforms = 130 & date < 1669129354; sort date desc; limit 10;



fields game.name, game.first_release_date, game.cover.game, category,checksum,created_at,date,game,human,m,platform,region,updated_at,y; 
where game.themes != (42) & game.status = n & game.category != (1,2,5,6,7) & game.platforms = (130, 167) & game.first_release_date > 1669000400 & game.first_release_date < 1669111400;
limit 10;
sort game.first_release_date desc;

*/
