import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ScrollTest from './ScrollTest';
import TopTabNav from '../../components/Games/components/TopTabNav';
import ImageView from "react-native-image-viewing";
import { IGDB_HTTP_REQUEST_POPULAR } from "../../components/services/GameServices";

const SearchScreen = ({navigation}) => {

  const [Popular, setPopularNow] = useState([]);


 
 
  const [visible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default SearchScreen;
