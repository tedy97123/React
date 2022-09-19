import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image,Animated,ImageBackground, StyleSheet, useWindowDimensions,ScrollView,TextInput } from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import CustomInput from "../components/CustomInputs/CustomInput";
import CustomButton from "../components/CustomButton"
import SocialSignInButton from '../components/SocialSignIn/SocialSignInButton';
import {useForm, Controller} from'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import Particles, { ISourceOptions } from "react-tsparticles";
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';

const Login = ( data  ) => {
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    const [onSignInPress, setOnSignInPress] = useState();
    const navigation = useNavigation();
  
    const {control, handleSubmit, formState:{errors},}= useForm();
    console.log(errors);

     
    const OnSignInPress = data => {
      //validate
      console.log(data); 
       navigation.navigate('Home'); 
      /* console.warn("Sign in");  */
     }

     const onForgotPasswordPressed = () => {
      navigation.navigate('ForgotPassword')

      console.warn("Forgot Password"); 
     }

     const SignInGoogle = () => {
      navigation.navigate('Home');
      console.warn("Signed In Google"); 
     }
  

     const SignInwithFaceBook = () => {
      navigation.navigate('Home');
      console.warn("Signed In with Facebook"); 
     }
     const OnSignUpPress  = () => {
       navigation.navigate("Home"); 
       navigation.navigate('Signup');
     }
     
     const SignInApple = () => {
      navigation.navigate('Home');
      console.warn("Signed in with Apple"); 
     }

     const {height}= useWindowDimensions();




  return (
<ScrollView showsVerticalScrollIndicator={true}> 
<LinearGradient  colors={['#eef2f3']} > 
    <ImageBackground source={assets.wave} style={[styles.logo,  {height: height * 0.6}]} > 
    <Image source={assets.logo3} 
    style={[styles.logo, {height: height * 0.6}]} 
    resuzeMode="contain" 
    />
    </ImageBackground>
    <CustomInput 
    styles={styles.field}
     name="username"
     placeholder="Username"
     control={control}
     rules={{required: 'Username is required'}}
     />
    <CustomInput 
    name="password"
    placeholder="Password" 
    rules={{required: 'Password is required', minLength: {value:3, message:'Password should be a minimum of 3 charcters.'}}}
    control={control} 
    secureTextEntry
    />  
    
    <CustomButton text="Sign In" onPress={handleSubmit( OnSignInPress )}  type="PRIMARY"  /> 

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 3,padding:1.8,backgroundColor: 'bisque'}} />
    <View>
      <Text style={{width: 48, textAlign: 'center' , fontFamily:'Tahoma', marginVertical:12}}>OR</Text>
    </View>
      <View style={{flex: 1, height: 3.3, padding:1.8,backgroundColor: 'bisque'}} /></View>

    <CustomButton text="Sign In with Facebook" onPress={SignInwithFaceBook} bgColor='#E7EAF4'  fgColor='#4765A9'/>

    <CustomButton text="Sign In Google" onPress={SignInGoogle} bgColor='#FAE9EA'  fgColor='#DD4D44'  />

    <CustomButton text="Sign In Apple" onPress={SignInApple}bgColor='#E3E3E3'  fgColor='#363636'  />
     
    <CustomButton text="Forgot Password?"  HitRect  onPress={onForgotPasswordPressed}   fgColor='#363636'/>

    <CustomButton text="Don't have an Account? Create One" onPress={OnSignUpPress}   fgColor='#363636'   />
  </LinearGradient>
  
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:20,
        
         
        
    },
    root1:{
      alignItems: 'center',
      padding:20,

        
  },
    logo:{
        width: '100%',
        maxWidth: 400,
        maxHeight: 350,
        opacity:0.9,
         
        shadowColor: '#F0F8FF',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: .6,  
    },
     
  
     
});

export default Login;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 