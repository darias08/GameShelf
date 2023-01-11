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

const Content = props => {
  const [gsIsVisible, setGSVisible] = useState(false);
  const [dgIsVisible, setDGVisible] = useState(false);
  const [dlcIsVisible, setDlcIsVisible] = useState(false);
  const [pgIsVisible, setPGVisible] = useState(false);
  const [displayContent, setDisplayContent] = useState(true);

  const involvedCompanies = props.involveCompanies;

  involvedCompanies.push(involvedCompanies[0]);

  return (
    <View style={{flexDirection: 'column', marginTop: 5, marginLeft: 5}}>
      {/* Game Series */}
      {props.gameSeries && displayContent ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setGSVisible(!gsIsVisible)}>
            <View style={styles.projectRow}>
              <View style={styles.projectText}>
                <MaterialIcons
                  name="format-list-bulleted"
                  style={styles.bulletIcon}
                />
                <Text style={styles.gameSeries}>Game Series</Text>
              </View>

              <View>
                <FontAwesome
                  name="chevron-right"
                  size={15}
                  style={{marginRight: 30, marginTop: 5}}
                />
              </View>
            </View>
          </TouchableOpacity>

          <GameSeriesModal
            gameSeries={props.gameSeries}
            showModal={gsIsVisible}
            closeModal={setGSVisible}
          />
        </View>
      ) : null}

      {/* DLC */}
      {props.gameDLC && displayContent ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setDlcIsVisible(!dlcIsVisible)}>
            <View style={styles.newRow}>
              <View style={styles.projectText}>
                <FontAwesome name="cloud-download" style={styles.dlcIcon} />
                <Text style={styles.gameSeries}>DLC</Text>
              </View>

              <View>
                <TouchableOpacity activeOpacity={0.5}>
                  <FontAwesome
                    name="chevron-right"
                    size={15}
                    style={{marginRight: 30, marginTop: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <DLCModal
            closeModal={setDlcIsVisible}
            showModal={dlcIsVisible}
            gameName={props.gameName}
            gameDLC={props.gameDLC}
          />
        </View>
      ) : null}


      {/* Developer Games */}
      {props.involveCompanies && displayContent ? (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setDGVisible(!dgIsVisible)}>
            <View style={styles.newRow}>
              <View style={styles.projectText}>
                <FontAwesome name="code" style={styles.codeIcon} />
                <View style={{flexDirection: 'column'}}>
                  {involvedCompanies.map((item, index) => {
                    if (index === 1) {

                      return (
                        <Text
                          key={item.id}
                          style={{
                            marginVertical: -10,
                            marginLeft: 15,
                            color: 'white',
                          }}>
                          {item.company.name}
                        </Text>
                      );

                    }
                  })}
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
                  style={{marginRight: 30, marginTop: 5}}
                />
              </View>
            </View>
          </TouchableOpacity>

          <DeveloperGamesModal
            showModal={dgIsVisible}
            closeModal={setDGVisible}
            involveCompanies={props.involveCompanies}
            navigation = {props.navigation}
          />
        </View>
      ) : null}

      {/* <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setPGVisible(!pgIsVisible)}>
            <View style={styles.newRow}>
              <View style={styles.projectText}>
                <Entypo name="publish" style={styles.publishIcon} />
                <View style={{flexDirection: 'column'}}>
                  {involvedCompanies.map((item, index) => {
                    if (index === 0) {
                      return (
                        <Text
                          key={item.id}
                          style={{
                            marginVertical: -10,
                            marginLeft: 15,
                            color: 'white',
                          }}>
                          {item.company.name}
                        </Text>
                      );
                    }
                  })}
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
                  style={{marginRight: 30, marginTop: 5}}
                />
              </View>
            </View>
          </TouchableOpacity>

          <PublisherGames
            showModal={pgIsVisible}
            closeModal={setPGVisible}
            involveCompanies={props.involveCompanies}
          />
        </View> */}
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
    marginLeft: 25,
  },

  newRow: {
    backgroundColor: COlORS.dark_gray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginRight: 50,
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 25,
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
  },

  gameSeries: {
    marginLeft: 15,
    marginTop: 2,
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
    paddingLeft: 10,
  },

  publishIcon: {
    fontSize: 25,
    color: COlORS.light,
    marginLeft: 10,
    paddingLeft: 10,
  },
});

export default Content;
