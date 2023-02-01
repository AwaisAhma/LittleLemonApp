
import React, { useState } from 'react';

import {
    Text,
    StyleSheet, 
    TextInput,
    ScrollView,
    Pressable,
  } from 'react-native';

import {Picker} from "@react-native-picker/picker";

const SignUp = ({navigation}) =>{
    
  const [Fullname,onChangefullname] = useState('')
  const [Username,onChangeusername] = useState('')
  const [Email,onChangeemail] = useState('')
  const [Password,onChangepassword] = useState('')

  const [selectedDepartment, setSelectedDepartment] = useState();
    
    return(

   <ScrollView>
                <Text style = {menustyle.header1}>
                   Sing Up
                </Text>
            <Text style = {menustyle.header}>
              Name:
            </Text>
            <TextInput 
            
             value = {Fullname}       // name of the tab 
            onChangeText = {onChangefullname} 
              style = {menustyle.input} //style of tab
              placeholder = 'Full Name'     
              maxLength = {40}   // char length
            // clearButtonMode = "always" work 
            // on ios for android download library or write code 
              /> 
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
              Email: 
            </Text>
            <TextInput 
             value = {Email}       // name of the tab 
             onChangeText = {onChangeemail} 
              style = {menustyle.input} //style of tab
              placeholder = 'Email'     
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
            // clearButtonMode = "always"  
            // work on ios for android download library or write code 
              /> 

                    <Picker
                      selectedValue={selectedDepartment}
                      style={{ height: 50, width: 170, marginLeft : 200, marginTop : 10 }}
                      onValueChange={(itemValue, itemIndex) =>{
                        setSelectedDepartment(itemValue)
                      }}>
                      <Picker.item label="AI" />
                      <Picker.item label="IT" />
                      <Picker.item label="Intern" />
                      <Picker.item label="Department" />
                    </Picker>

                  <Pressable
                  onPress={() =>
                    navigation.navigate('Counter1')} 
                >
                <Text style = { menustyle.text2}>SignUp </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    navigation.navigate('SignIn')} 
                >
                <Text style = { menustyle.text3}>Already have Account? SignIn</Text>
                
                </Pressable>
    
     </ScrollView>
             
    )
}
export default SignUp;


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
  
  text3 : {
    fontSize : 20,
    textAlign : 'center',
    marginTop : 10,
    marginBottom : 50,
    marginLeft :30,
    color : 'white',
},

  });
