import { ADD_TASK,ADD_LIST } from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
    taskDetailsList: []
};
const taskReducer = (state = initialState, action) => {
switch(action.type) {
case ADD_TASK:
AsyncStorage.setItem("taskDetailsList", JSON.stringify([...state.taskDetailsList,action.payload]))
return {
...state,
taskDetailsList:[...state.taskDetailsList,action.payload]
};
case ADD_LIST:
    return {
        ...state,
        taskDetailsList:action.payload
    };
default:
return state;
}
}
export default taskReducer;