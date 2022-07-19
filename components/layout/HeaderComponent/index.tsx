import React, { FC } from 'react';
import { Header } from './styles';
import { PropsInterface } from '../../../types/components';

const HeaderComponent: FC<PropsInterface> = ({ children }) => {
  return (
    <Header >
      {children}
    </Header>
  );
};

export default HeaderComponent;