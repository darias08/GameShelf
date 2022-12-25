import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COlORS from '../../../constants/colors';
import GameRating from './GameRating';

const ReleaseDate_Rating = props => {

  const total_Rating = props.total_Rating;

  let currentTimestamp = new Date(props.gameReleased * 1000);
  let date = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(currentTimestamp);

  return (
    <View style={{flexDirection: 'row', marginTop: 25}}>
      <View style={{flexDirection: 'column'}}>

        <Text style={styles.textReleaseDate}>Release Date: </Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>

      <GameRating Rating = {total_Rating} />
    </View>
  );
};

const styles = StyleSheet.create({
  textReleaseDate: {
    color: 'white',
    fontFamily: 'EBGaramond-Bold',
    fontSize: 18,
    marginLeft: 25,
  },

  textDate: {
    marginLeft: 25,
    marginTop: 7,
    fontSize: 16,
    color: COlORS.grey,
  },
});

export default ReleaseDate_Rating;
