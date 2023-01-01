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
  import {FlatList, ScrollView} from 'react-native-gesture-handler';
  import {getImage} from '../../../../../services/GameServices';
  
  const PublisherGames = props => {
    
    const toggleModal = () => {
      props.closeModal(false);
    };
  
    const involvedCompanies = props.involveCompanies;
  
    involvedCompanies.push(involvedCompanies[0]);
  
  
    return (
      <View>
        <Modal
          animationType="fade"
          visible={props.showModal}
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
  
              <View style={{flex: 1, justifyContent: 'center', alignItems:'center', marginLeft: 5}}>
                <View
                  style={{
                    flexDirection: 'column',
                    flexShrink: 1,
                    marginTop: 10,
                  }}>
                  {involvedCompanies.map((item, index) => {
                    if (index === 0) {
                      return (
                        <Text
                          key={item.id}
                          style={{
                            fontSize: 15,
                            color: COlORS.light,
                            textAlignVertical: 'center',
                            textAlign: 'center',
                            marginTop: 10,
                            marginLeft: 5
                            
                          }}>
                          {item.company.name}
                        </Text>
                      );
                    }
                  })}
  
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
                    Games
                  </Text>
                </View>
              </View>
            </View>
  
            {involvedCompanies.map((item, index) => {
                
              if (index === 0 && item.company.developed) {
                
                return (
                  <FlatList
                    data={item.company.developed}
                    keyExtractor={(item, index) => {
                      return index.toString();
                    }}
                    key={item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.columnWrapper}
                    numColumns={2}
                    renderItem={({item, index}) => {
  
                      if(!item.cover) {
                        return (
                          <TouchableOpacity activeOpacity={0.7}>
                              <ImageBackground
                                style={styles.containerGames}
                                source={require('../../../../../Images/no_image.png')}
                                imageStyle={{borderRadius: 5}}
                              />
                            </TouchableOpacity>
                          );
                      }
  
                      else if (item.cover.image_id) {
                        return (
                          <View>
                            <TouchableOpacity activeOpacity={0.7}>
                              <ImageBackground
                                style={styles.containerGames}
                                imageStyle={{borderRadius: 5}}
                                source={{uri: getImage(item.cover.image_id)}}
                              />
                            </TouchableOpacity>
                          </View>
                        )
                      }
                  
                    }}
                  />
                
                );
              
              }
  
              if (!item.company.developed && index === 0) {
  
                  const published = item.company.published;
                  
                  return(
                    <FlatList
                    data={published}
                    keyExtractor={(item, index) => {
                      return index.toString();
                    }}
                    key={item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={styles.columnWrapper}
                    numColumns={2}
                    renderItem={({item, index}) => {
                      
                      if (item.cover.image_id) {
                        return (
                          <View>
                            <TouchableOpacity activeOpacity={0.7}>
                              <ImageBackground
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
                  )
              }
            })}
  
            
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
    },
  });
  
  export default PublisherGames;
  