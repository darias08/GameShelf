import React from 'react';
import { 
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import COlORS from '../../components/constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth'; 


const ProfileScreen = ({navigation}) => {

  function SignOutUser() {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

return (
  <View style ={{flex: 1, backgroundColor: '#0C0E26'}}>

    {/*********Back Button***********/}
    <View style = {{width: 70}}>
    <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="white" style={{marginLeft: 40, marginTop: 20,}}/>
    </TouchableOpacity>  
    </View>

    {/*Title header */}
    <View style={styles.topHeader}>
      <Image style = {styles.userProfileIcon} source={require('../../components/Images/default_profile.png')} />
          <View style = {{ marginTop: 10, marginLeft: 25}}>
          <Text style = {styles.textPlayerName}>Player Name</Text>
          <TouchableOpacity activeOpacity={0.7} style = {{marginTop:5}}>
          <Text style ={{color: COlORS.grey}}>View profile</Text>
          </TouchableOpacity> 
          </View>
    </View>

    {/********Import Library************/}
    <Text style = {styles.titleImportLibrary}>Import library</Text>

       {/* Playstation */}
      <View style={styles.projectRow}>
          <View style={styles.projectText}>
              <Ionicons name= "logo-playstation" style = {styles.ConsoleIcons}/>
              <Text style={styles.consoleText}>Playstation Network</Text>
            </View>
          <View style={styles.moreContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Playstation')}>
            <Icon name="chevron-right" size={15} style={styles.moreIcon} />
          </TouchableOpacity>
          </View>          
      </View>
  

      {/* Xbox */}
      <View style={styles.projectRow}>
          <View style={styles.projectText}>
              <Ionicons name= "logo-xbox" style = {styles.ConsoleIcons}/>
              <Text style={styles.consoleText}>Xbox Live</Text>
            </View>
          <View style={styles.moreContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="chevron-right" size={15} style={styles.moreIcon} />
          </TouchableOpacity>
          </View>          
      </View>
    

      {/* Steam */}
      <View style={styles.Steam}>
          <View style={styles.projectText}>
              <MaterialCommunityIcons name= "steam" style = {styles.ConsoleIcons}/>
              <Text style={styles.consoleText}>Steam</Text>
            </View>
          <View style={styles.moreContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="chevron-right" size={15} style={styles.moreIcon} />
          </TouchableOpacity>
          </View>          
      </View>
    
    {/********System************/}
    <Text style = {styles.title}>System</Text>

    <View style={styles.projectRow}>
          <View style={styles.projectText}>        
            <Text style = {styles.profileText}>Push Notification </Text>
            </View>
          <View style={styles.moreContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name='chevron-right' size={15} style={styles.moreIcon} />
          </TouchableOpacity>
          </View>          
    </View>


    <View style={styles.projectRow}>
          <View style={styles.projectText}>        
            <Text style = {styles.profileText}>Region</Text>
            </View>
          <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="chevron-right" size={15} style={styles.moreIcon} />
            </TouchableOpacity>
          </View>          
    </View>


    {/********Feedback************/}
    <Text style = {styles.title}>Feedback</Text>

    <View style={styles.projectRow}>
          <View style={styles.projectText}>        
            <Text style = {styles.profileText}>Send Feedback</Text>
            </View>
          <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="chevron-right" size={15} style={styles.moreIcon} />
            </TouchableOpacity>
          </View>          
    </View>

    <View style={styles.projectRow}>
          <View style={styles.projectText}>        
            <Text style = {styles.profileText}>Review on App Store</Text>
            </View>
          <View style={styles.moreContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="chevron-right" size={15} style={styles.moreIcon} />
            </TouchableOpacity>
          </View>          
    </View>
      
  </View>
  );
}

const styles = StyleSheet.create({

  topHeader: { 
    flexDirection: 'row',
    marginVertical: 40,
    marginHorizontal: 50
  },

  textPlayerName: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },

  profileText: {
    marginLeft: 35,
    color: COlORS.white,
    fontSize: 16,
    marginRight: 30
  },

  userProfileIcon: {
    width: 70,
    height: 70,
  },

  titleImportLibrary: {
    fontSize:16,
    marginLeft: 50,
    marginBottom: 10,
    color: COlORS.grey
  },

  title: {
    fontSize:16,
    marginLeft: 50,
    marginTop: 10,
    marginBottom: 5,
    color: COlORS.grey
  },

  projectText: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50
  },

  projectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },

  Steam: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    marginBottom: 10
  },

   itemName: {
     fontSize: 16,
     color: '#4A90E2',
   },

   consoleText: {
    marginLeft: 10,
    color: COlORS.white,
    fontSize: 16,
  },

   moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30
  },

   moreIcon: {
     color: COlORS.grey
   },

   ConsoleIcons: {
    fontSize: 25,
    color: COlORS.grey,
    marginLeft: 35,
  },

  
  
});

export default ProfileScreen;
