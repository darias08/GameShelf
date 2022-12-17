import { View, Text, StyleSheet} from 'react-native'
import COlORS from '../constants/colors';

const ForYouGamesNoAlgorithm = () => {

    return (
    <View>
        <Text style= {styles.titleForYou}>For you</Text>
          <View style = {styles.textBackground}>
            <Text style = {styles.textBox}>
             We see that you don't have any games in your library. Please add games to your favorites and we will create an algorithm that is tailored to your liking.
            </Text>
          </View>
    </View>
  )
}



const styles = StyleSheet.create({
    titleForYou: {
        fontSize:18,
        marginLeft: 50,
        marginBottom: 15,
        color: COlORS.white
      },

      textBackground: {
        backgroundColor: COlORS.dark_gray,
        marginLeft:50,
        marginTop: 10,
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        height: 135,
        width: 335,
        borderRadius: 15,
        elevation: 8,
        
      },
     
      textBox: {
        color: COlORS.grey,
        fontSize: 15,
        lineHeight: 23,

      },
});

export default ForYouGamesNoAlgorithm
