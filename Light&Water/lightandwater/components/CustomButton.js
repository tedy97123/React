import React from 'react'
import {View,Text,StyleSheet , Pressable,} from 'react-native'; // Pressable is a components that hadles on events that happen when a button or components is pressed.s
import * as Font from 'expo-font'
// On press is passed through props becuase we  want to use the press elseware for differnet senarios. Also setting default type for Primary buttom classifcation.
const CustomButton = ({onPress, text, type = "primary",bgColor, fgColor}) => { 
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container, 
    styles[`container_${type}`],
    bgColor ? {backgroundColor:bgColor} : {} 
  ]}
    >  
        <Text 
           style={[styles.text,
           styles[`text_${type}`],
           fgColor ? { color: fgColor} : {} 
           ]}
           >
            {text}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        
        width:'100%',
        
        padding:20,
        marginVertical:6,
 
        alignItems:'center',
        borderRadius:25,
    },

    container_PRIMARY: {
      backgroundColor:'#ec8c50',
      fontFamily:'Tahoma',
      
    },
    container_Secondary: {
      borderColor:'#ec8c50',
      borderWidth:2,
    },
    container_TERTIARY: {
      backgroundColor:'#ec8c50',
      opacity:0.2, 
      fontFamily:'Tahoma',
        
    },
    container_TERTIARY1: {
      backgroundColor:'#C0C0C0',
      opacity:0.2,
      fontFamily:'Tahoma',
    },
    container_TERTIARY: {
      backgroundColor:'#C0C0C0',
      opacity:0.2,
      fontFamily:'Tahoma ',
    },

    text:{
        fontWeight:'bold',
        color:'white',
        fontFamily:'Tahoma',
    },
    text_Secondary:{
      color:'#ec8c50',
    },
    container_text: {
      color:'grey',
    },
});
export default CustomButton;