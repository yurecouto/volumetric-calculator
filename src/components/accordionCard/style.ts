import { View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled(View)`
  width: 100%;
  height: ${RFValue(80)}px;
  margin-bottom: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  background-color: #fff;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled(View)`
  height: 80px;
  border: 1px solid red;
  padding-left: ${RFValue(8)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled(View)`
  width: 80px;
  height: 80px;
  border: 1px solid red;
  padding-right: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.DARK_TEXT};
  font-weight: 500;
  margin-left: ${RFValue(16)}px;
`;
