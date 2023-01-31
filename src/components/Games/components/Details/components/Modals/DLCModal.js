import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import React from 'react';
import COlORS from '../../../../../constants/colors';
import {FlatList} from 'react-native-gesture-handler';
import {getImage} from '../../../../../services/GameServices';
import FastImage from 'react-native-fast-image';

const getWidth = Dimensions.get('window').width

const DLCModal = ({showModal, closeModal, gameName, gameDLC, navigation}) => {
  const toggleModal = () => {
    closeModal(false);
  };

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
          <View style={{flexDirection: 'row', paddingRight: 80}}>
            <TouchableOpacity activeOpacity={0.8} onPress={toggleModal}>
              <Image
                style={{width: 45, height: 45, marginLeft: 30, marginTop: 30}}
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
                    color: COlORS.grey,
                    textAlignVertical: 'center',
                    flexDirection: 'row'
                  }}>
                  {gameName}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 20,
                    color: COlORS.white,
                    fontWeight: 'bold',
                    paddingBottom: 20,
                  }}>
                  DLC
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            data={gameDLC}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              if (!item.cover) {
                return (
                  <TouchableOpacity activeOpacity={0.7}>
                    <FastImage
                      style={styles.containerGames}
                      imageStyle={{borderRadius: 5}}>
                        <Text>Game name</Text>
                      </FastImage>
                  </TouchableOpacity>
                );
              } else if (item.cover.image_id) {
                return (
                  <View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.push('GamePreview', {gameId: item.id})}>
                      <FastImage
                        style={styles.containerGames}
                        imageStyle={{borderRadius: 5}}
                        source={{uri: getImage(item.cover.image_id)}}
                        
                        />
                    </TouchableOpacity>
                  </View>
                );
              }
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

export default DLCModal;
