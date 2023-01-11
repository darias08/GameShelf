import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ItemSeparator from '../constants/ItemSeparator';
import COlORS from '../constants/colors';

const ListOfGenres = props => {

    const data = props.data;

  return (
    <ScrollView horizontal={false} style={{width: '100%', paddingLeft: 5}}>
       <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator width={25} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={35} />}
        renderItem={({item}) => {
            return(
                <TouchableOpacity>
                    <Text style={styles.GenreText}>{item.name}</Text>
                </TouchableOpacity>
            )
        }} 
       />
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  GenreText: {
    color: COlORS.grey,
    fontSize: 13,
    marginTop: 25,
    
  },
});

export default ListOfGenres;
