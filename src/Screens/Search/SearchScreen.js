import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ScrollTest from './ScrollTest';
import TopTabNav from '../../components/Games/components/TopTabNav';
import Modal from '../../components/Games/components/Details/components/Modal';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Modal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0E26',
  },
});

export default SearchScreen;
