import { useState } from 'react';
import { Container, TextInput, dropdownStyles, SubContainer, Title } from './style';
import SelectDropdown from 'react-native-select-dropdown';

interface Props {
  value?: string;
  measurement?: string;
  setMeasurement: (params: string) => void;
};

const measures3D = ["ml", "cl", "dl", "l", "kl", "in3", "mm3", "cm3", "m3", "gal"];

export default function Result({
  value = "",
  measurement,
  setMeasurement
}: Props) {

  return (
    <Container>
      <Title>Resultado</Title>
      <SubContainer>
        <TextInput
          keyboardType="numeric"
          value={value}
        />

        <SelectDropdown
          defaultValue={measurement}
          buttonStyle={dropdownStyles.dropdown}
          data={measures3D}
          onSelect={(selectedItem) => {setMeasurement(selectedItem)}}
        />
      </SubContainer>
    </Container>
  );
}
