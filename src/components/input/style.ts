import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import colors from "../../themes/colors";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  width: 70%;
  height: ${RFValue(44)}px;
  border: 2px solid ${colors.PRIMARY_BLUE};
  font-size: ${RFValue(18)}px;
  padding-left: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
`;

export const dropdownStyles = StyleSheet.create({
  dropdown: {
    width: "26%",
    borderColor: colors.PRIMARY_BLUE,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
});
