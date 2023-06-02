import { LayoutAnimation, Text } from 'react-native';
import {  Childreen, Container, Head, Left, Option, OptionLine, Right, Title } from './style';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SVG from '../../svgs/svgs';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
interface Props {
  title: string;
  svg: JSX.Element;
  options: Option[]
}

interface Option {
  title: string;
  calculator: string;
  svg: JSX.Element;
}

export default function AccordionCard({
  title,
  svg,
  options
  }: Props) {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const handleCalculator = (option: string) => {
    navigation.navigate(option as never)
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

      {isOpen && (
        <Childreen>
          {options.map((option: Option, index) => (
            <React.Fragment key={index.toString()}>
              <OptionLine/>
              <Option>
                <Left>
                  {option.svg}
                  <Title>{option.title}</Title>
                </Left>
                <TouchableOpacity onPress={() => handleCalculator(option.calculator)}>
                  <Right>
                    <SVG title={"arrow-right"}/>
                  </Right>
                </TouchableOpacity>
              </Option>
            </React.Fragment>
          ))}
        </Childreen>
      )}
    </Container>
  );
}
