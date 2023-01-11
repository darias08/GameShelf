

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
  
  return (
    <View style = {{marginTop: 30, marginLeft: 285, position: 'absolute'}}>
      {!isNaN(props.Rating) && (
        <CircularProgress
        value={props.Rating}
        radius={35}
        activeStrokeWidth={5}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={ratingColor}
        />
      )}
      
      {isNaN(props.Rating) && (
        <CircularProgress
        value={0}
        radius={35}
        activeStrokeWidth={8}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={ratingColor}
        />
      )}

    </View>
  )
}

export default GameRating