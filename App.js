import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data =

    [
        {"id": 1, first_name: "Harry", "last_name": "Cecelia", "nickname": "Mar", "course": "BSIT", "year": 1},
        {"id": 2, "first_name": "Dennise", "last_name": "Barons", "nickname": "Dan", "course": "BSIT", "year": 2},
        {"id": 3, "first_name": "Mike", "last_name": "Gonzales", "nickname": "Mitch", "course": "BSIT", "year": 3},
        {"id": 4, "first_name": "James", "last_name": "Salle", "nickname": "Son", "course": "Criminology", "year": 4},
        {"id": 5, "first_name": "Julie", "last_name": "Rodriguess", "nickname": "Dave", "course": "Criminology", "year": 5},
        {"id": 6, "first_name": "Celine", "last_name": "Collins", "nickname": "Clay", "course": "Criminology", "year": 6},
        {"id": 7, "first_name": "Henry", "last_name": "Robertson", "nickname": "Han", "course": "Criminology", "year": 7},
        {"id": 8, "first_name": "Sean", "last_name": "Dashell", "nickname": "San", "course": "BSIT", "year": 8},
        {"id": 9, "first_name": "Bernard", "last_name": "Cornik", "nickname": "bob", "course": "BSIT", "year": 9},
             
        // Add more items here...
        {"id": 73, "first_name": "Amy", "last_name": "Dano", "nickname": "Ing", "course": "BSIT", "year": 73}
      
      
];


  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <Text>{item.nickname}</Text>
    </TouchableOpacity>
  );
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of Nicknames:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Text>Selected Item Information:</Text>
      <ScrollView>
        {selectedItem && (
          <View>
            <Text>First Name: {selectedItem.first_name}</Text>
            <Text>Last Name: {selectedItem.last_name}</Text>
            <Text>Nickname: {selectedItem.nickname}</Text>
            <Text>Course: {selectedItem.course}</Text>
            <Text>Year: {selectedItem.year}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default App;

