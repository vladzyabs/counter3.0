import {counterReducer} from './counterReducer'
import {changeMaxValueAC, changeMinValueAC, increaseCounterAC, resetCounterAC, setSettingsAC} from './counterActions'
import {CounterType} from './counterType'

let startState: CounterType
beforeEach(() => {
   startState = {
      currentValue: 0,
      startValue: 0,
      endValue: 6,
      blockingCounter: false,
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

test('maximum value should change', () => {
   let endState

   endState = counterReducer(startState, changeMaxValueAC(10))

   expect(endState.currentValue).toBe(startState.currentValue)
   expect(endState.startValue).toBe(startState.startValue)
   expect(endState.endValue).toBe(10)
   expect(endState.blockingCounter).toBe(true)
})

test('minimum value should change', () => {
   let endState

   endState = counterReducer(startState, changeMinValueAC(2))

   expect(endState.currentValue).toBe(startState.currentValue)
   expect(endState.startValue).toBe(2)
   expect(endState.endValue).toBe(startState.endValue)
   expect(endState.blockingCounter).toBe(true)
})

test('counter should be unblocked', () => {
   let endState

   endState = counterReducer(startState, changeMinValueAC(3))

   expect(endState.blockingCounter).toBe(true)

   endState = counterReducer(endState, setSettingsAC())

   expect(endState.blockingCounter).toBe(false)
   expect(endState.currentValue).toBe(endState.startValue)
   expect(endState.endValue).toBe(startState.endValue)
})
