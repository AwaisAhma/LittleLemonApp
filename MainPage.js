
import { View, Text, StyleSheet,Image,SafeAreaView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const MainPage = ({navigation})=> {
  return (
    <View
      style={lemonstyle.box1}>

        
        
        <Pressable
         onPress={() =>
          navigation.navigate('SignIn')}>

         <Image 
            resizeMode ="contain"
            style = {lemonstyle.logo} 
            source = {require("../img/coffee.jpg")} />

          <Text style={lemonstyle.container1}> Coffee & Tea </Text>
            
        </Pressable>
     
    </View>
  );
}

const lemonstyle = StyleSheet.create({
  container1: {
    fontSize: 30,
    marginLeft:60,
    marginTop : 10,
    color: 'white',
    fontWeight: 'bold',
  },
  box1:{
    flex: 1,
    flexDirection : 'column',
    backgroundColor: 'gray'
  },
  logo : {
    alignContent : 'center',
    marginTop : 200,
    height : 200,
    width : 200,
    marginLeft:80
  },
});

export default MainPage;