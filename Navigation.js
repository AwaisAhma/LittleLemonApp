import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet,View,Text,Image  } from 'react-native';



import SignIn from './SignIn';
import SignUp from './SignUp';
import Counter1 from './MenuPage';


const Stack = createNativeStackNavigator();


function Header() {
  return (
    <View style = {styles.headcontainer}>
        
        
      <Text style={styles.headtext}> Little Lemon </Text>
       <Text style={styles.headtext}> Chicago </Text>
        <Text style={styles.headtext1}> We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist 

        <Image
        style = {styles.imgsize}
        source = {require('./img/12.jpg')}
        />

        </Text>
    </View>
  );
}

const NavigationLittle = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

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

    headtext1:{
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

export default NavigationLittle;