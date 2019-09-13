import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDERS} from '../types'
import { bake_cookie, read_cookie} from 'sfcookies'
const reminders = (state=[],action) => {
    let reminders = null;
    
    state = read_cookie('reminders')
    if(action.type === ADD_REMINDER ){
        reminders = [...state,{text:action.text , date : action.date , id:Math.random()}]
        bake_cookie('reminders',reminders);
        return reminders
    }
    else if(action.type === DELETE_REMINDER){
        reminders = state.filter(reminder=> reminder.id !== action.id)
        bake_cookie('reminders',reminders);
        return reminders
    }
    else if(action.type === CLEAR_REMINDERS){
        reminders = []
        bake_cookie('reminders',reminders);
        return reminders
    }
    else{
        return state
    }
}

export default reminders;