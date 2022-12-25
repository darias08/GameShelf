import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import COlORS from '../../../constants/colors'
import { text } from 'express';
import ItemSeparator from '../../../constants/ItemSeparator';


const Platforms_Genre = (props) => {

  const genre = props.gameGenre;
  const developer = props.involveCompanies;
  const gamePlatforms = props.gamePlatforms;
  const gameSummary = props.gameSummary;

  return (
    <View style = {{flexDirection:'row', paddingBottom: 40, marginTop: 20}}>
      
        <View style ={{flexDirection:'column', width:155 }}>
      
        <Text style={{fontFamily: 'EBGaramond-Bold', fontSize: 16, color: COlORS.white, marginLeft: 27, marginTop: 15}}>Genre</Text>
          <ScrollView>
            {genre.map((item, index) => {
              if(index === 0) {
              return (
              <View key = {index}>
                  <Text style = {{marginLeft: 27, marginTop: 15, color: COlORS.light}}>{item.name}</Text>
              </View>
              )
              }
            })}
            
          </ScrollView>
        </View>

        <View style ={{flexDirection:'column',position: 'absolute'}}>
      
        <Text style={{fontFamily: 'EBGaramond-Bold', fontSize: 16, color: COlORS.white, marginLeft: 180, marginTop: 15}}>Platforms</Text>
          
          <ScrollView horizontal={true} style={{marginLeft:165}} >
              <FlatList
              
              columnWrapperStyle={{flexWrap:'wrap'}}
              numColumns={4}
              data = {gamePlatforms}
              keyExtractor={(item) => item.id.toString()}
              
              renderItem={({ item }) => {
                return (
                  <View >
                    <Text style={styles.platforms}>{item.abbreviation}</Text>
                  </View>
                )
              }
              }

              />
               
                  {/* <View key = {index}>
                    <Text style={styles.platforms}>{item.abbreviation}</Text>
                  </View> */}
                 
                
              
          </ScrollView>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  platforms: {
    fontSize: 12,
    color: COlORS.light,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: COlORS.dark_gray,
    alignSelf: 'flex-start',
    paddingTop: 5,
    paddingLeft:10, 
    paddingRight: 10,
    paddingBottom: 5,
    borderRadius:10
  },
})

export default Platforms_Genre