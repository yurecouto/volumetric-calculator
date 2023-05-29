import { Text } from 'react-native';
import {  Container, Left, Right, Title } from './style';
import Circle from '../../svgs/circle.svg';
import colors from '../../themes/colors';

interface Props {
  title: string;
  svg: JSX.Element
}

export default function AccordionCard({
  title,
  svg
  }: Props) {

  return (
    <Container>
      <Left>
        {svg}
        <Title>{title}</Title>
      </Left>
      <Right/>
    </Container>
  );
}
