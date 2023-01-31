import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import COlORS from '../../../../../constants/colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {getImage} from '../../../../../services/GameServices';
import FastImage from 'react-native-fast-image';

const PublisherGames = ({
  navigation,
  involveCompanies,
  showModal,
  closeModal,
  gameIdPublish,
}) => {
  const toggleModal = () => {
    closeModal(false);
  };

  const involvedCompanies = involveCompanies;

  const [textLength, setTextLength] = useState(true);

  const publisher = () => {
    if (involvedCompanies) {
      involvedCompanies.sort(function (a, b) {
        return b.publisher - a.publisher;
      });

      return involvedCompanies.map((item, index) => {
        if (item.publisher === true && index === 0 && item.company.name.length < 24) {
          return <Text style={{
            fontSize: 18,
            color: COlORS.light,
            marginTop: 10,
            textAlign: 'center',
            marginRight: 25
          }} key={item.id}>{item.company.name}
          </Text>
        }

      else if (item.publisher === true && index === 0 && item.company.name.length >= 25) {
        return <Text style={{
          fontSize: 18,
          color: COlORS.light,
          marginTop: 10,
          textAlign: 'center',
        }} key={item.id}>{item.company.name}
        </Text>
      }
      })
    }
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
          <View style={{flexDirection: 'row', paddingRight: 50}}>
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
                  marginTop: 10,
                }}>
                {/* <Text
                  style={{
                    fontSize: 18,
                    color: COlORS.light,
                    marginTop: 10,
                    textAlign: 'center',
                  }}>
                  {publisher()}
                </Text> */}
                {publisher()}

                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 20,
                    color: COlORS.white,
                    fontWeight: 'bold',
                    paddingBottom: 20,
                    textAlign: 'center',
                    marginRight: 25,
                  }}>
                  Games
                </Text>
              </View>
            </View>
          </View>

          {involvedCompanies.map((item, index) => {
            if (item.publisher === true && index === 0) {
              return (
                <FlatList
                  data={item.company.published}
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                  key={item.id}
                  showsVerticalScrollIndicator={false}
                  columnWrapperStyle={styles.columnWrapper}
                  numColumns={2}
                  renderItem={({item, index}) => {
                    if (item.cover) {
                      return (
                        <View>
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
                        </View>
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
            }
          })}
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

export default PublisherGames;
