import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import COlORS from '../../../../constants/colors';
import ItemSeparator from '../../../../constants/ItemSeparator';

const AgeRated = props => {
  return (
    <View style={{marginTop: 15, marginLeft: 3}}>
      <ScrollView horizontal={true} style={{width: '100%'}}>
        <FlatList
          data={props.ageRated}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => {
            //Rated Pending
            if (item.rating === 6) {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: 50,
                      width: 50,
                      marginLeft: 25,
                      marginTop: 30,
                    }}
                    source={require('../../../../Images/Age_Rated/Rated_Pending.png')}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'EBGaramond-Bold',
                        marginLeft: 20,
                        marginTop: 45,
                      }}>
                      Not Yet Rated
                    </Text>

                    <ScrollView>
                      <FlatList
                        data={item.content_descriptions}
                        keyExtractor={(item, index) => {
                          return index.toString();
                        }}
                        horizontal
                        renderItem={({item, index}) => {
                          if (index === 0 || index === 1) {
                            return (
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontFamily: 'EBGaramond-Medium',
                                  marginLeft: 20,
                                  marginTop: 5,
                                  color: COlORS.grey,
                                }}>
                                {item.description}
                              </Text>
                            );
                          }
                        }}
                      />
                    </ScrollView>
                  </View>
                </View>
              );
            }

            //Rated E
            if (item.rating === 9 || item.rating === 8) {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: 50,
                      width: 45,
                      marginLeft: 25,
                      marginTop: 30,
                    }}
                    source={require('../../../../Images/Age_Rated/Rated_E.png')}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'EBGaramond-Bold',
                        marginLeft: 20,
                        marginTop: 35,
                        position: 'relative',
                      }}>
                      EVERYONE
                    </Text>

                    <ScrollView>
                      <FlatList
                        data={item.content_descriptions}
                        keyExtractor={(item, index) => {
                          return index.toString();
                        }}
                        horizontal
                        renderItem={({item, index}) => {
                          if (index === 0 || index === 1) {
                            return (
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontFamily: 'EBGaramond-Medium',
                                  marginLeft: 20,
                                  marginTop: 5,
                                  color: COlORS.grey,
                                }}>
                                {item.description}
                              </Text>
                            );
                          }
                        }}
                      />
                    </ScrollView>
                  </View>
                </View>
              );
            }

            //Rated T
            if (item.rating === 10) {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: 50,
                      width: 45,
                      marginLeft: 25,
                      marginTop: 30,
                    }}
                    source={require('../../../../Images/Age_Rated/Rated_T.png')}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'EBGaramond-Bold',
                        marginLeft: 20,
                        marginTop: 30,
                      }}>
                      TEEN
                    </Text>

                    <ScrollView>
                      <FlatList
                        data={item.content_descriptions}
                        keyExtractor={(item, index) => {
                          return index.toString();
                        }}
                        horizontal
                        renderItem={({item, index}) => {
                          if (index === 0 || index === 1) {
                            return (
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontFamily: 'EBGaramond-Medium',
                                  marginLeft: 20,
                                  marginTop: 5,
                                  color: COlORS.grey,
                                }}>
                                {item.description}
                              </Text>
                            );
                          }
                        }}
                      />
                    </ScrollView>
                  </View>
                </View>
              );
            }

            //Rated M
            if (item.rating === 11) {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: 50,
                      width: 45,
                      marginLeft: 25,
                      marginTop: 30,
                    }}
                    source={require('../../../../Images/Age_Rated/Rated_M.png')}
                  />

                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontFamily: 'EBGaramond-Bold',
                        marginLeft: 20,
                        marginTop: 30,
                        paddingRight: 30,
                      }}>
                      MATURE 17+
                    </Text>

                    <ScrollView style={{marginLeft: 20}}>
                      <FlatList
                        data={item.content_descriptions}
                        keyExtractor={(item, index) => {
                          return index.toString();
                        }}
                        horizontal
                        renderItem={({item, index}) => {
                          const arrayToJoin = [item];

                          if (index === 0 || index === 1) {
                            return (
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontFamily: 'EBGaramond-Medium',
                                  marginTop: 5,
                                  color: COlORS.grey,
                                }}>
                                {(index ? ',  ' : '') + item.description}
                              </Text>
                            );
                          }
                        }}
                      />
                    </ScrollView>
                  </View>
                </View>
              );
            }
          }}
        />
      </ScrollView>

      {/* Summary */}
      {/* <SafeAreaView style={styles.safe}>
        <View style={styles.root}>
          <ReadMore
            seeMoreStyle={{color: COlORS.blue}}
            animate={true}
            seeLessStyle={{color: COlORS.blue}}
            seeMoreText="Read more"
            seeLessText="Read less"
            style={styles.textStyle}
            numberOfLines={5}>
            <Text style={{lineHeight: 25}}>{data}</Text>
          </ReadMore>
        </View>
      </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  Description: {
    color: 'white',
    marginLeft: 25,
    marginTop: 25,
    fontSize: 16,
    fontFamily: 'EBGaramond-SemiBold',
  },

  textStyle: {
    fontSize: 16,
    color: COlORS.light,
  },

  safe: {
    flex: 1,
    marginLeft: 10,
    marginTop: -10,
    width: 380,
  },
  root: {
    flex: 1,
    padding: 16,
  },
});

export default AgeRated;
