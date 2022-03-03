import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Mysimplebtn = () => {
  let a = 1;
  return (
    <View>
      <Button
        style={style.btn}
        title={'ClickMe'}
        onPress={() => {
          console.warn(a++);
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  btn: {height: 50, width: 50, backgroundColor: 'blue'},
});

export default Mysimplebtn;
