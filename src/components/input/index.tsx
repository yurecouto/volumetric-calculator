import { useState } from "react";
import { Container, TextInput, dropdownStyles } from "./style";
import SelectDropdown from "react-native-select-dropdown";

interface Props {
  placeholder: string;
  value?: string;
  measurement?: string;
  area?: boolean;
  setValue?: (params: any) => void;
  setMeasurement?: (params: string) => void;
};

const measures1D = [
  "mm",
  "cm",
  "m",
  "km",
  "in",
  "ft",
  "yd",
  "mi",
];

const measures2D = [
  "mm2",
  "cm2",
  "m2",
  "km2",
  "in2",
  "ft2",
  "yd2",
  "mi2",
];

export default function Input({
  placeholder,
  value,
  setValue,
  measurement,
  area = false,
  setMeasurement = () => {}
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
        defaultValue={measurement}
        buttonStyle={dropdownStyles.dropdown}
        data={area ? measures2D : measures1D}
        onSelect={(selectedItem) => {setMeasurement(selectedItem)}}
      />
    </Container>
  );
}
