import React, {ChangeEvent, useCallback} from 'react'
import classes from './Number.module.scss';

type NumberPropsType = {
   idForHTML: string
   title: string
   value: number
   changeValue: (newValue: number) => void
}

function Number(props: NumberPropsType) {

   const {changeValue} = props

   const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
         changeValue(e.currentTarget.valueAsNumber)
      },
      [changeValue],
   )

   return (
      <label htmlFor={props.idForHTML} className={classes.number}>
         <span>{props.title}</span>
         <input type="number" id={props.idForHTML} value={props.value} onChange={onChange}/>
      </label>
   )
}

export default React.memo(Number)
