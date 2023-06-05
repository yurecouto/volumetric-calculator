import { useState } from 'react';
import { Container, TextInput, dropdownStyles, SubContainer, Title } from './style';
import SelectDropdown from 'react-native-select-dropdown';

interface Props {
  placeholder: string;
};

const medidasDistancia = [
  'mm', // milímetros
  'cm', // centímetros
  'm', // metros
  'km', // quilômetros
  'in', // polegadas
  'ft', // pés
  'yd', // jardas
  'mi', // milhas
];

export default function Result() {

  return (
    <Container>
      <Title>Resultado</Title>
      <SubContainer>
        <TextInput
          keyboardType="numeric"
        />

        <SelectDropdown
          defaultValue='mm'
          buttonStyle={dropdownStyles.dropdown}
          data={medidasDistancia}
          onSelect={(selectedItem, index) => {}}
        />
      </SubContainer>
    </Container>
  );
}
