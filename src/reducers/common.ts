import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
  SET_CURRENCY,
  SET_DYNAMIC,

} from 'actions/common'
import { CURRENCY } from 'config'

const initState = {
  fetching: false,
  currency: CURRENCY.DEFAULT_KEY,
  dynamic: [],

}

export interface ICommonCurrencyState {
  value: number
  date: Date
  week: string
}

export interface ICommonState {
  fetching: boolean
  currency: keyof typeof CURRENCY.LIST
  dynamic: ICommonCurrencyState[]

}

function commonReducer(state: ICommonState = initState, { type, payload = null }: AnyAction) {
  switch (type) {
    case START_FETCHING: {
      return {
        ...state,
        fetching: true,
      }
    }
    case STOP_FETCHING: {
      return {
        ...state,
        fetching: false,
      }
    }

    case SET_CURRENCY: {
      return {
        ...state,
        currency: payload,

      }
    }

    case SET_DYNAMIC: {
      return {
        ...state,
        dynamic: payload,

      }
    }

    default:
      return state
  }
}

export default commonReducer
