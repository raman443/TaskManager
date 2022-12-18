import {useEffect,useState} from 'react'
import {useDispatch } from 'react-redux'
import {  Text, View, TextInput,TouchableOpacity } from 'react-native';
import { styles } from './styles/TaskStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {addTask} from '../actions/taskActions'
import { showMessage } from "react-native-flash-message";

const TaskManualEntry = ({navigation,route}) =>{
    const {task} = route.params;
    const [tags,setTags] = useState("");
    const [location,setLocation] = useState("");
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [timeMode, setTimeMode] = useState('time');
    const [showTime, setShowTime] = useState(false);
    const [time, setTime] = useState(new Date());
    const [showEndTime, setShowEndTime] = useState(false);
    const [endTime, setEndTime] = useState(new Date());
    const dispatch = useDispatch();

    useEffect(()=>{
        navigation.setOptions({
            title: task,
            headerStyle: {
              backgroundColor: 'orange', //Set Header color
        }});
    },[]);
    const saveTime = () => {
        const seconds =(endTime.getTime() - time.getTime()) / 1000;
        dispatch(addTask(task,seconds,tags,location,date.toString()));
        navigation.goBack();
        showMessage({
            message: "Task Saved Successfully",
            type: "success",
        });
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowTime(false);
        setTime(currentDate);
    }
    const onChangeEndTime = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowEndTime(false);
        setEndTime(currentDate);
    }
    const d = new Date(date);
    let stringDate = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
    const t = new Date(time);
    let startTime = t.getHours() + ' : ' +t.getMinutes();
    const et = new Date(endTime);
    let endTimeString = et.getHours() + ' : ' +et.getMinutes();
    return(
        <View style={styles.centerView}>
            <View style={styles.row}>
                <Text style={styles.tagsText}>Task</Text>
                <TextInput
                    style={styles.input}
                    value={task}
                    disabled
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.tagsText}>Date</Text>
                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />}
                <TextInput
                    style={styles.input}
                    value={stringDate}
                    placeholder="Enter Date"
                    onFocus={() => setShow(true)}
                    onSelectionChange={() => setShow(true)}
                    showSoftInputOnFocus={false}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.tagsText}>Start Time</Text>
                {showTime && <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode={timeMode}
                    is24Hour={true}
                    onChange={onChangeTime}
                />}
                <TextInput
                    style={styles.input}
                    onChangeText={setTags}
                    value={startTime}
                    placeholder="Enter Time"
                    onFocus={() => setShowTime(true)}
                />
                <Text style={styles.tagsText}>End Time</Text>
                {showEndTime && <DateTimePicker
                    testID="dateTimePicker"
                    value={endTime}
                    mode={timeMode}
                    is24Hour={true}
                    onChange={onChangeEndTime}
                />}
                <TextInput
                    style={styles.input}
                    onChangeText={setTags}
                    value={endTimeString}
                    placeholder="Enter Time"
                    onFocus={() => setShowEndTime(true)}
                />
            </View>
            
            <View style={styles.row}>
                <Text style={styles.tagsText}>Location</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setLocation}
                    value={location}
                    placeholder="Enter your Location ( Optional )"
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.tagsText}>Tags</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTags}
                    value={tags}
                    placeholder="Enter any  tags( Optional )"
                />
            </View>
            <TouchableOpacity 
                style={styles.saveButtonContainer}
                onPress={saveTime}
            >
                <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}
export default TaskManualEntry;