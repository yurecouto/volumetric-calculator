import { View } from 'react-native';

import { Container, SubContainer } from './style';
import { ReactNode } from 'react';
import Header from '../header';
import useScreenSize from '../../hooks/screenSize';

interface Props {
  children?: ReactNode;
}

export default function Layout({
  children,
  }: Props) {

  const { height } = useScreenSize();

  return (
    <Container>
      <Header height={height}/>
      <SubContainer>
        {children}
      </SubContainer>
    </Container>
  );
}
