import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React, { FC, ReactNode } from 'react';
import useGetRates from '../../../hooks/useGetTodos';
import store from '../../../store/store';
import { RateRow, StyledScrollView, Currency, Value } from './styles';
import { HistoryRouteType } from './types';



const RatesComponent: FC = () => {
  useGetRates();
  const filterText = store.filterText;
  const latestRates = store.latestRates.filter(([currency, _value]) => currency.toLowerCase().includes(filterText.toLowerCase().trim()));
  const navigation = useNavigation<NativeStackNavigationProp<HistoryRouteType>>();
  const navigateToHistory = (currency: string) => {
    navigation.navigate("History", { currency });
  };

  return (
    <StyledScrollView>
      {latestRates.map(([currency, value]): ReactNode => (
        <RateRow onPress={() => navigateToHistory(currency)} key={currency}>
          <Currency>{currency}</Currency>
          <Value>{value}</Value>
        </RateRow>)
      )}
    </StyledScrollView>
  );
};

export default observer(RatesComponent);