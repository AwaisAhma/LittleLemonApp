import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image,ScrollView } from 'react-native';

const Counter1 = ({navigation}) => {
  const [timesPressed1, setTimesPressed1] = useState(0);
  const [timesPressed2, setTimesPressed2] = useState(0);
  const [timesPressed3, setTimesPressed3] = useState(0);
  const [timesPressed4, setTimesPressed4] = useState(0);
  const [timesPressed5, setTimesPressed5] = useState(0);
  const [timesPressed6, setTimesPressed6] = useState(0);

  let textLog1 = '';
  if (timesPressed1 > 1) {
    textLog1 = timesPressed1;
  } else if (timesPressed1 > 0) {
    textLog1 = 1;
  } else if (timesPressed1 < 0 ) {
    textLog1 = "must be greater than 0"
  }else {
    textLog1 = "0"
  }


  let textLog2 = '';
  if (timesPressed2 > 1) {
    textLog2 = timesPressed2;
  } else if (timesPressed2 > 0) {
    textLog2 = 1;
  } else if (timesPressed2 < 0 ) {
    textLog2 = "must be greater than 0"
  }else {
    textLog2 = "0"
  }


  let textLog3 = '';
  if (timesPressed3 > 1) {
    textLog3 = timesPressed3;
  } else if (timesPressed3 > 0) {
    textLog3 = 1;
  } else if (timesPressed3 < 0 )  {
    textLog3 = "must be greater than 0"
  }else {
    textLog3 = "0"
  }


  let textLog4 = '';
  if (timesPressed4 > 1) {
    textLog4 = timesPressed4;
  } else if (timesPressed4 > 0) {
    textLog4 = 1;
  }else if (timesPressed4 < 0 ) {
    textLog4 = "must be greater than 0"
  }else {
    textLog4 = "0"
  }


  let textLog5 = '';
  if (timesPressed2 > 1) {
    textLog5 = timesPressed5;
  } else if (timesPressed5 > 0) {
    textLog5 = 1;
  } else if (timesPressed5 < 0 ) {
    textLog5 = "must be greater than 0"
  }else {
    textLog5 = "0"
  }


  let textLog6 = '';
  if (timesPressed6 > 1) {
    textLog6 = timesPressed6;
  } else if (timesPressed6 > 0) {
    textLog6 = 1;
  }else if (timesPressed6 < 0 ) {
    textLog6 = "must be greater than 0"
  }else {
    textLog6 = "0"
  }

  return (
    <ScrollView style={{ flex: 1 }} >
       <ScrollView 
      horizontal= {true}
      style={styles.container}>
        <Image

          style={styles.logo}
          source={require('../img/coffee.jpg')}
          accessible={true}
          accessibilityLabel="Espresso"
        />

        <Text style={styles.title1}>Espresso</Text>

        <Pressable
          onPress={() => {
            setTimesPressed1((current) => current + 1);
          }}>
          <Text style={styles.text2}>{(pressed = '+')}</Text>
        </Pressable>

        <View style={styles.logBox1}>
          <Text>{textLog1}</Text>
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed1((current) => current - 1);
          }}>
          <Text style={styles.text1}>{(pressed = '-')}</Text>
        </Pressable>
      </ScrollView>

      <ScrollView 
      horizontal= {true}
      style={styles.container}>
        <Image

          style={styles.logo}
          source={require('../img/coffee.jpg')}
          accessible={true}
          accessibilityLabel="Cappuccino"
        />

        <Text style={styles.title1}>Cappuccino</Text>

        <Pressable
          onPress={() => {
            setTimesPressed2((current) => current + 1);
          }}>
          <Text style={styles.text3}>{(pressed = '+')}</Text>
        </Pressable>

        <View style={styles.logBox1}>
          <Text>{textLog2}</Text>
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed2((current) => current - 1);
          }}>
          <Text style={styles.text1}>{(pressed = '-')}</Text>
        </Pressable>
      </ScrollView>

      <ScrollView 
      horizontal= {true}
      style={styles.container}>
        <Image

          style={styles.logo}
          source={require('../img/coffee.jpg')}
          accessible={true}
          accessibilityLabel="Long Black Cup"
        />

        <Text style={styles.title}>Long Black Cup</Text>

        <Pressable
          onPress={() => {
            setTimesPressed3((current) => current + 1);
          }}>
          <Text style={styles.text}>{(pressed = '+')}</Text>
        </Pressable>

        <View style={styles.logBox1}>
          <Text>{textLog3}</Text>
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed3((current) => current - 1);
          }}>
          <Text style={styles.text1}>{(pressed = '-')}</Text>
        </Pressable>
      </ScrollView>

       <ScrollView 
      horizontal= {true}
      style={styles.container}>
        <Image

          style={styles.logo}
          source={require('../img/coffee.jpg')}
          accessible={true}
          accessibilityLabel="Latte"
        />

        <Text style={styles.title2}>Latte</Text>

        <Pressable
          onPress={() => {
            setTimesPressed4((current) => current + 1);
          }}>
          <Text style={styles.text4}>{(pressed = '+')}</Text>
        </Pressable>

        <View style={styles.logBox1}>
          <Text>{textLog4}</Text>
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed4((current) => current - 1);
          }}>
          <Text style={styles.text1}>{(pressed = '-')}</Text>
        </Pressable>
      </ScrollView>

      <ScrollView 
      horizontal= {true}
      style={styles.container}>
        <Image

          style={styles.logo}
          source={require('../img/coffee.jpg')}
          accessible={true}
          accessibilityLabel="Milk"
        />

        <Text style={styles.title2}>Milk</Text>

        <Pressable
          onPress={() => {
            setTimesPressed5((current) => current + 1);
          }}>
          <Text style={styles.text5}>{(pressed = '+')}</Text>
        </Pressable>

        <View style={styles.logBox1}>
          <Text>{textLog5}</Text>
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed5((current) => current - 1);
          }}>
          <Text style={styles.text1}>{(pressed = '-')}</Text>
        </Pressable>
      </ScrollView>

      <ScrollView 
      horizontal= {true}
      style={styles.container}>
        <Image
   
          style={styles.logo}
          source={require('../img/coffee.jpg')}
          accessible={true}
          accessibilityLabel="Nesta Tea"
        />

        <Text style={styles.title1}>Nesta Tea</Text>

        <Pressable
          onPress={() => {
            setTimesPressed6((current) => current + 1);
          }}>
          <Text style={styles.text6}>{(pressed = '+')}</Text>
        </Pressable>

        <View style={styles.logBox1}>
          <Text>{textLog6}</Text>
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed6((current) => current - 1);
          }}>
          <Text style={styles.text1}>{(pressed = '-')}</Text>
        </Pressable>
      </ScrollView>

            <Pressable
                onPress={() =>
                 navigation.navigate('SignIn')} 
            >
            <Text style = { styles.text7}>Go Back</Text>
            </Pressable>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    letterSpacing: 0.1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 20,
    marginRight : 5,
     fontWeight : 'bold'
  },
  text1: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 5,
    fontWeight : 'bold'
  },

   text2: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 60,
    marginRight : 5,
     fontWeight : 'bold'
  },
  text3: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 35,
    marginRight : 5,
     fontWeight : 'bold'
  },
 text4: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 80,
    marginRight : 5,
     fontWeight : 'bold'
  },
   text5: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 90,
    marginRight : 5,
     fontWeight : 'bold'
  },
   text6: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginLeft: 50,
    marginRight : 5,
     fontWeight : 'bold'
  },

  text7 : {
    fontSize : 20,
    textAlign : 'center',
    marginTop : 10,
    marginLeft :30,
  },


  title: {
    paddingVertical: 10,
    marginTop: 50,
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
   title1: {
    paddingVertical: 10,
    marginTop: 50,
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
   title2: {
    paddingVertical: 10,
    marginTop: 50,
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 45,
  },


  logo: {
    marginTop: 50,
    height: 70,
    width: 70,
    marginLeft: 10,
    resizeMode : "cover"
  },


  logBox1: {
    padding: 30,
    marginleft: 1000,
    fontSize: 40,
    marginTop: 40,
    textAlign: 'auto',
  },
});

export default Counter1;
