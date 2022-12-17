import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React, { useState, useEffect } from "react";
import ItemSeparator from "../constants/ItemSeparator";
import COlORS from '../constants/colors';


const ListOfPlayers = (props) => {

    return (
        
        <ScrollView style={{ width: "100%" }}>
        <View>
        <Text style= {styles.titlePopularNow}>Players</Text>

        <FlatList 
            data={props.data}
            keyExtractor={(item) => item.id.toString()} //id.toString()
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:30 }}
            ItemSeparatorComponent={() => <ItemSeparator width={20} />}
            ListHeaderComponent={() => <ItemSeparator width={20} />}
            ListFooterComponent={() => <ItemSeparator width={65} />}
            renderItem={({ item }) => 

            <TouchableOpacity activeOpacity={0.7}>
               <Image style = {styles.userProfileIcon} source={require('../Images/default_profile.png')} />
            </TouchableOpacity>

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

    userProfileIcon: {
        width: 45,
        height: 45,
        borderRadius:50
    },
    
      containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
});

export default ListOfPlayers


/*

fields game.cover.height, game.cover.width, game.cover.url, game.cover.image_id, game.name, category,checksum,created_at,date,game,human,m,platform,region,updated_at,y;

where game.platforms = 130 & date < 1669129354; sort date desc; limit 10;



fields game.name, game.first_release_date, game.cover.game, category,checksum,created_at,date,game,human,m,platform,region,updated_at,y; 
where game.themes != (42) & game.status = n & game.category != (1,2,5,6,7) & game.platforms = (130, 167) & game.first_release_date > 1669000400 & game.first_release_date < 1669111400;
limit 10;
sort game.first_release_date desc;

*/