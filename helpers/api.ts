import { apiAddress, historyAddress, latestAdress } from "../constants/api";
import { ICurrencyInTime, ILatest, RateOnDate, RateType } from "../types/api";


export const fetchLatestRates = async (): Promise<RateType[]> => {
  const response = await fetch(latestAdress);
  const latastRates: ILatest = await response.json();
  return Object.entries(latastRates.rates);
}

export const fetchCurrencyHistory = async (currency: string): Promise<RateOnDate[]> => {
  const currentDate = new Date();
  const previousDate = new Date(new Date().setDate(currentDate.getDate() - 7));
  const url = `${historyAddress}?symbols=${currency}&start_date=${previousDate.toISOString().slice(0,10)}&end_date=${currentDate.toISOString().slice(0,10)}`;
  const response = await fetch(url)
  const currencyHistory: {rates: ICurrencyInTime} = await response.json();
  const result: RateOnDate[]  = Object.entries(currencyHistory.rates).map(([date, rate]) => {
    return [date, rate[currency]]
  })
  return result
  
}