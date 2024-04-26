import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';
import { produce } from 'immer';


function TaskManager() {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'Do dishes', completed: false},
    ]);

    const addTask = () => {
        const newTask = { id: tasks.length + 1, title: `Do dishes`, completed: false };

        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    const toggleState = (id) => {
        setTasks(produce(tasks, draft => {
            const task = draft.find(item => item.id === id);
            if (task) {
                task.completed = !task.completed;
            }
        }))
    }

    return (
    <View style={{width: 200}}>
        
        {tasks.map((task) => (
            <>
                <Text key={task.id}>
                    {task.id}{task.title} Completion: {task.completed ? "true": "false"}
                    <Button title="Toggle completion" onPress={() => toggleState(task.id)}/>
                </Text>

            </>
        ))}
      
        <Button onPress={addTask} title="add task"/>
    </View>
    );
}
export default TaskManager;
