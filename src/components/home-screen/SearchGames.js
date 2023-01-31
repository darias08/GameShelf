import { View, Text, TextInput, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import COlORS from '../constants/colors'
import Feather from 'react-native-vector-icons/Feather'

const SearchGames = () => {

    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView style={{flexDirection: 'row', backgroundColor: COlORS.dark_gray, width: 355, marginLeft: 20, padding: 2 , marginTop: 30, borderRadius: 25}}>
            
            <Feather name='search' size={22} style={{marginLeft:15, marginTop: 10}} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'Search Games'}
                placeholderTextColor={COlORS.light}
                cursorColor={COlORS.blue}
                
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 4,
      marginLeft: 8,
      fontSize: 14,
      flex: 1,
    },
  });

export default SearchGames