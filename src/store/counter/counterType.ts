export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'
export const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
export const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE'
export const SET_SETTINGS = 'SET_SETTINGS'

export type CounterType = {
   currentValue: number
   startValue: number
   endValue: number
   blockingCounter: boolean
   message: {
      title: string
      error: boolean
   }
}
