import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image,Animated, StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import CustomInput from "../components/CustomInputs/CustomInput";
import CustomButton from "../components/CustomButton"
import SocialSignInButton from '../components/SocialSignIn/SocialSignInButton';
import {useForm} from 'react-hook-form'


const NewPasswordScreen = (data) => {
    const {control,handleSubmit} = useForm();
   
    const navigation = useNavigation();
    const {height}= useWindowDimensions();

    const onConfirmPressed= () => {
        console.warn("onConfirmPressed")
    }
    const onSendPress
    = () => {
        console.warn("onSendPress")
    }
    const onResendPressed= () => {
        console.warn("onResendPressed")
    }
    const onSubmitPressed = data => {
        console.warn(data)
        navigation.navigate('Home')
        console.warn("onSubmitPressed")
    }
    return(
    <ScrollView showsVerticalScrollIndicator={false}> 

    <View style={styles.root}>

      <Text style={styles.title}>  Reset your Password. </Text> 

      <CustomInput 
       placeholder="Code"
       value={code} 
       setValue={setCode}
       />
       <CustomInput 
       placeholder="Enter your new Password"
       value={NewPassword} 
       setValue={setNewPassword}
       />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} type="PRIMARY"  />

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
export default NewPasswordScreen