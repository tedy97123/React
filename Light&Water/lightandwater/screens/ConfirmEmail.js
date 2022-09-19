import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image,Animated, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import CustomInput from "../components/CustomInputs/CustomInput";
import CustomButton from "../components/CustomButton"
import SocialSignInButton from '../components/SocialSignIn/SocialSignInButton';
import {useForm} from 'react-hook-form';

const ConfirmEmail = (data) => {
    const {control,handleSubmit} =('')

    const onConfirmPressed= data => {
        console.log(data)
        console.warn("onConfirmPressed")
    }
    const onSignInPress
    = () => {
        console.warn("onSignInPress")
    }
    const onResendPressed= () => {
        console.warn("onResendPressed")
    }
    return(
    <ScrollView showsVerticalScrollIndicator={false}> 

    <View style={styles.root}>

      <Text style={styles.title}>  Confirm your Email </Text> 

      <CustomInput 
       placeholder="Enter your confirmation code here"
       name='code'
       control={control}
       rules={{
        required:'Confirmation code is required'
       }}
       />

      <CustomButton 
      text="Confirm" 
      onPress={handleSubmit(onConfirmPressed)} 
      type="PRIMARY"  

      />

      <CustomButton text="Resend code" onPress={onResendPressed} type="Secondary" gColor='#363636'  />

      <CustomButton text="Back to Sign in" onPress={() => navigation.navigate("Login", { data })} fgColor='#363636'  />
    </View>

    </ScrollView>
    )
}
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:20,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#051C60', 
        margin:40,
    },
    logo:{
        
        width: '80%',
        maxWidth: 300,
        maxHeight: 350,
        color:"rgba(255,255,255,0.5)",
    },
  
     
});
export default ConfirmEmail