import { useState } from 'react';
import { Container, TextInput, dropdownStyles } from './style';
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

export default function Input({
  placeholder,
  }: Props) {

  return (
    <Container>
      <TextInput
        keyboardType="numeric"
        placeholder={placeholder}
      />

      <SelectDropdown
        defaultValue='mm'
        buttonStyle={dropdownStyles.dropdown}
        data={medidasDistancia}
        onSelect={(selectedItem, index) => {}}
      />
    </Container>
  );
}
