import React from 'react'
import classes from './Counter.module.scss'
import Button from '../common/Button/Button';

type CounterPropsType = {
   value: number
   maxValue: number
   blocking: boolean
   message: string
   error: boolean
   increase: () => void
   reset: () => void
}

function Counter(props: CounterPropsType) {

   const styles = {
      endCount: {
         color: (props.value === props.maxValue || props.error )
            ? '#ff4461'
            : '',
      },
   }

   return (
      <div className={classes.counterWrapper}>

         <div style={styles.endCount} className={classes.scoreboard}>
            <span>
               {
                  props.message
                     ? props.message
                     : props.value
               }
            </span>
         </div>

         <div className={classes.btnWrapper}>
            <Button onClick={() => props.increase()}
                    disabled={props.blocking || props.value === props.maxValue}>inc
            </Button>
            <Button onClick={() => props.reset()}
                    disabled={props.blocking}>reset
            </Button>
         </div>

      </div>
   )
}

export default React.memo(Counter)
