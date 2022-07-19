import { FC } from 'react';
import { PropsInterface } from '../../../types/components';
import { Background } from './styles';
import HeaderComponent from '../HeaderComponent';

const ComonLayoutComponent: FC<PropsInterface> = ({ children }) => {
  return (
    <Background>
      {children}
    </Background>
  );
};

export default ComonLayoutComponent;