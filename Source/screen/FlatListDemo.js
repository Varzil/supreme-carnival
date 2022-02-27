import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
const movies = [
  {
    name: 'Money Heist',
  },
  {
    name: 'Squid Games',
  },
  {
    name: 'Lasaniya Bataka',
  },
  {
    name: 'Tenet',
  },
];
function FlatListDemo() {
  return (
    <View>
      <FlatList
        style={style.listStyle}
        data={movies}
        renderItem={({Item}) => {
          console.log(Item);
          // return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  listStyle: {width: '20%', height: '10%'},
});
export default FlatListDemo;
