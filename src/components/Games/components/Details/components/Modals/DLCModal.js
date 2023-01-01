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
import React from 'react';
import COlORS from '../../../../../constants/colors';
import {FlatList} from 'react-native-gesture-handler';
import {getImage} from '../../../../../services/GameServices';

const DLCModal = ({showModal, closeModal, gameName, gameDLC}) => {
  const toggleModal = () => {
    closeModal(false);
  };

  const dlcs = gameDLC;

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
                style={{width: 45, height: 45, marginLeft: 30, marginTop: 20}}
                source={require('../../../../../Images/Icons/chevron_left_circle.png')}
              />
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'column',
                  flexShrink: 1,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: COlORS.grey,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    marginLeft: 3,
                  }}>
                  {gameName}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 20,
                    color: COlORS.white,
                    fontWeight: 'bold',
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    paddingBottom: 20,
                  }}>
                  DLC
                </Text>
              </View>
            </View>
          </View>

          <FlatList
            data={dlcs}
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
                    <ImageBackground
                      style={styles.containerGames}
                      imageStyle={{borderRadius: 5}}>
                        <Text>Game name</Text>
                      </ImageBackground>
                  </TouchableOpacity>
                );
              } else if (item.cover.image_id) {
                return (
                  <View>
                    <TouchableOpacity activeOpacity={0.7}>
                      <ImageBackground
                        style={styles.containerGames}
                        imageStyle={{borderRadius: 5}}
                        source={{uri: getImage(item.cover.image_id)}}>
                    
                      </ImageBackground>
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
    paddingLeft: 35,
    paddingTop: 20,
    paddingEnd: 40,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },

  containerGames: {
    backgroundColor: COlORS.light_gray,
    height: 230,
    width: 160,
    borderRadius: 5,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DLCModal;
