import { useState } from 'react';
import { Container, TextInput, dropdownStyles } from './style';
import SelectDropdown from 'react-native-select-dropdown';

interface Props {
  placeholder: string;
  value?: string;
  setValue?: (params: any) => void
};

const medidasDistancia = [
  'mm',
  'cm',
  'm',
  'km',
  'in',
  'ft',
  'yd',
  'mi',
];

export default function Input({
  placeholder,
  value,
  setValue,

  }: Props) {

  return (
    <Container>
      <TextInput
        keyboardType="numeric"
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
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
