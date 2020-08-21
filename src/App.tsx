import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store/store'
import {increaseCounterAC, resetCounterAC} from './store/counter/counterActions'

function App() {

   const value = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
   const dispatch = useDispatch()

   const incCounter = () => {
      dispatch(increaseCounterAC())
   }

   const resetCounter = () => {
      dispatch(resetCounterAC())
   }

   return (
      <div className="App">
         <div>
            {value}
         </div>
         <button onClick={incCounter}>inc</button>
         <button onClick={resetCounter}>reset</button>
      </div>
   )
}

export default App
