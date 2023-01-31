import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Animated
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import ItemSeparator from '../constants/ItemSeparator';
import COlORS from '../constants/colors';
import {getImage} from '../services/GameServices';
import {BoxShadow} from 'react-native-shadow';
import MostAntcipatedFlatlist from '../constants/MostAntcipatedFlatlist';
import Carousel from 'react-native-reanimated-carousel';


const {width} = Dimensions.get('window');

const MostAnticipatedGames = props => {

  const listOfGames = props.data;

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const renderItem = ({item, index}) => <MostAntcipatedFlatlist item = {item} index = {index} navigation = {props.navigation}/>;


  return (
    <View>
    <Text style={{color: COlORS.white, fontSize: 20, fontFamily: 'RobotoSlab-Regular', marginLeft: 25, marginTop: 30}}>Most Anticipated Games</Text>
    
      <FlatList
        data={listOfGames}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.Flatlist}
        renderToHardwareTextureAndroid = {false}
        contentContainerStyle={{ alignItems: 'center' }}
        disableVirtualization={true}
        legacyImplementation={true}
        onEndReachedThreshold={50}
        initialNumToRender={10}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={10} />}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: -15,
    width: 230,
  },
  root: {
    flex: 1,
    padding: 12,
  },
  textStyle: {
    fontSize: 14,
    color: COlORS.grey,
    lineHeight: 22,
  },

  titleMostAnticipated: {
    fontSize: 18,
    marginLeft: 50,
    marginBottom: 10,
    color: COlORS.white,
  },

  containerGames: {
    backgroundColor: COlORS.light_gray,
    height: 310,
    width: 220,
    marginBottom: 5,
    borderRadius: 12,
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },

  Flatlist: {
    marginTop: 25,
    paddingLeft: 5,
    paddingBottom: 300
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 10,
  },

  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },

  titleText: {
    color: COlORS.white,
    fontSize: 16,
  },

  gameTitle: {
    color: COlORS.white,
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },

  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#002fC2',
    justifyContent: 'center',
    position: 'relative', //Here is the trick
    bottom: 0,
    paddingLeft: 10,
    borderBottomLeftRadius: 11.5,
    borderBottomRightRadius: 11.5, //Here is the trick
  },

  textStyle: {
    color: '#fff',
    fontSize: 18,
  },

  genre: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },

  genres: {
    flexDirection: 'row',
    marginTop: 10,
  },

  genreText: {
    fontSize: 12,
    opacity: 0.7,
    color: 'white',
    fontFamily: 'RobotoSlab-Regular',
  },
});

export default MostAnticipatedGames;
