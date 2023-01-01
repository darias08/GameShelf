import { View, Text, ScrollView  } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AvailablePlatforms from './AvailablePlatforms'
import GameCapability from './GameCapability'

const Capabilities = (props) => {

  const gamePlatforms = props.gamePlatforms;
  const gameModes = props.gameModes;
  const playerPerspectives = props.playerPerspectives;
  const gameEngine = props.gameEngine;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style = {{backgroundColor: 'black', flex: 1,}}>
       <LinearGradient colors={['rgba(60, 60, 60, 0.4)', 'rgba(0, 0, 0, 0.6)']}>

        <AvailablePlatforms gamePlatforms = {gamePlatforms} />

        {/* <GameCapability gameModes = {gameModes} playerPerspectives = {playerPerspectives} gameEngine = {gameEngine}/> */}


      </LinearGradient>
    </ScrollView>
  )
}



export default Capabilities