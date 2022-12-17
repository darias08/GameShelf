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
} from 'react-native';
import React from 'react';
import COlORS from '../../components/constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getImage} from '../../components/services/GameServices';
import {ScrollView} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import ItemSeparator from '../../components/constants/ItemSeparator';
import Artwork_Cover from './components/Artwork_Cover';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import TopTabNav from './components/TopTabNav';
import GameRating from './components/GameRating';

const windowWidth = Dimensions.get('window').width;

const GamePreviewScreen = ({route, navigation}) => {
  const {
    gameName,
    gameCover,
    gameGenres,
    age_Rating,
    gameReleased,
    gamePlatforms,
    gameSummary,
    SG,
    Screenshot,
    Videos,
    involveCompanies,
    artworks,
    total_Rating,
    item,
  } = route.params;

  
  const shadowOpt = {
    width: 125,
    height: 145,
    color: '#000',
    border: 2,
    radius: 10,
    blur: 10,
    opacity: 0.7,
    x: 25,
    y: 30,
    style: {marginVertical: 5},
  };

  let currentTimestamp = new Date(gameReleased * 1000);
  let date = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(currentTimestamp);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{width: '100%'}}
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
        <View style={{flexDirection: 'row'}}>
          <BoxShadow setting={shadowOpt}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
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

            <ScrollView horizontal={true} style={{width: '100%'}}>
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

        {/* Release Date */}
        <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 25}}>
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

          <View style={{position: 'absolute', marginLeft: 130}}>
            {/* Game Rating */}
            <GameRating Rating={total_Rating} />
          </View>
        </View>

        {/***************Add Button****************/}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 45,
            marginBottom: 20,
          }}>
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
        
        
        <TopTabNav ageRating = {age_Rating} gameDesc = {gameSummary} videoCover = {Videos}/>

        
        {/***************Game Title****************/}
        {/* <View style = {{marginTop: 10}}>
          <Text style = {styles.GameTitle}>{gameName}</Text>
      </View> */}

        {/***************Game Released****************/}
        {/* <View>
          <Text style = {styles.gameReleased}>{date}</Text>
      </View> */}

        {/***************Add Button****************/}
        {/* <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30}}>
          <TouchableOpacity style= {styles.AddButton}  activeOpacity={0.8} > 
              <Text style={styles.textAdd}>Add</Text>
              <Icon name ="more-horizontal" size={25} style={{color: 'white', marginLeft: 40}}/>
          </TouchableOpacity> */}

        {/***************Wishlist Button****************/}
        {/* <TouchableOpacity style= {styles.WishlistButton}  activeOpacity={0.8} > 
              <Text style={styles.textWishlist}>Wishlist</Text>
          </TouchableOpacity>
      </View> */}
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
    marginRight: 10
  },

  containerGame: {
    backgroundColor: COlORS.light,
    paddingLeft: 103,
    opacity: 0.9,
    height: 145,
    width: 125,
    marginBottom: 5,
    borderRadius: 12,
    position: 'relative',
    marginTop: 30,
    marginLeft: 25,
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
    marginLeft: 50,
    marginTop: 70,
  },

  developerName: {
    color: COlORS.light,
    fontSize: 16,
    fontFamily: 'EBGaramond-SemiBold',
    width: 230,
    textAlignVertical: 'center',
    marginLeft: 50,
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
    marginLeft: 20,
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
