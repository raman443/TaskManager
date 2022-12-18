import {useEffect,useState} from 'react'
import {useDispatch } from 'react-redux'
import { Text, 
        View,
        ImageBackground, 
        TouchableOpacity,
        TextInput} from 'react-native';
import {styles} from './styles/TaskStyles';
import timer from '../assets/timer.png'
import {addTask} from '../actions/taskActions'
import { showMessage } from "react-native-flash-message";

const TaskDetails = ({navigation,route}) =>{
    const {task} = route.params;
    const [timerStarted, setTimerStarted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState("00:00");
    const [stopFlag, setStopFlag] = useState(false);
    const [pauseFlag, setPauseFlag] = useState(false);
    const [tags,setTags] = useState("");
    const [location,setLocation] = useState("");
    const dispatch = useDispatch();
    let timeOut;
    useEffect(()=>{
        navigation.setOptions({
            title: task,
            headerStyle: {
              backgroundColor: 'orange', //Set Header color
        }});
        return () => {
            clearInterval(timeOut);
        }
    },[]);
    useEffect(()=>{
        if(!(stopFlag || pauseFlag)){
            startTimer();
        }else{
            if(stopFlag){
                setTimerStarted(false);
            }
        }
        return () => {
            clearInterval(timeOut);
        }
    },[stopFlag,pauseFlag,seconds])
    const pauseTimer = () =>{
        setPauseFlag(!pauseFlag);
    }
    const stopTimer = () =>{
        setStopFlag(true);
        if(pauseFlag){
            setPauseFlag(false);
        }
    }
    const startTimer = () =>{
        setStopFlag(false);
        timeOut = setInterval(() => {
            if(stopFlag){
                clearInterval(timeOut);
            }else{
                setSeconds(seconds+1);
                let minutes = Math.floor(seconds/60);
                let sec = seconds%60;
                minutes = minutes>=10?minutes:"0"+minutes;
                sec = sec>=10?sec:"0"+sec;
                setTime( minutes + " : " + sec);
                setTimerStarted(true);
            }
          }, 1000);
    }
    const saveTime = () =>{
        let date = new Date();
        date = date.toString();
        dispatch(addTask(task,seconds,tags,location,date));
        showMessage({
            message: "Task Saved Successfully",
            type: "success",
          });
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={timer}
                style={styles.imgBg}
                resizeMethod="resize"
                resizeMode="stretch">
                    <Text style={styles.timerText}>{time}</Text>
           </ImageBackground>
           {timerStarted? (
           <View style={styles.timerRow}>
            <TouchableOpacity 
                style={pauseFlag?styles.pauseContainer:styles.buttonContainer}
                onPress={pauseTimer}
            >
                <Text style={pauseFlag?styles.pauseText:styles.btnText}>{pauseFlag?"UnPause":"Pause Timer"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.stopButtonContainer}
                onPress={stopTimer}
            >
                <Text style={styles.stopText}>Stop Timer</Text>
            </TouchableOpacity>
          </View>):(<View style={styles.centerView}>
            <View style={styles.row}>
                <Text style={styles.tagsText}>Tags</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTags}
                    value={tags}
                    placeholder="Enter any  tags( Optional )"
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
           <TouchableOpacity 
                style={styles.saveButtonContainer}
                onPress={saveTime}
            >
                <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            </View>
            )}
        </View>
    );
}
export default TaskDetails;