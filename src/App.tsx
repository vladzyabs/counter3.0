import React, {useCallback} from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {
   changeMaxValueAC,
   changeMinValueAC,
   increaseCounterAC,
   resetCounterAC,
   setSettingsAC,
} from './store/counter/counterActions'
import Counter from './components/Counter/Counter'
import {CounterType} from './store/counter/counterType'
import CounterSettings from './components/CounterSettings/CounterSettings';

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

   const changeMaxValue = useCallback(
      (newValue: number) => {
         dispatch(changeMaxValueAC(newValue))
      },
      [dispatch],
   )

   const changeMinValue = useCallback(
      (newValue: number) => {
         dispatch(changeMinValueAC(newValue))
      },
      [dispatch],
   )

   const setSettings = useCallback(
      () => {
         dispatch(setSettingsAC())
      },
      [dispatch],
   )

   return (
      <div className="App">

         <CounterSettings minValue={counter.startValue}
                          maxValue={counter.endValue}
                          changeMaxValue={changeMaxValue}
                          changeMinxValue={changeMinValue}
                          setSettings={setSettings}
                          blocking={!counter.blockingCounter}/>

         <Counter value={counter.currentValue}
                  maxValue={counter.endValue}
                  increase={incCounter}
                  reset={resetCounter}
                  blocking={counter.blockingCounter}/>

      </div>
   )
}

export default App
