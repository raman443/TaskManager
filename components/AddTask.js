import React, { useEffect } from 'react'
import {Text, 
        View,
        TextInput,
        TouchableOpacity,
        FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {styles} from './styles/TaskStyles';
import Item from './common/Item'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTask = props =>{
    const [task, setTask] = React.useState(null);
    const [taskList, setTaskList]  = React.useState([]);
    const [count, setCount] = React.useState(0);
    useEffect(()=>{
        props.navigation.setOptions({
            headerStyle: {
              backgroundColor: 'orange', //Set Header color
        }});
        if(!taskList || taskList.length===0){
            getAsyncList();
        }
    })

    const getAsyncList = async () =>{
        const value = await AsyncStorage.getItem('taskList');
        if(value){
            const taskList = JSON.parse(value);
            setTaskList(taskList);
            setCount(taskList.length);
        }
    }
    const renderItem = ({ item }) => (
        <Item 
            title={item.task} 
            onPress={()=>goToDetails(item.task)}
        />
    );
    const goToDetails =(task)=>{
        props.navigation.navigate("TaskOptions",{task:task});
    }
    const addItem = async () =>{
        const newList = [...taskList,{id:count,task:task}]
        setTaskList(newList);
        setCount(count+1);
        setTask("");
        await AsyncStorage.setItem('taskList', JSON.stringify(newList));
    }
    const goToHistory = () =>{
        props.navigation.navigate("TaskHistory");
    }
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.tagsText}>Add Task</Text>
          <View style={styles.row}>
            <TextInput
                style={styles.input}
                onChangeText={setTask}
                value={task}
                placeholder="Enter Task"
            />
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={addItem}
            >
                <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
          <FlatList
                data={taskList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
           />
           <View style={styles.row}>
            <TouchableOpacity 
                style={styles.historyContainer}
                onPress={goToHistory}
            >
                <Text style={styles.btnText}>Task History</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

export default AddTask;