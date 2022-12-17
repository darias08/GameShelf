import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LibraryHeader from './components/LibraryHeader';
import LibrarySecondary from './components/LibrarySecondary';
import LibraryBottom from './components/LibraryBottom';
import TopTabNav from '../../components/Games/components/TopTabNav';


const LibraryScreen = ({navigation}) => {
return (
  
  <View style = {{backgroundColor: 'green', flex: 1}}>

  <TopTabNav/>

  </View>

  );
}


export default LibraryScreen;
