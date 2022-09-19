import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text,Animated, StyleSheet,ScrollView} from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import CustomInput from "../components/CustomInputs/CustomInput";
import CustomButton from "../components/CustomButton"
import { CircleButton, RectButton, SubInfo, DetailsDesc,DetailsBid, FocusedStatusBar,  } from "../components";
import SocialSignInButton from '../components/SocialSignIn/SocialSignInButton';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Signup = ( data  ) => {
 const {control,handleSubmit, watch} = useForm();
  const pwd = watch('password')




    const navigation = useNavigation();
  
    
    const OnRegisteredPress = () => {
    navigation.navigate('Login');
      console.warn("Sign in"); 
     }
     const onForgotPasswordPressed = () => {
      console.warn("Forgot Password"); 
     }

     const SignInGoogle = () => {
      console.warn("Signed In Google"); 
     }

     const SignInwithFaceBook = () => {
      console.warn("Signed In with Facebook"); 
     }
     const OnSignUpPress  = () => {
       handlePress(Signup); 
     }
     const SignInApple = () => {
      console.warn("Signed in with Apple"); 
     }
     const onTermsofUsePressed = () => {
        console.warn("Terms Pressed"); 
       }
       const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed"); 
       }

  return (

  <View style={styles.root}>
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.navigate("Login", { data })}
      left={15}
      
    />
     <Text style={styles.title}>  Create an account </Text>

     <Text style={styles.text1}> Sign up to join the Light & Water community </Text>
    
    <CustomInput 
     name='username'
     control={control}
     placeholder="Username"
     rules={{required: 'Username is required', minLength:{ value:5, message:'Username should be at least 5 charcters long'},
     maxLength:{value:24, message:'Username should be max of 24 charters long'}}}
     />
     <CustomInput 
      name='email'
     placeholder="Email"
     control={control}
     rules={{pattern: {value:EMAIL_REGEX, message:'Email is invalid'}}}
     />
    <CustomInput 
    name='Password'
    control={control}
    rules={{required: 'Password is required', minLength:{ value:8, message:'Password should be at least 8 charcters long'},
    maxLength:{value:24, message:'Password should be max of 24 charters long'}}}
    placeholder="Password" 
    secureTextEntry
    />
    <CustomInput 
    name='Repeat Password'
    control={control}
    placeholder="Repeat Password" 
    rules={{
      validate: value  => value === 5 || 'Passwords do not match' ,
    }}
    secureTextEntry
    />
    
    <CustomButton text="Register" onPress={handleSubmit(OnRegisteredPress)} type="PRIMARY"  />
    <Text styles={styles.text}> 
        By registering, you confirm that you accept our {''} <Text style={styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and {''}<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
    </Text>
    <SocialSignInButton/>
    <CustomButton 
    text="Have an account? Sign In"
    onPress={() => navigation.navigate("Login", { data })}
    fgColor='#363636'
    />
  </View>
  
  );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:20,
         
        
    },
    link:{
        color:'#FDB075',
    },
    text:{
        color:'grey',
        marginVertical:10,
    },
    text1:{
        color:'grey',
        marginVertical:20,
        fontFamily:'Freight Sans',
        fontSize:15,
        fontWeight:'bold',
        color:'grey',
    },
    title:{
        fontSize: 25,
        fontFamily:'Freight Sans',
        fontWeight: 'bold',
        color:'#051C60', 
        margin:40,
    }

});

export default Signup;