import {ActionType} from './counterActions'
import {CounterType} from './counterType'

const initialState: CounterType = {
   currentValue: 0,
   startValue: 0,
   endValue: 5,
   blockingCounter: false,
   message: {
      title: '',
      error: false,
   },
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
            blockingCounter: true,
            message: {
               ...state.message,
               title: action.value <= state.startValue
                  ? 'Incorrect value!'
                  : 'Enter values and press "set"',
               error: action.value <= state.startValue,
            },
         }
      case 'CHANGE_MIN_VALUE':
         return {
            ...state,
            startValue: action.value,
            blockingCounter: true,
            message: {
               ...state.message,
               title: (action.value < 0 || action.value >= state.endValue)
                  ? 'Incorrect value!'
                  : 'Enter values and press "set"',
               error: (action.value < 0 || action.value >= state.endValue),
            },
         }
      case 'SET_SETTINGS':
         return {
            ...state,
            currentValue: state.startValue,
            blockingCounter: false,
            message: {
               ...state.message,
               title: '',
               error: false,
            },
         }
      default:
         return state
   }
}
