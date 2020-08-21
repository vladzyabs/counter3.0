import {ActionType} from './counterActions'
import {CounterType} from './counterType'

const initialState: CounterType = {
   currentValue: 0,
   startValue: 0,
   endValue: 5,
}

type InitialStateType = typeof initialState

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case 'INCREASE_COUNTER':
         if (state.currentValue < state.endValue) {
            return {
               ...state,
               currentValue: state.currentValue + 1,
            }
         }
         return state
      case 'RESET_COUNTER':
         return {
            ...state,
            currentValue: state.startValue,
         }
      case 'CHANGE_MAX_VALUE':
         return {
            ...state,
            endValue: action.value,
         }
      case 'CHANGE_MIN_VALUE':
         return {
            ...state,
            startValue: action.value
         }
      default:
         return state
   }
}
