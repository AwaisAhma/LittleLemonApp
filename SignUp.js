
import React, { useState } from 'react';

import {
    Text,
    StyleSheet, 
    TextInput,
    ScrollView,
    Pressable,
    Button,
    Image,
    View
  } from 'react-native';

import ImagePicker from 'react-native-image-picker';

// Define the options for the ImagePicker
const options = {
  title: 'Select Avatar',  // The title of the ImagePicker
  storageOptions: {
    skipBackup: true,  // Do not backup the image to iCloud or Google Drive
    path: 'images',  // Save the image to the 'images' folder
  },
};


const SignUp = ({navigation}) =>{
    
  const [Firstname,onChangefirstname] = useState('')
  const [Lastname,onChangelastname] = useState('')
  const [Email,onChangeemail] = useState('')
  const [Password,onChangepassword] = useState('')
  const [Phonenumber,onChangephonenuber] = useState('')


   const handleButtonPress = () => {
    onChangefirstname('');
    onChangelastname('');
    onChangeemail('');
    onChangepassword('');
    onChangephonenuber('');
  };
 


 // State to store the selected image
  const [avatarSource, setAvatarSource] = React.useState(null);

  // Function to show the ImagePicker
  const pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // Get the source of the selected image
        const source = { uri: response.uri };

        // Set the selected image as the state
        setAvatarSource(source);
      }
    });
  };


    
    return(

   <ScrollView>

    <Text style = {{marginTop : 50}}>Personal Information</Text>

      <View style = {{flex: 1,flexDirection : 'row', alignItems: 'center', justifyContent: 'center', marginTop : 100 }}>

                {/* Button to show the ImagePicker */}
          <Button title="Pick an image" onPress={pickImage} />
          {/* Display the selected image */}
          {avatarSource && <Image source={avatarSource} style={{ width: 200,height: 200 }} />}

          </View>
                <Text style = {menustyle.header1}>
                   Sing Up
                </Text>
            <Text style = {menustyle.header}>
              First Name:
            </Text>
            <TextInput 
            
             value = {Firstname}       // name of the tab 
            onChangeText = {(text) => onChangefirstname(text)} 
              style = {menustyle.input} //style of tab
              placeholder = 'First Name'     
              maxLength = {40}   // char length
           
              /> 
               <Text style = {menustyle.header}>
              Last Name:
            </Text>
            <TextInput 
             value = {Lastname}       // name of the tab 
            onChangeText = {(text) => onChangelastname(text)} 
              style = {menustyle.input} //style of tab
              placeholder = 'Last Name'     
              maxLength = {40}   // char length
              /> 
               <Text style = {menustyle.header}>
              Email: 
            </Text>
            <TextInput 
             value = {Email}       // name of the tab 
             onChangeText = {(text) => onChangeemail(text)} 
              style = {menustyle.input} //style of tab
              placeholder = 'Email'     
              maxLength = {40}   // char length
              /> 
               <Text style = {menustyle.header}>
              Password:
            </Text>
            <TextInput 
            secureTextEntry = {true}  // hide the text written in tab
             value = {Password}       // name of the tab 
            onChangeText = {(text) => onChangepassword(text)} 
              style = {menustyle.input} //style of tab
              placeholder = 'Password'     
              maxLength = {40}   // char length
              /> 

               <Text style = {menustyle.header}>
              Phone Number:
            </Text>
            <TextInput 
            secureTextEntry = {true}  // hide the text written in tab
             value = {Phonenumber}       // name of the tab 
            onChangeText = {(text) => onChangephonenuber(text)} 
              style = {menustyle.input} //style of tab
              placeholder = 'Phone Number'     
              maxLength = {40}   // char length
              /> 


              <Button onPress={handleButtonPress} title="Log out" />

                  <Pressable
                  onPress={() =>
                    navigation.navigate('Counter1')} 
                >
                <Text style = { menustyle.text2}>Save changes </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    navigation.navigate('SignIn')} 
                >
               
                
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

      backgroundColor : 'red' 
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

export default SignUp;