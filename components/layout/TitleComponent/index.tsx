import React, { FC } from 'react';
import { PropsInterface } from '../../../types/components';
import { Title } from './styles';

const TitleComponent: FC<PropsInterface> = ({ children }) => {
  return (
    <Title>
      {children}
    </Title>
  );
};

export default TitleComponent;