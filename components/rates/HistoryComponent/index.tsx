import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import useGetHistory from '../../../hooks/useGetHistory';
import store from '../../../store/store';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { HistoryPropsInterface } from './types';
import { Chart, ChartContainer } from './styles';

const HistoryComponent: FC<HistoryPropsInterface> = ({ currency }) => {
  useGetHistory(currency);
  const history = store.ratesHistory[currency];



  const contentInset = { top: 20, bottom: 20 };
  if (!history) return null;
  return (
    <ChartContainer>
      <YAxis
        style={{ marginTop: -10, marginBottom: 25, width: 80 }}
        data={history.map(([date, value]) => value)}
        contentInset={contentInset}
        svg={{
          fill: 'black',
          fontSize: 10,
        }}
        numberOfTicks={7}
      />
      <Chart>
        <LineChart
          style={{ height: 200, width: "100%" }}
          data={history.map(([_date, value]) => value)}
          svg={{ stroke: 'rgb(134, 65, 244)' }}
          contentInset={{ top: 40, bottom: 20 }}
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ width: "100%" }}
          data={history.map(([date, _value]) => date)}
          formatLabel={(_date: string, index: number) => (history.map(([date, _value]) => date)[index].slice(-2))}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
      </Chart >
    </ChartContainer >
  );
};

export default observer(HistoryComponent);