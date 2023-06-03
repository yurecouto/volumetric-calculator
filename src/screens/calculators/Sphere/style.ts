import styled from 'styled-components/native';
import colors from '../../../themes/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: ${RFValue(8)}px;
`;

export const Line = styled.View`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: ${colors.NOT_TOO_DARK};
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const InputBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const InputContainer = styled.View`
  width: 100%;
  background-color: ${colors.WHITE};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(8)}px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.PRIMARY_BLUE};
  border-radius: ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${colors.LIGHT_TEXT};
  font-weight: 600;
`;

export const ResultContainer = styled.View`
  width: 100%;
  background-color: ${colors.WHITE};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(8)}px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  width: 60%;
  height: ${RFValue(200)}px;
  border: 1px solid red;
`;
