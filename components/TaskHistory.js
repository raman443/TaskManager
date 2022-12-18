import {useEffect, useState} from 'react'
import {Text, View,TouchableOpacity,FlatList } from 'react-native';
import {styles} from './styles/TaskStyles';
import { useSelector,useDispatch} from 'react-redux'
import {addList} from '../actions/taskActions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskHistory = props =>{
    let taskDetailsList = useSelector((state)=>state.task.taskDetailsList);
    let thisWeekList = [];
    let lastWeekList = [];
    const [thisWeek,setThisWeek] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        props.navigation.setOptions({
            headerStyle: {
              backgroundColor: 'orange', //Set Header color
        }});
        if(!taskDetailsList || taskDetailsList.length===0){
            getAsyncList();
        }
    })

    const getAsyncList = async () =>{
        const value = await AsyncStorage.getItem('taskDetailsList');
        if(value){
            const taskList = JSON.parse(value);
            taskDetailsList = taskList;
            dispatch(addList(taskDetailsList));
        }
    }

    const getMonday = d =>{
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }
    taskDetailsList.map(item=>{
        if(new Date(item.date)>=getMonday(new Date())){
            thisWeekList.push(item);
        }else{
            lastWeekList.push(item);
        }
    })
    
    const renderItem = (item) =>{
        let taskItem =item.item;
        const d = new Date(taskItem.date);
        let stringDate = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
        let minutes = Math.floor(taskItem.seconds/60);
        let sec = taskItem.seconds%60;
        minutes = minutes>=10?minutes:"0"+minutes;
        sec = sec>=10?sec:"0"+sec;
        let time = minutes + ":" + sec;
        return(
            <View style={styles.historyDataRow}>
                <Text style={styles.historyDataText}>{taskItem.task}</Text>
                <Text style={styles.historyDataText}>{time}</Text>
                <Text style={styles.historyDataText}>{stringDate}</Text>
                <Text style={styles.historyDataText}>{taskItem.location}</Text>
                <Text style={styles.historyDataText}>{taskItem.labels}</Text>
            </View>
        )
    }
    const renderEmptyList = () => {
        return(
            <View style={styles.screenCenterView}>
                <Text>No history found.</Text>
            </View>
        )
    }
    const dataList = thisWeek?thisWeekList:lastWeekList;
    return (
        <View style={styles.container}>
            <View style={styles.historyRow}>
            <TouchableOpacity 
                style={thisWeek?styles.historyButtonContainer:styles.historyButtonGreyContainer}
                onPress={()=>setThisWeek(true)}
            >
                <Text style={styles.btnText}>This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={thisWeek?styles.historyButtonGreyContainer:styles.historyButtonContainer}
                onPress={()=>setThisWeek(false)}
            >
                <Text style={styles.btnText}>Last Week</Text>
            </TouchableOpacity>
            </View>
            {dataList && dataList.length>0 && <View style={styles.historyDataRow}>
                <Text style={styles.historyRowHeadingText}>Task</Text>
                <Text style={styles.historyRowHeadingText}>Time(mm:ss)</Text>
                <Text style={styles.historyRowHeadingText}>Date</Text>
                <Text style={styles.historyRowHeadingText}>Location</Text>
            </View>}
            <FlatList
                data={dataList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent = {renderEmptyList}
           />
        </View>
    )

}
export default TaskHistory;