import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTask from '../components/AddTask'
import TaskDetails from '../components/TaskDetails';
import TaskHistory from '../components/TaskHistory';
import TaskManualEntry from '../components/TaskManualEntry';
import TaskOptions from '../components/TaskOptions';
const TaskNavigator = props =>{
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Task Manager" component={AddTask} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Task Details' }}/>
            <Stack.Screen name="TaskHistory" component={TaskHistory} options={{ title: 'Task History' }}/>
            <Stack.Screen name="TaskManualEntry" component={TaskManualEntry} options={{ title: 'Manual Entry' }}/>
            <Stack.Screen name="TaskOptions" component={TaskOptions} options={{ title: 'Task Entry Options' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default TaskNavigator;