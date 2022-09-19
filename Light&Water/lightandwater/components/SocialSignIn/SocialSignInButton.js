import React, {useState} from 'react';
import CustomButton from "../CustomButton";
import {View, Text, Image,Animated, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
const SocialSignInButton = () => {
    const SignInwithFaceBook = () => {
        console.warn("Signed In with Facebook"); 
       }
       const SignInApple = () => {
        console.warn("Signed in with Apple"); 
       }
       const SignInGoogle = () => {
        console.warn("Signed In Google"); 
       }
  return (
    <>
    <CustomButton text="Sign Up with Facebook" onPress={SignInwithFaceBook} bgColor='#E7EAF4'  fgColor='#4765A9'/>  

    <CustomButton text="Sign Up with Google" onPress={SignInGoogle} bgColor='#FAE9EA'  fgColor='#DD4D44'  />

    <CustomButton text="Sign Up with Apple" onPress={SignInApple}bgColor='#E3E3E3'  fgColor='363636'  />
    </>
  )
}
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:10,
         
    },
    link:{
        color:'#FDB075',
    },
    text:{
        color:'grey',
        marginVertical:10,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#051C60', 
        margin:50,
    }

});
export default SocialSignInButton