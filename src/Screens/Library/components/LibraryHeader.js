import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import COlORS from '../../../components/constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const LibraryHeader = ({navigation}) => {

return (
  
  <View style={{backgroundColor: '#0C0E26'}}>
      {/*Title header */}
      <View style={styles.topHeader}>
      <Text style = {styles.textLibrary}>My library</Text>
      
      <TouchableOpacity activeOpacity={0.7}>
      <Icon name ='options-outline' style = {{fontSize:35, marginTop: 35, marginLeft: 125, color: COlORS.grey}}/>
      </TouchableOpacity>
      
      </View>

  </View>


  );
}

const styles = StyleSheet.create({

  
  topHeader: { 
    flexDirection: 'row',
    marginVertical: 40,
    marginHorizontal: 35
  },

  textLibrary: {
    fontStyle: "bold",
    color: "white",
    fontSize: 30,
    marginTop: 30
  },

  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },

});

export default LibraryHeader;
