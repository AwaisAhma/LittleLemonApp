
import { Text,StyleSheet,View,Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LittleLemonHeader from './LittleLemonHeader';
import MeinItem from './mainItem';
import MenuItem1 from './Pressable1';


const Stack = createNativeStackNavigator();

const  Navigation = (navigation) => {
   

  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Welcometoscreen1"
        screenOptions={{headerStyle : {backgroundColor : '#FBDABB'}}}
        >
            <Stack.Screen
            options={{title : 'Home'}}
            name = "Welcometoscreen1" 
            component = {LittleLemonHeader} />

            <Stack.Screen
             name = "Screen2" 
             component = {MenuItem1} />

            <Pressable onPress={() => navigation.navigate("MenuItem1")}>
                  <Text style = {Style.buttonText}>
                    nextscreen
                  </Text>
                  </Pressable>
        </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const Style = StyleSheet.create({
  container: {
      flex : 1,
      marginTop : 25,
      padding : 24,
      backgroundColor : '#fff'
    },
    title : {
        paddingVertical : 10,
        marginTop : 16,
        color : '#333333',
        textAlign : 'center',
        fontSize : 20,
        fontWeight : 'bold',
      },
      logo : {
        height : 100,
        width : 100,
      },
      buttonText: {

      }
})

export default Navigation;