import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import COlORS from '../../../constants/colors';

const AvailablePlatforms = props => {
  return (
    <View>
      <Text style={styles.availableText}>Available on</Text>

      <ScrollView horizontal={true} style={{marginLeft: 15, marginTop: 0}}>
        <FlatList
          data={props.gamePlatforms}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={{flexWrap: 'wrap'}}
          style={{paddingLeft: 5}}
          numColumns={3}
          renderItem={({item}) => (
            <Text style={styles.platformsText}>{item.name}</Text>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  availableText: {
    color: 'white',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 16,
    marginTop: 30,
    marginLeft: 30,
  },
  platformsText: {
    color: 'white',
    backgroundColor: COlORS.dark_gray,
    borderRadius: 15,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 15,
    fontSize: 10,
  },
});

export default AvailablePlatforms;
