import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import COlORS from '../../../constants/colors';

const GameCapability = (props) => {

     const gameModes = props.gameModes;
     const playerPerspectives = props.playerPerspectives;
     const gameEngine = props.gameEngine;

     const data = gameModes.concat(playerPerspectives, gameEngine)
  return (
    <View>
        <Text style = {styles.textCapability}>Capabilities</Text>

        <ScrollView horizontal = {true} style ={{marginLeft: 20}}>
        <FlatList
            data={data}
            keyExtractor={(item, index) => {
            return  index.toString();
            }}
            style={{paddingLeft: 0}}
            columnWrapperStyle= {{flexWrap: 'wrap'}}
            numColumns={4}
            renderItem = {({item, index}) => 
            
                <Text style = {styles.platformsText}>{item.name}</Text>

            }
        />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    textCapability: {
    color: 'white',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 16,
    marginTop: 25,
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
    }
})

export default GameCapability