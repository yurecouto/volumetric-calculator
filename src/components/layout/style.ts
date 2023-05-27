import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import colors from '../../themes/colors';

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.BLUE_DEFAULT};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubContainer = styled.View`
  width: 100%;
  padding: ${RFValue(8)}px;
`;

