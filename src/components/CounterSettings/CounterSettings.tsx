import React from 'react'
import Number from '../common/Number/Number'
import classes from './CounterSettings.module.scss'

type CounterSettingsPropsType = {
   minValue: number
   maxValue: number
   changeMaxValue: (newValue: number) => void
   changeMinxValue: (newValue: number) => void
}

function CounterSettings(props: CounterSettingsPropsType) {
   return (
      <div className={classes.counterSettingWrapper}>
         <div className={classes.settings}>
            <Number idForHTML={'maxValue'} title={'max value'} value={props.maxValue} changeValue={props.changeMaxValue}/>
            <Number idForHTML={'minValue'} title={'min value'} value={props.minValue} changeValue={props.changeMinxValue}/>
         </div>
         <button className={'btn'}>Set</button>
      </div>
   )
}

export default React.memo(CounterSettings)
