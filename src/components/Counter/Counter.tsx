import React from 'react'
import classes from './Counter.module.scss'

type CounterPropsType = {
   value: number
   maxValue: number
   increase: () => void
   reset: () => void
}

function Counter(props: CounterPropsType) {

   const styles = {
      endCount: {
         color: props.value === props.maxValue ? '#ff4461' : '',
      },
   }

   return (
      <div className={classes.counterWrapper}>
         <div style={styles.endCount} className={classes.scoreboard}>{props.value}</div>
         <div className={classes.btnWrapper}>
            <button onClick={() => props.increase()} className={`btn`}>inc</button>
            <button onClick={() => props.reset()} className={`btn`}>reset</button>
         </div>
      </div>
   )
}

export default React.memo(Counter)
