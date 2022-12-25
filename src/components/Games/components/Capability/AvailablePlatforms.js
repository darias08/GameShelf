import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import COlORS from '../../../constants/colors'

const AvailablePlatforms = (props) => {


  return (
    <View>
        <Text style ={styles.availableText}>Available on</Text>

        <ScrollView horizontal={true} style = {{marginLeft: 20, marginTop: 10}}>
        <FlatList 
        data={props.gamePlatforms}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle= {{flexWrap: 'wrap'}}
        numColumns={2}
        renderItem= {({item}) => 
            <Text style = {styles.platformsText}>{item.name}</Text>
        
        }
        />
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    availableText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'EBGaramond-Bold',
        marginLeft: 30, 
        marginTop: 25
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
        fontSize: 12

    }
})

export default AvailablePlatforms