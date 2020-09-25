import { IAction, IAppState, TAppDispatchThunk } from 'store'
import { ratesByCurrency } from 'api'
import { CURRENCY } from 'config'
import { ICommonCurrencyState } from 'reducers/common'

const MODULE_NAME = 'COMMON'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`
export const SET_CURRENCY = `${MODULE_NAME}/SET_CURRENCY`
export const SET_DYNAMIC = `${MODULE_NAME}/SET_DYNAMIC`


export const startFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  })
}


export const stopFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
  })
}


export const setCurrency = <K extends keyof typeof CURRENCY.LIST>(payload: K) => ({
  type: SET_CURRENCY,
  payload,

})



export const setDynamic = (payload: ICommonCurrencyState[]): IAction<ICommonCurrencyState[]> => ({
  type: SET_DYNAMIC,
  payload,

})


export const fetchRatesByCurrency = <K extends keyof typeof CURRENCY.LIST>(currency: K, fromAt: Date, toAt: Date): any => async (dispatch: TAppDispatchThunk<never | ICommonCurrencyState[]>): Promise<void> => {
  dispatch(startFetching())

  const result = await ratesByCurrency(currency, fromAt, toAt)

  dispatch(setDynamic(result.map((rate): ICommonCurrencyState => {
    const date = new Date(rate.Date)

    return {
      date,
      value: rate.Cur_OfficialRate,
      week: date.toLocaleString('ru-ru', {  weekday: 'short' }),

    }
  })))

  dispatch(stopFetching())
}
