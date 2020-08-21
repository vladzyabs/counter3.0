import {counterReducer} from './counterReducer'
import {increaseCounterAC, resetCounterAC} from './counterActions'
import {CounterType} from './counterType'

let startState: CounterType
beforeEach(() => {
   startState = {
      currentValue: 0,
      startValue: 0,
      endValue: 6,
   }
})

test('counter should increase by 1', () => {
   let endState

   endState = counterReducer(startState, increaseCounterAC())

   expect(endState.currentValue).toBe(1)
   expect(endState.startValue).toBe(startState.startValue)
   expect(endState.endValue).toBe(startState.endValue)
})

test('counter should be reset', () => {
   let endState
   startState.currentValue = 5

   endState = counterReducer(startState, resetCounterAC())

   expect(endState.currentValue).toBe(startState.startValue)
   expect(endState.startValue).toBe(startState.startValue)
   expect(endState.endValue).toBe(startState.endValue)
})
