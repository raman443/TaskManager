import { ADD_TASK,ADD_LIST } from '../constants/constants';
export function addTask(task,seconds,tags,location,date) {
    
    return {
        type: ADD_TASK,
        payload: {task,seconds,tags,location,date}
    }
}
export function addList(list) {
    
    return {
        type: ADD_LIST,
        payload: list
    }
}