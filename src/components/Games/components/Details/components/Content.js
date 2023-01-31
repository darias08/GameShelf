import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import COlORS from '../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import GameSeriesModal from './Modals/GameSeriesModal';
import DeveloperGamesModal from './Modals/DeveloperGamesModal';
import PublisherGames from './Modals/PublisherGamesModal';
import DLCModal from './Modals/DLCModal';

const getWidth = Dimensions.get('screen').width;

const Content = props => {
  const [gsIsVisible, setGSVisible] = useState(false);
  const [dgIsVisible, setDGVisible] = useState(false);
  const [dlcIsVisible, setDlcIsVisible] = useState(false);
  const [pgIsVisible, setPGVisible] = useState(false);
  const [displayContent, setDisplayContent] = useState(true);
  const [gameId, setGameId] = useState([]);

  const involvedCompanies = props.involveCompanies;

  const TextLength = (item) => {
    if(item.company.name.length >= 25) {
      return <Text>{item.company.name.substring(0, 25)}...</Text>
    }
    
    else if (item.company.name.length <= 25) {
      return <Text>{item.company.name}</Text>
    }
  }

  const gameSeries = () => {
  
    const gameCollection =[props.collections];

    return gameCollection.map((item, index) => {

      return (
      <View key={item.id} style={{width: getWidth / 1.0}}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => setGSVisible(!gsIsVisible)}>
                <View style={styles.GameSeriesColumn}>
                  <View style={styles.projectText}>
                      <MaterialIcons
                      name="format-list-bulleted"
                      style={styles.bulletIcon}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                          marginTop: 3,
                          color: 'white',
                        }}>
                        Game Series
                      </Text>
                    </View>
                  </View>

                  <View>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{marginRight: 25, marginTop: 5}}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <GameSeriesModal
              gameSeries={item}
              showModal={gsIsVisible}
              closeModal={setGSVisible}
              navigation={props.navigation}
              />

        </View>
      )
    })
    
  }

  const ListOfGameDlcs = () => {

    return (
      <View style={{width: getWidth / 1.0}}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => setDlcIsVisible(!dlcIsVisible)}>
                <View style={styles.GameSeriesColumn}>
                  <View style={styles.projectText}>
                    <FontAwesome name="cloud-download" style={styles.dlcIcon} />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginLeft: 15,
                          fontSize: 14,
                          marginTop: 3,
                          color: 'white',
                        }}>
                        Game DLCS
                      </Text>
                    </View>
                  </View>

                  <View>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{marginRight: 25, marginTop: 5}}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <DLCModal
              closeModal={setDlcIsVisible}
              showModal={dlcIsVisible}
              navigation = {props.navigation}
              gameDLC = {props.DLCS}
              gameName = {props.gameName}
              />

        </View>
      )
    
  }

  const developer = () => {
      const data = involvedCompanies;
      const gameCover= props.gameCover;

      data.sort(function (a, b) {
        return b.developer - a.developer;
      });

      return data.map((item, index) => {
        
        if (item.developer === true && index === 0 && !item.company.developed) {
          return (
            <View key={item.id} style={{width: getWidth / 1.0}}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => setDGVisible(!dgIsVisible)}>
                <View style={styles.developerColumn}>
                  <View style={styles.projectText}>
                    <FontAwesome name="code" style={styles.codeIcon} />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginVertical: -10,
                          marginLeft: 15,
                          fontSize: 14,
                          color: 'white',
                        }}>
                        {TextLength(item)}
                      </Text>
                      <Text
                        style={{
                          position: 'absolute',
                          marginLeft: 15,
                          marginTop: 11,
                          color: COlORS.grey,
                          width: 200,
                        }}>
                        Developer
                      </Text>
                    </View>
                  </View>

                  <View>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{marginRight: 25, marginTop: 5}}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <DeveloperGamesModal
              showModal={dgIsVisible}
              closeModal={setDGVisible}
              involveCompanies={props.involveCompanies}
              navigation={props.navigation}
              gameCover = {props.gameCover}
              />
            </View>
          );
          
        }

        else if (item.developer === true && index === 0) {

          return (
            <View key={item.id} style={{width: getWidth / 1.0}}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => setDGVisible(!dgIsVisible)}>
                <View style={styles.developerColumn}>
                  <View style={styles.projectText}>
                    <FontAwesome name="code" style={styles.codeIcon} />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          marginVertical: -10,
                          marginLeft: 15,
                          fontSize: 14,
                          color: 'white',
                        }}>
                        {TextLength(item)}
                      </Text>
                      <Text
                        style={{
                          position: 'absolute',
                          marginLeft: 15,
                          marginTop: 11,
                          color: COlORS.grey,
                          width: 200,
                        }}>
                        Developer
                      </Text>
                    </View>
                  </View>

                  <View>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{marginRight: 25, marginTop: 5}}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <DeveloperGamesModal
              showModal={dgIsVisible}
              closeModal={setDGVisible}
              involveCompanies={props.involveCompanies}
              navigation={props.navigation}
              />
            </View>
          );
        }
      });
  };

  const publisher = () => {
    const pdata = involvedCompanies;

    pdata.sort(function (a, b) {
      return b.publisher - a.publisher;
    });

    return pdata.map((item, index) => {

      const publisher = item.publisher

      if (publisher === true && index === 0) {
        
        return (
          <View key={item.id} style={{width: getWidth / 1.0, paddingBottom: 10, marginBottom: 10}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {setPGVisible(!pgIsVisible), setGameId(item.id)}}>
              <View style={styles.newColumnPublish}>
                <View style={styles.projectText}>
                <Entypo name="publish" style={styles.publishIcon} />
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        marginVertical: -10,
                        marginLeft: 15,
                        color: 'white',
                      }}>
                      {item.company.name}
                    </Text>
                    <Text
                      style={{
                        position: 'absolute',
                        marginLeft: 15,
                        marginTop: 11,
                        color: COlORS.grey,
                        width: 200,
                      }}>
                      Publisher
                    </Text>
                  </View>
                </View>

                <View>
                  <FontAwesome
                    name="chevron-right"
                    size={15}
                    style={{marginRight: 25, marginTop: 5}}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <PublisherGames
            showModal={pgIsVisible}
            closeModal={setPGVisible}
            involveCompanies={props.involveCompanies}
            navigation={props.navigation}
            gameIdPublish={gameId}
            />
          </View>
        );
      }

      
    });
};

  return (
    <View style={{flexDirection: 'column', marginTop: 5, marginLeft: 5}}>
      
      {/* Game Series */}
      {props.collections && displayContent ? (
        <Text>{gameSeries()}</Text>
      ) : null}

      {/* DLC */}

      {props.DLCS && displayContent ? (
        <Text>{ListOfGameDlcs()}</Text>
      ) : null} 
      

      {/* Developer Games */}
      {props.involveCompanies && displayContent ? (
        <Text style={{paddingBottom: 10}}>{developer()}</Text>
      ) : null}
      
      {/* Publisher Games */}

      {props.involveCompanies && displayContent ? (
        <Text style={{paddingBottom: 10, marginBottom: 10}}>{publisher()}</Text>
      ) : null}
     
    </View>
  );
};

const styles = StyleSheet.create({
  projectRow: {
    backgroundColor: COlORS.dark_gray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
  },

  GameSeriesColumn: {
    backgroundColor: COlORS.dark_gray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginTop: 10
  },

  developerColumn: {
    backgroundColor: COlORS.dark_gray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginTop: 10
  },

  newColumnPublish: {
    backgroundColor: COlORS.dark_gray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
  },

  gameSeries: {
    marginLeft: 15,
    color: COlORS.white,
    fontSize: 14,
  },

  developerName: {
    marginLeft: 15,
    color: COlORS.white,
    fontSize: 14,
  },

  bulletIcon: {
    fontSize: 25,
    color: COlORS.light,
    marginLeft: 15,
    paddingLeft: 5,
    marginTop: 2
  },

  codeIcon: {
    fontSize: 25,
    color: COlORS.light,
    marginLeft: 10,
    paddingLeft: 10,
  },

  dlcIcon: {
    fontSize: 25,
    color: COlORS.light,
    marginLeft: 12,
    paddingLeft: 8,
    paddingTop: 3
  },

  publishIcon: {
    fontSize: 25,
    color: COlORS.light,
    marginLeft: 10,
    paddingLeft: 13,
  },
});

export default Content;
