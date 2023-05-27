import { View } from 'react-native';

import { Container, SubContainer } from './style';
import { ReactNode } from 'react';
import Header from '../header';

interface Props {
  children?: ReactNode;
}

export default function Layout({
  children,
  }: Props) {
  return (
    <Container>
      <Header/>
      <SubContainer>
        {children}
      </SubContainer>
    </Container>
  );
}
