import styled from 'styled-components/native';
import colors from '../../../themes/colors';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  height?: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${(props: { height: number; }) => (props.height * 90) / 100}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SubContainer = styled.View`
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

export const ButtonText = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${colors.LIGHT_TEXT};
  font-weight: 600;
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${colors.DARK_TEXT};
  text-align: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.DARK_TEXT};
  text-align: center;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ResultBox = styled.View`

`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
