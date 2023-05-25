import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import colors from '../../themes/colors';
import MenuFill from '../../svgs/menu-fill.svg';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(88)}px;
  padding: ${RFValue(8)}px;
  background-color: ${colors.BLUE_DEFAULT};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Left = styled.View``;

export const Right = styled.View``;

export const Text = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${colors.LIGHT_TEXT};
  font-weight: 500;
`;

