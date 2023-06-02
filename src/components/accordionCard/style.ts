import { View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled(View)`
  width: 100%;
  margin-bottom: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${colors.WHITE};
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${RFValue(8)}px;
  padding-right: ${RFValue(8)}px;
`;

export const Left = styled(View)`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled(View)`
  padding-right: ${RFValue(8)}px;
  width: 120px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.DARK_TEXT};
  font-weight: 500;
  margin-left: ${RFValue(16)}px;
`;

export const Head = styled(View)`
  width: 100%;
  height: ${RFValue(80)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Childreen = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Option = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionLine = styled(View)`
  width: 100%;
  height: ${RFValue(0.8)}px;
  background-color: ${colors.NOT_TOO_DARK};
`;
