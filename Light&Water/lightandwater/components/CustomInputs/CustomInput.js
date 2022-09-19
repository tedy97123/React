import React from 'react'
import {View, Text, Image, StyleSheet, TextInput, } from 'react-native';
import { Controller} from'react-hook-form';



const CustomInput = ({ rules={}, control, name, placeholder, secureTextEntry}) => 
{
  return (
     
      <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field:{value, onChange, onBlur}, fieldState:{error}}) => (
    <>
      <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>  
          <TextInput 
            value={value} 
            onChangeText={onChange} 
            style={styles.input}
            onBlur={onBlur}  
            placeholder={placeholder}
            secureTextEntry={secureTextEntry} 
            />
      </View>
      {error && (<Text style={{color:'red', fontFamily:'tahoma', fontWeight:'bold', fontSizealignSelf:'strech'}}> {error.message || 'Error'}</Text>)}
    </>
        )}
      />  
     
  )
}

const styles = StyleSheet.create({
  container:{
        backgroundColor:'transparent',
        width:'100%',
        borderRadius:15,
        borderWidth:0,
        padding:10,
        marginVertical:10,
        marginHorizontal:50,
         
         
         
        height:'56px',
         
    },
    input:{},

     
})
export default CustomInput