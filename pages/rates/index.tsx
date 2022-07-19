import { observer } from 'mobx-react-lite';
import React from 'react';
import ComonLayoutComponent from '../../components/layout/CommonLayoutComponent';
import RatesComponent from '../../components/rates/RatesComponent';
import SearchComponent from '../../components/SearchComponent';

const RatesPage = () => {
  return (
    <ComonLayoutComponent>
      <SearchComponent />
      <RatesComponent />
    </ComonLayoutComponent>
  );
};

export default observer(RatesPage);