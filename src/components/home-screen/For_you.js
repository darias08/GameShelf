import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React, { useState, useEffect } from "react";
import ItemSeparator from "../constants/ItemSeparator";
import { IGDB_HTTP_REQUEST_GAMES } from '../services/GameServices';
import COlORS from '../constants/colors';
import { getImage } from '../services/GameServices';


const ForYouGames = () => {

    const [Games, setAllGames] = useState([]);

    const [Genres, setGenres] = useState(['Action', 'Adventure', 'Action', 'Adventure', 'Action', 'Adventure']);


    useEffect(() => {
      IGDB_HTTP_REQUEST_GAMES().then(response => {
            setAllGames(response.data) ;
        })
        .catch(err => {
            console.error(err);
        });
    }, []);


    return (
        

        <ScrollView style={{ width: "100%" }}>
        <View>
        <Text style= {styles.titleForYou}>For you</Text>

        <FlatList 
            data={Games}
            keyExtractor={(item) => item.id.toString()} //id.toString()
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:30}}
            decelerationRate={0.2}
            disableIntervalMomentum={ false } 
            pagingEnabled={true}
            snapToAlignment={"center"}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={65} />}
            renderItem={({ item }) => 

            <TouchableOpacity activeOpacity={0.7}>
                <ImageBackground style={styles.containerGames} source={{uri: getImage(item.cover.image_id)}} imageStyle={{borderRadius: 12}}/>
            </TouchableOpacity>

            }
        />
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    titleForYou: {
        fontSize:18,
        marginLeft: 50,
        marginBottom: 15,
        color: COlORS.white
      },

    containerGames: {
        backgroundColor: COlORS.light_gray,
        height: 410,
        width: 300,
        borderRadius: 12,
        elevation: 12,
      },
    
      containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#002fC2',
        justifyContent: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
        paddingLeft: 10,
        borderBottomLeftRadius: 11.5,
        borderBottomRightRadius: 11.5  //Here is the trick
      },
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
});

export default ForYouGames


