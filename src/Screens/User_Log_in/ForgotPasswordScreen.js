import React, {useState, useEffect} from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  BackHandler,
  ImageBackground, 
  Dimensions,
  ScrollView,
  Keyboard,
  ToastAndroid,
  Alert
} from 'react-native';
import Input from '../../components/CustomInput/Input';
import Button from '../../components/CustomButton/Button'
import auth from '@react-native-firebase/auth';
import COLORS from '../../components/constants/colors'
import LoaderForgotPassword from '../../components/Loader/LoaderForgotPassword';


const ForgotPasswordScreen = ({navigation}) => {


    const [userInfo, setUserInfo] = React.useState({
      email: '',
    });

    const {email} = userInfo

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(false);
    

    //Validating information
    const validate = () => {
      Keyboard.dismiss();
      let valid = true;

      if(!userInfo.email){
        handleError("Please provide an email address!", 'email');
        valid = false;
      }

      if (valid) {
        resetButton();
      }
  };

    
    const handleOnChange = (value, fieldName) => {
      setUserInfo({...userInfo, [fieldName]: value})
    };

    const handleError = (errorMessage, input) => {
      setErrors((prevState)=> ({...prevState, [input]: errorMessage}));
    };
    

    const resetButton = () => {
      setLoading(true);
      setTimeout(()=>{
      setLoading(false);
      
        auth()
        .sendPasswordResetEmail(email.trim())
        .then(() => {
            Alert.alert(
              "Password Reset Sent!",
                "Check your spam/junk if you don't see it in your inbox.",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                )
        })
        .catch(error => {
         
          if (error.code === 'auth/invalid-email') {
            Alert.alert(
                "Invalid Email",
                "Please provide a valid email!",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
          }

          if (error.code === 'auth/user-not-found') {
            ToastAndroid.show("This account does not exist!", ToastAndroid.LONG);
          }

          console.log(error);
          
          
       });
      }, 3000)
  }
        function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }
        useEffect(() => {
            BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
            return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
            };
        }, []);

    return (
      
      <ImageBackground 
      source={require('../../components/Images/background_image.jpg')}
      style={{height:Dimensions.get('window').height}}>
        
          
          <LoaderForgotPassword visible ={loading} />
          <ScrollView style={styles.container}>
          <View style={styles.inner}> 
            <Text style ={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
            Forgot Password
            </Text>
        
            <Text style ={{fontSize: 18, marginVertical: 10}}>
            Enter an e-mail that is associated to your account and we will send you a password reset link.
            </Text>
            <View style={{marginVertical: 20}}>
               
               {/* Email Input*/}
               <Input 
               autoCapitalize="none"
               autoCorrect={false}
               placeholder="Enter your email address" 
               iconName={"email-outline"}  
               label={"Email"}
               error={errors.email}
               value = {email}
               onFocus={()=> {
                 handleError(null, "email");
               }}
               onChangeText = {(value)=>handleOnChange(value, "email" )}
               />
 
               <Button title="Reset Password" onPress={validate}/>
 
             </View>
             
             </View>
             
             </ScrollView>
            
       </ImageBackground>
      
     );
 };
 
 const styles = StyleSheet.create({
   
   RegisterText: {
     color: COLORS.red,
     fontSize: 14,
   },

   AlertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'

   },
 
   container: {
     flex: 1,
     paddingTop: 50, 
     paddingHorizontal: 30,
   },
   inner: {
     flex: 1,
     justifyContent: 'space-around',
   },
   header: {
     color: COLORS.white, 
     fontSize: 30, 
     fontWeight: 'bold'
   },
   textInput: {
     height: 40,
     borderColor: '#000000',
     borderBottomWidth: 1,
     marginBottom: 36,
   },
   btnContainer: {
     backgroundColor: 'white',
     marginTop: 12,
   },
 });
 
 export default ForgotPasswordScreen;
 