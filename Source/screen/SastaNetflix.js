import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
const data = [
  {
    name: '3 Idiots',
    year: '2012',
  },
  {
    name: 'Inception',
    year: '2017',
  },
  {
    name: 'Lassun',
    year: '2022',
  },
];

function SastaNetflix() {
  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>;
        }}
        horizontal={true}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    height: 100,
    // width: '100%',
    // alignContent: 'space-between',
    backgroundColor: 'BLUE',
  },
});
export default SastaNetflix;
