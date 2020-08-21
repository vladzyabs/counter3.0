import React, {useCallback} from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {increaseCounterAC, resetCounterAC} from './store/counter/counterActions'
import Counter from './components/Counter/Counter'
import {CounterType} from './store/counter/counterType'

function App() {

   const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
   const dispatch = useDispatch()

   const incCounter = useCallback(
      () => {
         dispatch(increaseCounterAC())
      },
      [dispatch],
   )

   const resetCounter = useCallback(
      () => {
         dispatch(resetCounterAC())
      },
      [dispatch],
   )

   return (
      <div className="App">
         <Counter value={counter.currentValue} maxValue={counter.endValue} increase={incCounter} reset={resetCounter}/>
      </div>
   )
}

export default App
