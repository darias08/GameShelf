import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Image, onPress } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListOfPlatforms from '../ListOfPlatforms'
import TopTabsNavigator from '../../../components/constants/TopTabsNavigator'
import ItemSeparator from '../../../components/constants/ItemSeparator'
import LibraryBottom from './LibraryBottom'
import { IGDB_HTTP_REQUEST_PLATFORMS } from '../../../components/services/GameServices'
import { IGDB_HTTP_REQUEST_ALLGAMES } from '../../../components/services/GameServices'
import COlORS from '../../../components/constants/colors'
import { getImage } from '../../../components/services/GameServices'

const Platforms = ["Playstation 4", "Xbox One" , "Switch", "PC", "Wii-U", "Wii", "Playstation 5", "Playstation 3", "Xbox 360", "Gamecube"]
const Games = ['Final Fantasy XV', 'Kingdom Hearts', 'Legend of Zelda Ocarina of Time' ]

const LibrarySecondary = () => {

  const [activePlatform, setActivePlatform] = useState(0)
 
  const [platforms, setPlatforms] = useState([])
  const [games, setGames] = useState([])


  useEffect(() => {

    IGDB_HTTP_REQUEST_PLATFORMS().then(response => {
      setPlatforms(response.data);
    }).catch(err => {
      console.log(err)
    })

  }, [])

  return (
    <View style = {{backgroundColor: '#0C0E26'}}>
      <View>
        <FlatList 
              data={platforms}
              keyExtractor={(item, index) => {
              return  index.toString();
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{paddingLeft:15, paddingBottom: 10 }}
              ItemSeparatorComponent={() => <ItemSeparator width={50} />}
              ListHeaderComponent={() => <ItemSeparator width={20} />}
              ListFooterComponent={() => <ItemSeparator width={65} />}
              renderItem={({ item, index }) => 

              <View>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => setActivePlatform(index)}>
                    <Text style ={{...styles.textColor, color: (index === activePlatform ? true : false) ? COlORS.white : COlORS.light_gray}}>{item.name}</Text>
                    <Image style = {{height: 10, width:10, alignSelf: 'center', marginTop: 5}} source={(index === activePlatform ? true : false) ? require('../../../components/Images/dot-icon.png') : null} />
                  </TouchableOpacity>
              </View>  

              
             
            }
              
          />
      </View>


      <View>
        <FlatList 
              data={games}
              keyExtractor={(item, index) => {
              return  index.toString();
              }}
              columnWrapperStyle={styles.columnWrapper}
              numColumns={2}
              showsVerticalScrollIndicator = {false}
              style= {{marginBottom: 100}}
              renderItem={({ item }) => 
              
              <View style = {styles.listOfGames}>

                  <View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <ImageBackground style={styles.containerGames} source={{uri: getImage(item.cover.image_id)}} imageStyle={{borderRadius: 8}}/>
                    </TouchableOpacity>
                  </View>


              </View>

              
              //<ImageBackground style={styles.containerGames} source={{uri: getImage(item.cover.image_id)}} imageStyle={{borderRadius: 5}}/>
              }
          />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

    columnWrapper: {
        paddingLeft: 35,
        paddingTop: 0,
        paddingEnd: 40,
        marginBottom: 10,
        justifyContent: 'space-between',
    },

    containerGames: {
      backgroundColor: COlORS.light_gray,
      height: 210,
      width: 150,
      borderRadius: 5,
      elevation: 12,
      marginTop: 10
  },

  textColor: {
    fontSize: 18,
  },

  
})

export default LibrarySecondary

/*

 <ListOfPlatforms 
              numberOfItems = {index}
              platformTitles = {item.name}
              active = {index === activePlatform ? true : false}
              pressed = {(numberOfItems) => setActivePlatform(numberOfItems)}
              />   



<PlaystationSection />
              <XboxSection />
              <SteamSection/>
              <NintendoSection/>



              <View>
                  <TouchableOpacity activeOpacity={0.7} onPress={(index) => onPress(setActivePlatform(index))}>
                    <Text style ={{...styles.textColor, color: (index === activePlatform ? true : false) ? COlORS.white : COlORS.light_gray}}>{item.name}</Text>
                    <Image style = {{height: 10, width:10, alignSelf: 'center', marginTop: 5}} source={(index === activePlatform ? true : false) ? require('../../../components/Images/dot-icon.png') : null} />
                  </TouchableOpacity>
              </View>   

                
             <ListOfPlatforms 
              numberOfItems = {index}
              platformTitles = {item.name}
              active = {index === activePlatform ? true : false}
              iPressed = {(numberOfItems) => setActivePlatform(numberOfItems)}
              />
              */