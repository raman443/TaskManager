import {Text, View,TouchableOpacity } from 'react-native';
import { styles } from './styles/TaskStyles';
const TaskOptions = ({navigation,route}) =>{
    const {task} = route.params;
    const goToManual = () =>{
        navigation.pop();
        navigation.navigate("TaskManualEntry", {task:task})
    }
    const goToTimer = () =>{
        navigation.pop();
        navigation.navigate("TaskDetails", {task:task})
    }
    return(
        <View style={styles.screenCenterView}>
            <Text style={styles.tagsText}>How do you want to track your Task?</Text>
            <TouchableOpacity 
                style={styles.historyButtonContainer}
                onPress={goToTimer}
            >
                <Text style={styles.btnText}>Start Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={goToManual}
            >
                <Text style={styles.btnText}>Manual Entry</Text>
            </TouchableOpacity>
        </View>
    );
}
export default TaskOptions;