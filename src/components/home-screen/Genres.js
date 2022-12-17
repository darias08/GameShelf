import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native'
import React, { useState, useEffect } from "react";
import ItemSeparator from "../constants/ItemSeparator";
import COlORS from '../constants/colors';


const ListOfGenres = (props) => {

    return (

        <ScrollView style={{ width: "100%" }}>
        <View>
        <View style={styles.projectRow}>
            <View style={styles.projectText}>
                <Text style={styles.titleText}>Genres</Text>
              </View>
            <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={{marginRight:10, color: COlORS.light}}>Show All</Text>
            </TouchableOpacity>
            </View>          
        </View>
        <FlatList 
            data={props.data}
            keyExtractor={(item) => item.id.toString()} //id.toString()
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:10, marginBottom: 50 }}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={50} />}
            renderItem={({ item }) => {
                if(item.id === 4) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/action_icon.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }

                if (item.id === 5) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/target.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }


                if (item.id === 7) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/itunes.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }


                if (item.id === 9) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/puzzle.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }


                if (item.id === 10) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/sport_car.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }


                if (item.id === 12) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/level_up.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }

                if (item.id === 13) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/metaverse.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }

                if (item.id === 14) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/sports.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }

                if (item.id === 15) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={styles.iconGenres} source={require('../Images/genre_images/strategy_icon.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }

                if (item.id === 24) {
                    return (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style = {styles.background}>
                            <Image style ={{height: 40, width: 40}} source={require('../Images/genre_images/tactical.png')}/>
                            <Text style ={styles.GenreText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }

               
            } 

        }
        />
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    titlePopularNow: {
        fontSize:18,
        marginLeft: 50,
        marginBottom: 15,
        marginTop: 40,
        color: COlORS.white
      },

    background: {
        backgroundColor: '#252227',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 8,
        borderRadius: 8,
        marginBottom: 5,
    },

    projectText: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50
      },
    
      projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginTop: 40,
        marginBottom: 15,
      },
    
      moreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30
      },
  
      titleText: {
        color: COlORS.white,
        fontSize: 16,
      },

    userCollectionTitle: {
        fontSize:18,
        color: COlORS.white,
        marginTop: 20,
        marginLeft: 50
    },

    iconGenres: {
        height: 20,
        width: 20,
        marginLeft: 8,
        marginTop: 8,
      },

      GenreText: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 10,
        marginTop: 7,
      },
});

export default ListOfGenres