import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, { useCallback } from 'react';
import COlORS from '../../../../../constants/colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {getImage} from '../../../../../services/GameServices';
import FastImage from 'react-native-fast-image';

const GameSeriesModal = ({navigation, showModal, closeModal, gameSeries}) => {
  const toggleModal = () => {
    closeModal(false);
  };

  const gameSeriesData = [gameSeries];

  const ITEM_HEIGHT = 230;

  const seriesTextTitle = () => {
    return gameSeriesData.map(item => {
      return <Text key={item.id}>{item.name}</Text>;
    });
  };

  const getItemLayout = useCallback((item, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index, 
  }), []);

  return (
    <View>
      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={toggleModal}>
        <View
          style={{
            backgroundColor: COlORS.dark_gray,
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', paddingRight: 60}}>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
              <Image
                style={{width: 45, height: 45, marginLeft: 20, marginTop: 30}}
                source={require('../../../../../Images/Icons/chevron_left_circle.png')}
              />
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'column',
                  flexShrink: 1,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  
                  style={{
                    fontSize: 18,
                    color: COlORS.light,
                    marginTop: 10,
                  }}>
                  {seriesTextTitle()}
                </Text>

                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 18,
                    color: COlORS.white,
                    fontWeight: 'bold',
                    paddingBottom: 20,
                  }}>
                  Games
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            data={gameSeriesData}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            showsVerticalScrollIndicator={false}
            disableVirtualization={true}
            getItemLayout={getItemLayout}
            windowSize={5}            
            renderItem={({item, index}) => {
              return (
                <FlatList
                  data={item.games}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                  disableVirtualization={true}
                  getItemLayout={getItemLayout}
                  windowSize={5}
                  showsVerticalScrollIndicator={false}
                  columnWrapperStyle={styles.columnWrapper}
                  numColumns={2}
                  renderItem={({item, index}) => {
                    if (item.cover) {
                      return (
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() =>
                              navigation.push('GamePreview', {gameId: item.id})
                            }>
                            <FastImage
                              style={styles.containerGames}
                              imageStyle={{borderRadius: 5}}
                              source={{uri: getImage(item.cover.image_id)}}
                            />
                          </TouchableOpacity>
                      );
                    } else if (!item.cover) {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => navigation.navigate('GamePreview')}>
                          <Text
                            style={{
                              color: 'white',
                              textAlign: 'center',
                              textAlignVertical: 'center',
                              paddingRight: 15,
                              paddingLeft: 15,
                            }}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }
                  }}
                />
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingEnd: 20,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },

  containerGames: {
    backgroundColor: COlORS.light_gray,
    height: 230,
    width: 170,
    borderRadius: 5,
    elevation: 12,
  },
});

export default GameSeriesModal;
