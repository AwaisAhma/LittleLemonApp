
import { useState } from 'react';
import {
    Text,
    StyleSheet, 
    TextInput,
    ScrollView,
    Button,
    Pressable
  } from 'react-native';



const SignIn = ({navigation}) =>{
    
  const [Username,onChangeusername] = useState('')
  const [Password,onChangepassword] = useState('')

    
    return(

   <ScrollView>
                <Text style = {menustyle.header1}>
                   Sing In
                </Text>
            
               <Text style = {menustyle.header}>
              User Name:
            </Text>
            <TextInput 
             value = {Username}       // name of the tab 
            onChangeText = {onChangeusername} 
              style = {menustyle.input} //style of tab
              placeholder = 'User Name'     
              maxLength = {40}   // char length
            // clearButtonMode = "always" work 
            // on ios for android download library or write code 
              /> 
               <Text style = {menustyle.header}>
              Password:
            </Text>
            <TextInput 
            secureTextEntry = {true}  // hide the text written in tab
             value = {Password}       // name of the tab 
            onChangeText = {onChangepassword} 
              style = {menustyle.input} //style of tab
              placeholder = 'Password'     
              maxLength = {40}   // char length
            // clearButtonMode = "always" work 
            // on ios for android download library or write code 
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
export default SignIn;


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
      borderColor : 'EDEFEE',
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
