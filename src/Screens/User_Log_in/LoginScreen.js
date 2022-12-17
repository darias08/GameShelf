import React, {useState, useEffect} from 'react';
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
  ToastAndroid
} from 'react-native';
import Input from '../../components/CustomInput/Input';
import Button from '../../components/CustomButton/Button'
import LoaderLogin from '../../components/Loader/LoaderLogin';
import auth from '@react-native-firebase/auth';
import COLORS from '../../components/constants/colors'



const LoginScreen = ({navigation}) => {

    const [userInfo, setUserInfo] = React.useState({
      email: '',
      password: '',
    });

    const {email, password} = userInfo

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    //Validating information
    const validate = () => {
      Keyboard.dismiss();
      let valid = true;

      if(!userInfo.email){
        handleError("Please provide an email address!", 'email');
        valid = false;
      }


      if(!userInfo.password){
        handleError("Please provide a password", 'password');
        valid = false;
      }

      if (valid) {
        loginButton();
      }
  };

    
    const handleOnChange = (value, fieldName) => {
      setUserInfo({...userInfo, [fieldName]: value})
    };

    const handleError = (errorMessage, input) => {
      setErrors((prevState)=> ({...prevState, [input]: errorMessage}));
    };
    

    const loginButton = () => {
      setLoading(true);
      setTimeout(()=>{
      setLoading(false);
      
        auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
          ToastAndroid.show("You have successfully logged in!", ToastAndroid.LONG);
        })
        .catch(error => {
         
          if (error.code === 'auth/wrong-password') {
            ToastAndroid.show("Incorrect email or password!", ToastAndroid.LONG);
          }

          if (error.code === 'auth/user-not-found') {
            ToastAndroid.show("This account does not exist!", ToastAndroid.LONG);
          }

          console.log(error);
          
          
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
        
       
          <LoaderLogin visible ={loading}/>
          <ScrollView style={styles.container}>
          <View style={styles.inner}> 
            <Text style ={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
            Login
            </Text>
        
            <Text style ={{fontSize: 18, marginVertical: 10, color: COLORS.light}}>
            Enter your details to Login
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
              
              <Text style = {{color: COLORS.white, fontSize: 14}} onPress={()=>navigation.navigate('ForgotPasswordScreen')}>Forgot Password? </Text>

              <Button title="Login" onPress={validate}/>

              <Text
                style={{
                color:COLORS.white, 
                textAlign:'center',
                fontSize: 14,
                marginTop: 10,
                marginRight: 20  }}>
                Don't have an account? 
              <Text style = {styles.RegisterText} onPress={()=>navigation.navigate('RegisterScreen')}>        Register </Text>
              </Text>
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




export default LoginScreen;


