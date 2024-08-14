import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {TaskContext} from '../context/TaskContext';
import Loader from '../components/Loader';
import {useRoute} from '@react-navigation/native';
import Error from '../components/Error';

export default function TaskScreen({children}) {
  const {tasks, loading, error, addTask, removeTask} = useContext(TaskContext);
  const route = useRoute();
  const {userId} = route.params;
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const task = tasks.find(task => task.id === userId);

  const handleTask = () => {
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + '...'
                    : item.title}
                </Text>

                <Button
                  onPress={() => removeTask(item.id)}
                  color={'#03346E'}
                  padding={10}
                  title="Remove"
                />
              </View>
            )}
          />
          <View style={styles.inputcontainer}>
            <TextInput
              placeholder="New Task Titile"
              style={styles.input}
              onChangeText={setNewTaskTitle}
              value={newTaskTitle}
            />
            <Button onPress={handleTask} title="Add Task" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#7FA1C3',
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  inputcontainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 35,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderWidth: 1,
    width: '75%',
    padding: 5,
    borderRadius: 5,
    borderColor: '#7FA1C3',
  },
});
