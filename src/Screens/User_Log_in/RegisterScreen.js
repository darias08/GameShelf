import React, {useState} from 'react';
import { useBackHandler } from '@react-native-community/hooks';
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
  Alert,
  KeyboardAvoidingView
 

} from 'react-native';
import Input from '../../components/CustomInput/Input';
import Button from '../../components/CustomButton/Button'
import LoaderRegister from '../../components/Loader/LoaderRegister';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import COLORS from '../../components/constants/colors'

const RegisterScreen = ({navigation}) => {

    const [userInfo, setUserInfo] = React.useState({
      username: '',
      password: '',
      email: '',
    });

    const {username, email, password} = userInfo

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    //Validating information
    const validate = () => {
      Keyboard.dismiss();
      let valid = true;

      if(!userInfo.email){
        handleError("Please provide an email address!", 'email');
        valid = false;
      }else if (!userInfo.email.match(/\S+@\S+\.\S+/)) {
        handleError('Please provide a valid email!', 'email');
        valid = false;
      }

      if(!userInfo.username) {
        handleError("Please provide a username!", 'username');
        valid = false;
      }

      if(!userInfo.password){
        handleError("Please provide a password", 'password');
        valid = false;
      }else if (userInfo.password.length < 6) {
        handleError('Password must be greater than 6', 'password');
        valid = false;
      }

      if (valid) {
        registerButton();
      }
  };

    
    const handleOnChange = (value, fieldName) => {
      setUserInfo({...userInfo, [fieldName]: value})
    };

    const handleError = (errorMessage, input) => {
      setErrors((prevState)=> ({...prevState, [input]: errorMessage}));
    };
    

    const registerButton = () => {
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);

        auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(() => {
          ToastAndroid.show("Account created!", ToastAndroid.LONG);
        })
        .catch(error => {
          if (error.code == 'auth/email-already-in-use') {
            ToastAndroid.show("This account already exist!", ToastAndroid.LONG);
          }

          if (error.code === 'auth/invalid-email') {
            ToastAndroid.show("This email provided is invalid!", ToastAndroid.LONG);
          }

          console.log(error)
                 

       });
      }, 3000)
  }


    useBackHandler(backActionHandler);  

    function backActionHandler() {
      BackHandler.exitApp()
      return true;
    }

    return (
      
      <ImageBackground 
      source={require('../../components/Images/background_image.jpg')}
      style={{height:Dimensions.get('window').height}}>
        
       
          <LoaderRegister visible ={loading}/>
          <KeyboardAvoidingView style={styles.container}> 
            <ScrollView>
            
            <Text style ={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
            Register
            </Text>       
            <Text style ={{fontSize: 18, marginVertical: 10, color: COLORS.light}}>
            Enter your details to register
            </Text>

            <View style={{marginVertical: 10}}>
               {/* Username Input*/}
              <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter a username"
              iconName={"account"} 
              label={"Username"}
              error={errors.username}
              value = {username}
              onFocus={()=> {
                handleError(null, "username");
              }}
              onChangeText = {(value)=>handleOnChange(value, "username" )}
              />
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
              {/* Passsword Input*/}
              <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password" 
              iconName={"lock-outline"}  
              label={"Password"}
              error={errors.password}
              value = {password}
              onFocus={()=> {
                handleError(null, "password");
              }}
              onChangeText = {(value)=>handleOnChange(value, "password" )}
              password
              />

              <Button title="Register" onPress={validate}/>

              <Text
                style={{
                color:COLORS.white, 
                textAlign:'center',
                fontSize: 14,
                marginTop: 10,
                marginRight: 20  }}>
                Already have an account? 
              <Text style = {styles.LoginText} onPress={()=>navigation.navigate('LoginScreen')}>        Login </Text>
              </Text>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>           
       
      
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
  
  LoginText: {
    color: COLORS.red,
    fontSize: 14
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




export default RegisterScreen;


/*
<ScrollView contentContainerStyle={{paddingTop: 50, paddingHorizontal: 30,}}>
        
            <Text style ={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
            Register
            </Text>
        
            <Text style ={{fontSize: 18, marginVertical: 10}}>
            Enter your details to register
            </Text>
            <View style={{marginVertical: 20}}>
             
               <Input
               placeholder="Enter a username"
               iconName={"account"} 
               label={"Username"}
               error={errors.username}
               onFocus={()=> {
                 handleError(null, "username");
               }}
               onChangeText = {(text)=>handleOnChange(text, "username" )}
               />
              
               <Input 
               placeholder="Enter your email address" 
               iconName={"email-outline"}  
               label={"Email"}
               error={errors.email}
               onFocus={()=> {
                 handleError(null, "email");
               }}
               onChangeText = {(text)=>handleOnChange(text, "email" )}
               />
              
               <Input
               placeholder="Enter your password" 
               iconName={"lock-outline"}  
               label={"Password"}
               error={errors.password}
               onFocus={()=> {
                 handleError(null, "password");
               }}
               onChangeText = {(text)=>handleOnChange(text, "password" )}
               password
               />
 
               <Button title="Register" onPress={validate}/>
 
               <Text 
                 onPress={()=>navigation.navigate('LoginScreen')}
                 style={{
                 color:Colors.white, 
                 textAlign:'center', 
                 fontSize: 16, 
                 fontWeight:'bold'}}>
               Already have an account?   Login</Text>
             </View>
             
             </ScrollView>
*/