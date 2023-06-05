import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";
import colors from '../../themes/colors';

interface ContainerProps {
  height?: string;
}

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${(props: { height: number; }) => (props.height * 10) / 100}px;
  padding: ${RFValue(8)}px;
  background-color: ${colors.PRIMARY_BLUE};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Left = styled.View`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Right = styled.View``;

export const Text = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${colors.LIGHT_TEXT};
  font-weight: 500;
`;

