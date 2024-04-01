import React from 'react';
import {Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useState } from 'react';


export default function HomeScreen ({navigation}) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (task) => {
        setTasks([...tasks, task]);
      };


  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};
