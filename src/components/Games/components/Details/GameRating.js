

import { View, Text,} from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';


const GameRating = (props) => {

  let ratingColor = '#e35049'
  let ratingStatus = ''
  
  if (props.Rating > 49.5) ratingColor = '#f09f43', ratingStatus = 'Bad'
  if (props.Rating > 59.5) ratingColor = '#f0c843', ratingStatus = 'Not Bad' 
  if (props.Rating > 69.5) ratingColor = '#f5f11d', ratingStatus = 'Okay'
  if (props.Rating > 79.5) ratingColor = '#b1f51d', ratingStatus = 'Decent'
  if (props.Rating > 89.5) ratingColor = '#82f51d', ratingStatus = 'Very Good'
  

  const rating = props.rating;

  return (
    <View style = {{marginTop: -15, marginLeft: 265, position: 'absolute'}}>
      {!isNaN(props.Rating) && (
        <CircularProgress
        value={props.Rating}
        radius={43}
        duration={1000}
        title={ratingStatus}
        activeStrokeWidth={5}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={ratingColor}
        />
      )}
      
      {isNaN(props.Rating) && (
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

export default GameRating