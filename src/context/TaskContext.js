import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

// TaskContext ve TaskProvider'ı oluşturuyoruz
export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setLoading(false);
        setTasks(res.data);
      })

      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const removeTask = id => {
    const filtered = tasks.filter(item => item.id !== id);
    setTasks(filtered);
    Alert.alert('Task Silindi');
  };

  const addTask = title => {
    const newTask = {
      userId: 1,
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <TaskContext.Provider value={{tasks, loading, error, addTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  );
};
