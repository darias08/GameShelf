import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, FlatList, ScrollView} from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import COlORS from '../../constants/colors';
import { getImage } from '../../services/GameServices'


const GamePreview_Header = (props) => {
  return (

    <View>
    <ImageBackground>
        
    {/***************Back Button****************/}
    <View style={styles.projectRow}>
    <View style={styles.projectText}>
        <TouchableOpacity
            onPress={() => props.navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} color="white" style={{marginLeft: 30, marginTop: 20, position: 'relative'}}/>
        </TouchableOpacity>  
    </View>

    {/***************More Button****************/}
    <View style={styles.moreContainer}>
        <TouchableOpacity activeOpacity={0.5} >
            <Icon name="more-horizontal" size={30} style={styles.moreIcon} />
        </TouchableOpacity>
        </View>          
    </View>

    {/***************Game Cover****************/}
    <View style = {{flexDirection: 'row'}}>
    
    <ImageBackground style={styles.containerGame} resizeMode='stretch' source= 
    {props.gameCover ? {uri: getImage(props.gameCover)} : require('../../Images/no_image.png')} 
    imageStyle={{borderRadius:12, borderColor: COlORS.light, borderWidth: 2}}/>      
    

    <View>
        {/***************Game Title****************/}
        <View style = {{marginTop: 10, width: 215}}>
            <Text style = {styles.GameTitle}>{props.gameName}</Text>
        </View>

        {/* Developer name */}
        <View>
        <View style = {{flexDirection: 'row', }}>
            <ScrollView horizontal={true}  style={{ width: "100%" }}>
            <FlatList data={props.involveCompanies} renderItem={({ item, index }) => {

            if (index === 0) {
                return (
                    <View style={{flex: 1, flexGrow: 1}}>
                        <Text style={{marginLeft: 15, marginTop: 5, color: COlORS.light_green}}>{item.company.name}</Text>
                    </View>
                )
            }
            }
            }
            />
            </ScrollView>
            </View>
        </View>
        
    </View>
    
</View>

    {/***************Platforms****************/}
    {/* <View>
        <ScrollView horizontal={true}  style={{ width: "100%" }}>
            <FlatList 
                data={gamePlatforms}
                keyExtractor={(item, index) => {
                return  index.toString();
                }}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
                numColumns={4}
                style={styles.FlatList}
                ItemSeparatorComponent={() => <ItemSeparator width={10} />}
                renderItem={({ item }) => 

                <View>
                    <Text style = {styles.platform}>{item.abbreviation}</Text>
                </View>
                
                }
            />
        </ScrollView>
    </View> 
    

    {/***************Game Released****************}
    <View>
        <Text style = {styles.gameReleased}>{date}</Text>
    </View> */}


    {/***************Add Button****************/}
    <View style = {{flexDirection: 'row', marginTop: 30}}>
    <View style={{marginLeft: 30}}>
        <TouchableOpacity style= {styles.AddButton}  activeOpacity={0.8} > 
            <Text style={styles.textAdd}>Add</Text>
            <Icon name ="more-horizontal" size={25} style={{color: 'white', marginLeft: 40}}/>
        </TouchableOpacity>
    </View>
    {/***************Wishlist Button****************/}
        <View style= {{marginLeft: 30}}>
            <TouchableOpacity style= {styles.WishlistButton}  activeOpacity={0.8} > 
                <Text style={styles.textWishlist}>Wishlist</Text>
            </TouchableOpacity>
        </View>
        
    </View>

</ImageBackground>
</View>
  )
}

const styles = StyleSheet.create({

    columnWrapper: {
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    projectText: {
  
        flexDirection: 'row',
        width: Dimensions.get('window').width
      },
    
      projectRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
    
    moreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30
      },
    
   moreIcon: {
         color: COlORS.white,
         marginRight: 10,
         marginTop: 20
    },
   
    containerGame: {
        opacity: 0.9,
        height: 130,
        width: 130,
        marginBottom: 5,
        borderRadius: 5,
        position: 'relative',
        marginTop: 30,
        marginLeft: 30
    },

    FlatList: {
        paddingLeft: 50,
    },

    listOfPlatforms: {
        marginTop: 10,
        marginLeft: 50,
        color: COlORS.white,
        alignSelf: 'flex-start',
        fontSize: 16
    },

    GameTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 50
    },

    gameReleased: {
        color: COlORS.light,
        marginLeft: 50,
        marginTop: 10,
        fontSize: 16
    },

    AddButton: {
        alignItems: "flex-start",
        backgroundColor: "#424FDA",
        width: 150,
        height: 50,
        paddingTop: 12,
        paddingLeft: 10,
        paddingBottom: 12,
        borderRadius: 25,
        flexDirection: 'row'
      },
  
    textAdd: {
        color: 'white',
        marginLeft: 15,
        fontSize: 16
      },

    WishlistButton: {
        alignItems: "center",
        backgroundColor: COlORS.dark_gray,
        width: 150,
        height: 50,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 25,
        marginRight: 10,
      },

      textWishlist: {
        color: 'white',
        fontSize: 16
      },

      platform: {
        color: COlORS.light,
        backgroundColor: '#1F1C25',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
        fontSize: 12,
        marginRight: 10,
        marginTop: 10
      }
})


export default GamePreview_Header