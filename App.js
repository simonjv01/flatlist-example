import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
const [todos, setTodos] = useState([{
  
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }])
  const pressHandler = (id) => {
    // const selectedItem = (todos.filter(todo=>todo.id ===id))[0]
    // alert(selectedItem.title)
    let returnValue = [...todos];
    returnValue.forEach(todo=>{
      if (todo.id===id) {
        todo.completed = true
      }
    })
    setTodos(returnValue)
  }


  return (
    <View style={styles.container}>
      <FlatList
      numColumns={3}
      keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
              <Text style={{
                ...styles.todo, backgroundColor: item.completed?
                'green':'deeppink'
                }}>{item.title}</Text>
          </TouchableOpacity>
        )}

        
      />
      {/* <ScrollView>
      {todos.map(todo=> <View key={todo.id} style={styles.todo}>
          <Text>{todo.title}</Text>
        </View>)
      }
      </ScrollView> */}
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todo: {
    margin: 20,
    color: 'white',
    fontSize: 10,
    padding: 10,
  }
  
});

