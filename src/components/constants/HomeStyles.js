import { StyleSheet } from 'react-native'
import COlORS from './colors'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0E26',
      },
      topHeader: { 
        flexDirection: 'row',
      },
    
      textWelcome: {
          color: COlORS.light,
          fontSize: 18,
          marginTop: 30,
          marginLeft: 30
        },
    
      userProfileIcon: {
          width: 50,
          height: 50,
          marginLeft: 140,
          marginTop: 30
      },
    
      titleForYou: {
        fontSize:18,
        marginLeft: 50,
        marginBottom: 15,
        color: COlORS.white
      },
    
      CategoryTitles: {
          fontSize:16,
          marginLeft: 50,
          marginBottom: 15,
          color: COlORS.white,
          marginTop: 50
      },
    
      containerMP: {
        flex: 1,
        justifyContent: 'flex-end',
      },
    
        imageSize: {
            height: 410,
            width: 300,
            borderRadius: 12,
            elevation: 12,
        },

        backgroundContainer: {
          height: 410,
          width: 300,
          backgroundColor: COlORS.light_gray
        },

        imageIcon: {
          height: 50,
          width: 50,
        },
    
    
        gameTitle: {
            fontSize:20, 
            fontWeight: 'bold', 
            color: COlORS.white
        },
    
        footerMP: {
          backgroundColor: 'black',
          padding: 10,
          backgroundColor: 'rgba(15, 10, 10, 0.9)'
        },


        containerGames: {
          backgroundColor: COlORS.light_gray,
          height: 410,
          width: 300,
          borderRadius: 12,
          elevation: 12,
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
    
        imageContainer: {
            backgroundColor: COlORS.light_gray,
            height: 410,
            width: 300,
            borderRadius: 12,
            elevation: 12,
        },
    
        textStyle: {
          color: '#fff',
          fontSize: 18,
        },
    
})
