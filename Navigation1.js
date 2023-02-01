import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet,View,Text,Image  } from 'react-native';



import SignIn from '../Component/SignIn';
import SignUp from '../Component/SignUp';
import Counter1 from '../Component/Counter';
import MainPage from './MainPage';

const Stack = createNativeStackNavigator();


function Header() {
  return (
    <View style = {styles.headcontainer}>
        <Image
        style = {styles.imgsize}
        source = {require('../img/coffee.jpg')}
        /> 
        
      <Text style={styles.headtext}> Coffee & Tea </Text>
    </View>
  );
}

const Navigation1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{title : " "}}
        />

        <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title : "SignIn",
        headerTitle : (props)=><Header{...props} />}}
        />

        <Stack.Screen 
         name="SignUp"
         component={SignUp}
         options={{title :"SignUp",
         headerTitle : (props)=><Header{...props} />}} 
          />


        <Stack.Screen 
         name="Counter1"
         component={Counter1}
         options={{title :"Page1",
         headerTitle : (props)=><Header{...props} />}} 
          />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
    headcontainer: {
      flex : 1,
      flexDirection : 'row',
      height: 100,
      marginTop : 10,
      marginRight : 10,
      marginBottom: 20,
      backgroundColor : 'white'
    },
  headtext:{
        fontSize: 30,
        color: 'white',
        marginRight : 70,
        marginTop : 30,
        fontWeight: 'bold',
      },
  imgsize: {
        flex : 1,
       width: 100,
       height: 100,
       marginLeft : 0.1,
       marginRight : 0.1,
       resizeMode: 'contain',
     }

});

export default Navigation1;