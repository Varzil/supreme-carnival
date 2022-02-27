import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

var name = 'Varzil';
function Challenge1() {
  return (
    <View>
      <Text style={style.textStyle}>Welcome Here,</Text>
      <Text style={style.text2}>I am using react native and is vary easy</Text>
      <Text style={style.text2}>
        And btw my name is {name} What is your name?
      </Text>
    </View>
  );
}
// eslint-disable-next-line no-undef
const style = StyleSheet.create({
  textStyle: {color: 'blue', fontSize: 40, fontWeight: 'bold', paddingLeft: 10},
  text2: {fontSize: 30, paddingLeft: 10},
});
export default Challenge1;
