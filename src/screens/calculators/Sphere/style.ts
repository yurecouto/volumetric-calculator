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

export const InputBox = styled.View`
  width: 100%;
  padding: ${RFValue(8)}px;
  background-color: ${colors.WHITE};
  border-radius: ${RFValue(8)}px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
