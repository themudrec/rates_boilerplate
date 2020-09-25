import { request, requestToJson } from './request'
import { CURRENCY } from 'config';


export const ratesByCurrency = async <K extends keyof typeof CURRENCY.LIST>(currency: K, fromAt: Date, toAt: Date) => {
    const dateTransform = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const response = await request(`exrates/rates/dynamics/${currency}?startDate=${dateTransform(fromAt)}&endDate=${dateTransform(toAt)}`, 'GET')

    return await requestToJson(response)
}
