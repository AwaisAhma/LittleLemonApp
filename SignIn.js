
import { useState } from 'react';
import {
    Text,
    StyleSheet, 
    TextInput,
    ScrollView,
    Pressable
  } from 'react-native';



const SignIn = ({navigation}) =>{
    
  const [Name,onChangename] = useState('')
  const [Email,onChangeemail] = useState('')

    
    return(

   <ScrollView>
                <Text style = {menustyle.header1}>
                   Sing In
                </Text>
            
               <Text style = {menustyle.header}>
              User Name:
            </Text>
            <TextInput 
             value = {Name}       // name of the tab 
            onChangeText = {onChangename} 
              style = {menustyle.input} //style of tab
              placeholder = ' Name '     
              maxLength = {40}   // char length
              /> 
               <Text style = {menustyle.header}>
              Password:
            </Text>
            <TextInput 
            secureTextEntry = {true}  // hide the text written in tab
             value = {Email}       // name of the tab 
            onChangeText = {onChangeemail} 
              style = {menustyle.input} //style of tab
              placeholder = 'Email'     
              maxLength = {40}   // char length
              /> 


                <Pressable
                  onPress={() =>
                    navigation.navigate('Counter1')} 
                >
                <Text style = { menustyle.text2}>SignIn </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    navigation.navigate('SignUp')} 
                >
                <Text style = { menustyle.text2}>Doesn't have Account? SignUp </Text>
                </Pressable>
     </ScrollView>
             
    )
}

 const menustyle = StyleSheet.create({
    input : {
      height : 60,
      margin : 10,
      borderWidth : 1,
      padding : 10,
      fontSize : 20,
      marginLeft : 80,
      marginTop: 10,
      width :250,
      alignContent:'center',
      backgroundColor : 'black' 
  },
    
    header: {
      fontSize: 25,
      marginTop : 15,
      marginLeft : 60,
      flexWrap: 'wrap',
      color: 'white',
  },

    header1: {
      fontSize: 30,
      marginTop : 20,
      textAlign : 'center',
      flexWrap: 'wrap',
      color: 'white',
  },

    text2 : {
      fontSize : 20,
      textAlign : 'center',
      marginTop : 10,
      marginLeft :30,
      color : 'white',
  },

  });

export default SignIn;