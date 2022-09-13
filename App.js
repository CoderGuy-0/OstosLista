import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';

export default function App() {
  const [data, setData] = useState([{ name: 'Shopping List' }]);
  const [value1,setValue] = useState('');

  const deleteItem = (id) => {

    let arr = data.filter(function(item) {
      return item.id !== id
    })
    setData(arr);
    };

  return (
    
    <View style={styles.container}>
      <TextInput
      style= {{borderColor: 'gray', borderWidth: 1, width: 200}}
                  onChangeText={(value1) => setValue(value1)}
                  placeholder={'Anna ostos'}
                  value={value1}
                />

    <View style={styles.fixToText}>
      <Button
      title="ADD"
      onPress={() => {
        if (value1) setData([...data, { name: value1 }]);
      }}
      ></Button>
      <Button
      title="CLEAR"
      onPress={() => {
      deleteItem();
      }}
      ></Button>
      
    </View>
    <View style={styles.flatStyle}>
    <FlatList
    keyExtractor={(item, index) => index.toString()}
    data={data}
    renderItem={({ item }) => <Text>{item.name}</Text>}
  />
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 200,
    height: 30,
  },
  flatStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 80,
  }
});
