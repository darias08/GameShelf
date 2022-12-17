import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
  
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COlORS from '../../components/constants/colors';




export default function MainHomeScreen( {navigation, registerObj}) {
    

    return (

      
      <ScrollView style = {{flex: 1}}
      
      showsVerticalScrollIndicator={false}>
      
      <ImageBackground 
      source={require('../../components/Images/background_image.jpg')}
      
      style={{height:Dimensions.get('window').height}}>

      <View style={styles.brandView}>
      <Text> <Icon name='google-controller' style={{color: '#424FDA', fontSize: 100}}/></Text>
      <Text style= {styles.textGameShelf}>GameShelf</Text>
      <Text style={{marginHorizontal: 60, fontSize: 15, textAlign: 'center', color: COlORS.light}} >A place for gamers to store their collection of games!</Text>
      </View>
      
      <View style = {styles.Buttons}>
        <TouchableOpacity style= {styles.registerBtn}  activeOpacity={0.7} onPress={() => navigation.navigate("RegisterScreen")
        }> 
         <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.loginBtn}  activeOpacity={0.7}  onPress={() =>navigation.navigate("LoginScreen")} > 
         <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
        
      </ImageBackground>
        <View style={styles.line}></View>
        

      </ScrollView>
      


    );
}

const styles = StyleSheet.create({

    Buttons: {
     marginLeft: 45,
     marginBottom: 30,
    },

    textGameShelf: {
      fontWeight: 'bold',
      color: "white",
      fontSize: 35,
    },

    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },

    overlayContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.2)'
    },
  
    registerBtn: {
      
      alignItems: "center",
      backgroundColor: "#1E1EA8",
      marginStart: 5,
      width: 310,
      padding: 15,
      borderRadius: 10,
      elevation: 8
  
    },
  
    loginBtn: {
      alignItems: "center",
      backgroundColor: "#1B1B1B",
      marginStart: 5,
      width: 310,
      padding: 15,
      borderRadius: 10,
      elevation: 8,
      marginTop: 15,
  
    },

    textButton: {
      fontWeight: 'bold',
      color: 'white'
    },

    });