import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import COlORS from '../../components/constants/colors';
import Playstation from '../../components/Import-profile-games/Playstation';
import { getUserTitles, makeUniversalSearch, exchangeCodeForAccessToken, exchangeNpssoForCode, getProfileFromUserName, getProfileFromAccountId  } from 'psn-api';


const PlaystationScreen = ({navigation}) => {

  const [userInfo, setUserInfo] = React.useState({
    playstationID: '',
  });

  const {playstationID} = userInfo

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

//Validating informationn
const validate = () => { 

  Keyboard.dismiss();
  let valid = true;

  if(!userInfo.playstationID) {
    handleError("Please enter a playstation ID!", 'playstationID');
    valid = false;
  }

  if (valid) {
    connectPSProfile();
  }
}

const handleOnChange = (value, fieldName) => {
  setUserInfo({...userInfo, [fieldName]: value})
};

const handleError = (errorMessage, input) => {
  setErrors((prevState)=> ({...prevState, [input]: errorMessage}));
};
   
  return (
    <View style = {styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={25} color="white" style={{marginTop: 40, position: 'relative'}}/>
        </TouchableOpacity>  
      </View>
    
      
      <Ionicons name="logo-playstation" style = {{fontSize:30, color: COlORS.white, marginTop: 50}}/>
     

      <Text style = {{color: COlORS.white, fontSize: 25, marginTop: 25}}>Connect your PlayStation profile</Text>
      <Text style = {{color: COlORS.grey, marginTop: 5, lineHeight: 20, fontSize: 14, marginTop: 10, marginBottom: 30}}>We do not ask for any passwords, we just connect your profile. You can skip this step and add games manually.</Text>
    
      <Playstation 
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Playstation Network ID"
              error={errors.playstationID}
              value = {playstationID}
              style = {{paddingTop: 10, width: "100%", color: 'white'}}
              onFocus={()=> {
                handleError(null, "playstationID");
              }}
              onChangeText = {(value)=>handleOnChange(value, "playstationID" )}
              />

      <TouchableOpacity activeOpacity={0.7} style={styles.ConnectBtn} onPress={validate}>
            <Text style={{color: COlORS.white, paddingLeft: 30, paddingRight: 30}}>Connect</Text>
      </TouchableOpacity>
      
    </View>
  )
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
       
      paddingHorizontal: 30,
      backgroundColor: '#0C0E26',
      paddingLeft: 50,
    },
    inner: {
      flex: 1,
      justifyContent: 'space-around',
    },
    header: {
      color: COlORS.white, 
      fontSize: 30, 
      fontWeight: 'bold'
    },
    textInput: {
      height: 40,
      borderColor: '#17191A',
      borderBottomWidth: 1,
      marginBottom: 36,
    },


  playstationIcon: {
        fontSize: 25,
        color: COlORS.grey,
        marginLeft: 20,
        marginTop: 10,
    },

    ConnectBtn: {
        backgroundColor: COlORS.lightBlue,
        borderRadius: 30,
        paddingLeft: 90,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 90,
        alignItems: 'center',
        justifyContent: 'center',
      },

});


// async function connectPSProfile() {


  
// }

/*
 const targetAccountId = 
    allAccountsSearchResults.domainResponses[0].results[0].socialMetadata
    .accountId;

  const titles = await getUserTitles(authorization, targetAccountId)
*/

//   const myNpsso = "aLUE8zTBtpNgtFQ7m8V9R2iY3kngVAilb4S4BatxO0t9PK2b8dZ1vS9DlylKMEjl"
//   const accessCode = await exchangeNpssoForCode(myNpsso);
//   const authorization = await exchangeCodeForAccessToken(accessCode); 

//   const allAccountsSearchResults = await makeUniversalSearch (
//     authorization, 
//     "me",
//     "SocialAllAccounts"
//   );

//   console.log(allAccountsSearchResults);

//https://us-prof.np.community.playstation.net/userProfile/v1/users/Shadow_Luigii/profile2?fields=accountId


export default PlaystationScreen