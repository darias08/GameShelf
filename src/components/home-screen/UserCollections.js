import { View, Image, StyleSheet, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import ItemSeparator from '../constants/ItemSeparator'
import COlORS from '../constants/colors'


const UserCollections = (props) => {

    return (

    <View style = {styles.container}>
        <View style={styles.projectRow}>
            <View style={styles.projectText}>
                <Text style={styles.titleText}>Collections</Text>
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
            style={{paddingLeft:30}}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={65} />}
            renderItem={({ item }) => 
            
            <TouchableOpacity 
            activeOpacity={0.9} 
            style={styles.cardView1}>

            <Image 
            style={styles.cardImage} 
            source={{uri: item.game_background.url}} />

            <View>
                
            <View  style= {styles.cardBottomBackground}>

                <Image style = {styles.userAvatar} source={item.creator.avatar ? {uri: item.creator.avatar} : require('../Images/default_profile.png')}/>
                
                <View style = {styles.columnCollections}>
                            
                <Text numberOfLines={1} style = {styles.userTextTitle}>{item.name}</Text>
                            
                    <View style = {styles.usernameRow}>

                    <Text style = {{color: COlORS.grey}}>by: </Text>
                    <Text style = {styles.textUsername}> {item.creator.username} </Text>

                    </View>
                            
                </View>
                        
            </View>

            </View>
            </TouchableOpacity>
        }
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },

    projectText: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50
      },
    
      projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 50,
        marginTop: 30,
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

    columnCollections: {
        marginLeft: 15,
        marginTop: 3
    },

    usernameRow: {
        flexDirection: 'row',
        marginTop: 5,
    },

    userTextTitle: {
        color: COlORS.white,
        fontSize: 15,
        width: 200,
    },

    textUsername: {
        color: COlORS.grey,
        marginLeft: 5
    },

    cardImage: {
        backgroundColor: COlORS.light_gray,
        marginTop: 15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width:315,
        height: 130,
        resizeMode: 'stretch'
    },

    cardBottomBackground: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 0,
        paddingTop: 15,
        paddingBottom: 20,
        backgroundColor: '#252227',
        height: 85,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },

    userAvatar: {
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 20,
        width: 45,
        height: 45,
        borderRadius:50
    },

    imageSize: {
        height: 280,
        width: 200,
        borderRadius: 12,
        
    }
})

export default UserCollections 