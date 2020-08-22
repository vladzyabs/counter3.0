import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './Button.module.scss'

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
   & {}


function Button(props: ButtonPropsType) {
   return (
      <button className={classes.btn} {...props}>{props.children}</button>
   )
}

export default React.memo(Button)
