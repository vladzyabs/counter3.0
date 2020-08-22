import React from 'react'
import Number from '../common/Number/Number'
import classes from './CounterSettings.module.scss'
import Button from '../common/Button/Button';

type CounterSettingsPropsType = {
   minValue: number
   maxValue: number
   blocking: boolean
   error: boolean
   changeMaxValue: (newValue: number) => void
   changeMinxValue: (newValue: number) => void
   setSettings: () => void
}

function CounterSettings(props: CounterSettingsPropsType) {
   return (
      <div className={classes.counterSettingWrapper}>
         <div className={classes.settings}>
            <Number idForHTML={'maxValue'}
                    title={'max value'}
                    value={props.maxValue}
                    changeValue={props.changeMaxValue}/>
            <Number idForHTML={'minValue'}
                    title={'min value'}
                    value={props.minValue}
                    changeValue={props.changeMinxValue}/>
         </div>
         <Button onClick={() => props.setSettings()}
                 disabled={props.blocking || props.error}>Set</Button>
      </div>
   )
}

export default React.memo(CounterSettings)
