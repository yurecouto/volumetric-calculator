import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(96)}px;
  padding: ${RFValue(8)}px;
  background-color: #D1D1D1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
