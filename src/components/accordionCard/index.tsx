import { LayoutAnimation, Text } from 'react-native';
import {  Childreen, Container, Head, Left, Option, Right, Title } from './style';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SVG from '../../svgs/svgs';

interface Props {
  title: string;
  svg: JSX.Element;
  options: {
    title: string;
    svg: JSX.Element;
  }[]
}

export default function AccordionCard({
  title,
  svg,
  options
  }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <Container>

      <Head>
        <Left>
          {svg}
          <Title>{title}</Title>
        </Left>
        <TouchableOpacity onPress={toggleOpen}>
          <Right>
            <SVG title={isOpen ? "arrow-up" : "arrow-down"}/>
          </Right>
        </TouchableOpacity>
      </Head>

      {isOpen && (<Childreen>
        {options.map((option) => (
          <Option key={option.title}>
            <Left>
              {option.svg}
              <Title>{option.title}</Title>
            </Left>
            <Right/>
          </Option>
        ))}
      </Childreen>)}
    </Container>
  );
}
