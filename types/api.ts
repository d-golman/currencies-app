export type RateType =  [currency:string, value: number];

interface IRates {
  [currency: string]: number
}

export interface ICurrencyInTime {
  [date: string]: IRates
}

export type RateOnDate = [date: string, value: number]

export interface IRatesHistory {
  [currency: string]: RateOnDate[]
}

export interface ILatest {  
  success: boolean,
  date: string,
  base: string,
  rates: IRates
 }
