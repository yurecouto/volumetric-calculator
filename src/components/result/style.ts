import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import colors from "../../themes/colors";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.DARK_TEXT};
  text-align: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const SubContainer = styled.View`
  width: 100%;
  margin-top: ${RFValue(8)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  width: 70%;
  height: ${RFValue(40)}px;
  border: 2px solid ${colors.PRIMARY_BLUE};
  font-size: ${RFValue(16)}px;
  padding-left: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
`;

export const dropdownStyles = StyleSheet.create({
  dropdown: {
    width: "26%",
    height: RFValue(40),
    borderColor: colors.PRIMARY_BLUE,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
});
