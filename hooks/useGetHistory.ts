import { useCallback, useEffect } from "react";
import { fetchCurrencyHistory } from "../helpers/api";
import store from "../store/store";

const useGetHistory = (currency: string): void  =>{

  const fetchHistory =  useCallback(async () => {
    const history = await fetchCurrencyHistory(currency);
    store.addHistory(currency, history)
  },[])

  useEffect(() => {
    fetchHistory()
  }, []);
};

export default useGetHistory;