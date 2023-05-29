import { View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(View)`
  width: 100%;
  height: ${RFValue(80)}px;
  margin-bottom: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;
  background-color: #fff;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.5;
`;
