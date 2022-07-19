import { makeAutoObservable } from "mobx";
import { IRatesHistory, RateOnDate, RateType } from "../types/api";

class Store {
  latestRates: RateType[] = []
  ratesHistory: IRatesHistory = {}
  filterText: string = "";
  
  constructor(){
    makeAutoObservable(this)
  }

  addHistory(currency: string, newHistory: RateOnDate[]){
    this.ratesHistory[currency] = newHistory 
  }

  addRates(newRates: RateType[]){
    this.latestRates = newRates
  }

  setFilterText (text: string) {
    this.filterText = text
  }
}

export default new Store();