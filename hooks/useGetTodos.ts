import { useCallback, useEffect } from "react";
import { fetchLatestRates } from "../helpers/api";
import store from "../store/store";

const useGetRates = (): void  =>{

  const fetchRoutes =  useCallback(async () => {
    const routes = await fetchLatestRates();
    store.addRates(routes)
  },[])

  useEffect(() => {
    fetchRoutes()
    const fetctRatesInterval = setInterval(()=>{
      fetchRoutes()
    }, 60000)
    return () =>{
      clearInterval(fetctRatesInterval)
    }
  }, []);
};

export default useGetRates;