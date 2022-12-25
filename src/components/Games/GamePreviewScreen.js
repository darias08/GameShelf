import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import COlORS from '../../components/constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import {getImage} from '../../components/services/GameServices';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import TopTabNav from './components/TopTabNav';
import TopTabNavigator from './components/TopTabNav';
import GameRating from './components/Details/GameRating';
import AgeRated from './components/Details/AgeRated';
import Modal from './components/Details/components/Modal';

const windowWidth = Dimensions.get('window').width;

const GamePreviewScreen = ({route, navigation}) => {
  const {
    gameId,
    gameName,
    gameCover,
    gameGenre,
    age_Rating,
    gameReleased,
    gamePlatforms,
    gameSummary,
    Screenshot,
    Videos,
    involveCompanies,
    similarGames,
    gameModes,
    multiplayerModes,
    playerPerspectives,
    gameEngine,
    artworks,
    total_Rating,
    item,
  } = route.params;

  const shadowOpt = {
    width: 130,
    height: 145,
    color: '#000',
    border: 4,
    radius: 5,
    blur: 10,
    opacity: 0.7,
    x: 0,
    y: 0,
  };


  return (
    <View style={{flex: 1}}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          blurRadius={60}
          resizeMode="stretch"
          source={{uri: getImage(gameCover)}}
          style={{width: '100%', height: '100%', position: 'absolute'}}>
          <View
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          />
        </ImageBackground>

        {/***************Back Button****************/}
        <View style={styles.projectRow}>
          <View style={styles.projectText}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: 45,
                  height: 45,
                  marginLeft: 30,
                  marginTop: 20,
                  position: 'relative',
                }}
                source={require('../Images/Icons/chevron_left_circle.png')}
              />
            </TouchableOpacity>
          </View>

          {/***************More Button****************/}
          <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="more-horizontal" size={30} style={styles.moreIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/***************Game Cover****************/}
        <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 25}}>
          <BoxShadow setting={shadowOpt}>
            <ImageBackground
              imageStyle={{borderRadius: 5}}
              style={styles.containerGame}
              resizeMode="stretch"
              source={{uri: getImage(gameCover)}}>
              <LinearGradient
                colors={['transparent', 'rgba(10,10,10,0.4)']}
                locations={[0.4, 1.2]}
                style={styles.linearGradient}
              />
            </ImageBackground>
          </BoxShadow>

          <View style={{flexDirection: 'column'}}>
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
        </View>

        {/***************Add Button****************/}
        <View style={{flexDirection: 'row', marginTop: 40, marginBottom: 25}}>
          <TouchableOpacity style={styles.AddButton} activeOpacity={0.8}>
            <Text style={styles.textAdd}>Add</Text>
            <Icon
              name="more-horizontal"
              size={25}
              style={{color: 'white', marginLeft: 40}}
            />
          </TouchableOpacity>

          {/***************Wishlist Button****************/}
          <TouchableOpacity style={styles.WishlistButton} activeOpacity={0.8}>
            <Text style={styles.textWishlist}>Wishlist</Text>
          </TouchableOpacity>
        </View>
        
        <TopTabNavigator
          ageRating={age_Rating}
          gameDesc={gameSummary}
          videoCover={Videos}
          Screenshot={Screenshot}
          involveCompanies={involveCompanies}
          gameGenre={gameGenre}
          gamePlatforms={gamePlatforms}
          gameSummary={gameSummary}
          similarGames={similarGames}
          navigation={navigation}
          gameModes={gameModes}
          playerPerspectives={playerPerspectives}
          gameEngine={gameEngine}
          gameReleased={gameReleased}
          total_Rating = {total_Rating}
        />

      
        {/* /</View>  */}
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    borderRadius: 12,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
    marginRight: 10,
  },

  containerGame: {
    backgroundColor: COlORS.light,
    opacity: 0.9,
    height: 145,
    width: 130,
    borderRadius: 5,
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

  developerName: {
    color: COlORS.new_light_color,
    fontSize: 16,
    fontFamily: 'EBGaramond-SemiBold',
    width: 225,
    textAlignVertical: 'center',
    marginLeft: 20,
    marginTop: 10,
  },

  gameReleased: {
    color: COlORS.light,
    marginLeft: 50,
    fontFamily: 'Fontspring-DEMO-audela-bolditalic',
    marginTop: 10,
    fontSize: 16,
  },

  AddButton: {
    alignItems: 'flex-start',
    backgroundColor: '#424FDA',
    width: 150,
    height: 45,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 12,
    borderRadius: 25,
    marginLeft: 25,
    flexDirection: 'row',
  },

  textAdd: {
    color: 'white',
    marginLeft: 15,
    fontSize: 16,
  },

  WishlistButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 150,
    height: 45,
    paddingTop: 10,
    paddingBottom: 12,
    borderRadius: 25,
    marginLeft: 45,
  },

  textWishlist: {
    color: 'white',
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
