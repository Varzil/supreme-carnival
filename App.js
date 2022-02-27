import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomComponent from './Source/screen/CustomComponent';
import Challenge1 from './Source/screen/Challenge1';
import FlatListDemo from './Source/screen/FlatListDemo';
function App() {
  return (
    <View>
      <Text style={style.textStyle}>Hello Varzil</Text>
      {/*<CustomComponent />*/}
      <Challenge1 />
      <FlatListDemo />
    </View>
  );
}
const style = StyleSheet.create({
  textStyle: {color: 'red', fontSize: 40, margin: '20%'},
});

export default App;
