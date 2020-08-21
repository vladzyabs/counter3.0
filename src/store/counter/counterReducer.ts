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
         return {
            ...state,
            currentValue: state.currentValue + 1
         }
      case 'RESET_COUNTER':
         return {
            ...state,
            currentValue: state.startValue
         }
      default:
         return state
   }
}
