import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Genres = (props) => {
  return (
   
    <ScrollView horizontal={true}>
    <View style={{flexDirection: 'column'}}>
    <Text style={{marginLeft:25, marginTop:25, marginBottom: 20, color: 'white', fontSize: 20, fontFamily: 'EBGaramond-Bold'}}>Genres: </Text>

    <FlatList
    data={props.gameGenres}
    keyExtractor={(item, index) => {
      return index.toString();
    }}
    showsHorizontalScrollIndicator={false}
    columnWrapperStyle={styles.columnWrapper}
    numColumns={3}
    renderItem={({item, index}) => {
    
     return (

          <View style={styles.genres}>
            <View style={styles.genre}>
              <Text style={styles.genreText}>{item.name}</Text>
            </View>
          </View>
     );

    }
    }
    />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  genre: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },

  genres: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-evenly'
  },

  genreText: {
    fontSize: 13, 
    opacity: 1,
    color:'white',
    
  },

  columnWrapper: {
    paddingLeft: 20,
    paddingBottom: 15,
  },
})

export default Genres;
