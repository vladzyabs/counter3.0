import {CHANGE_MAX_VALUE, CHANGE_MIN_VALUE, INCREASE_COUNTER, RESET_COUNTER, SET_SETTINGS} from './counterType'

type IncreaseCounterActionType = { type: typeof INCREASE_COUNTER }
export const increaseCounterAC = (): IncreaseCounterActionType => {
   return {
      type: INCREASE_COUNTER,
   }
}

type ResetCounterActionType = { type: typeof RESET_COUNTER }
export const resetCounterAC = (): ResetCounterActionType => {
   return {
      type: RESET_COUNTER,
   }
}

type ChangeMaxValueActionType = { type: typeof CHANGE_MAX_VALUE, value: number }
export const changeMaxValueAC = (newValue: number): ChangeMaxValueActionType => {
   return {
      type: CHANGE_MAX_VALUE,
      value: newValue,
   }
}

type ChangeMinValueActionType = { type: typeof CHANGE_MIN_VALUE, value: number }
export const changeMinValueAC = (newValue: number): ChangeMinValueActionType => {
   return {
      type: CHANGE_MIN_VALUE,
      value: newValue,
   }
}

type SetSettingsActionType = { type: typeof SET_SETTINGS }
export const setSettingsAC = (): SetSettingsActionType => {
   return {
      type: SET_SETTINGS,
   }
}

export type ActionType =
   IncreaseCounterActionType
   | ResetCounterActionType
   | ChangeMaxValueActionType
   | ChangeMinValueActionType
   | SetSettingsActionType
