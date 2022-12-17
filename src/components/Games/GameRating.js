import { View, Text,} from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';


const Rating = (props) => {

  let ratingColor = '#e35049'
  let NoRating = 'n/a'

  if (props.rating > 50) ratingColor = '#f09f43'
  if (props.rating > 60) ratingColor = '#f0c843'
  if (props.rating > 70) ratingColor = '#f5f11d'
  if (props.rating > 75) ratingColor = '#cdf51d'
  if (props.rating > 80) ratingColor = '#b1f51d'
  if (props.rating > 85) ratingColor = '#b4f51d'
  if (props.rating > 90) ratingColor = '#82f51d'
  if (props.rating > 95) ratingColor = '#6cf51d'

  const rating = props.rating;

  return (
    <View style = {{marginTop: 30, marginLeft: 5}}>
      {!isNaN(props.rating) && (
        <CircularProgress
        value={props.rating}
        radius={40}
        duration={1000}
        title={'Rating'}
        activeStrokeWidth={8}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={ratingColor}
        />
      )}
      
      {isNaN(props.rating) && (
        <CircularProgress
        value={0}
        radius={40}
        duration={1000}
        title={'N/A'}
        activeStrokeWidth={8}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={ratingColor}
        />
      )}

    </View>
  )
}

export default Rating