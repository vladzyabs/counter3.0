import {INCREASE_COUNTER, RESET_COUNTER} from './counterType'

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

export type ActionType =
   IncreaseCounterActionType
   | ResetCounterActionType
