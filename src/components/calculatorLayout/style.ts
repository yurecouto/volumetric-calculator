import styled from 'styled-components/native';
import colors from '../../themes/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

interface ContainerProps {
  height?: number;
}

interface ButtonProps {
  active?: boolean;
}

export const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${(props: { height: number; }) => (props.height * 90) / 100}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: ${RFValue(8)}px;
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
  height: 100%;
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

export const InferiorContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { active: boolean }) => props.active ? colors.PRIMARY_BLUE : colors.PRIMARY_BLUE_INACTIVE};
  border-radius: ${RFValue(8)}px;
  margin-top: ${RFValue(16)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.LIGHT_TEXT};
  font-weight: 600;
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${colors.DARK_TEXT};
  text-align: center;
  height: 100%;
  width: 70%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.DARK_TEXT};
  text-align: center;
`;

export const ResultContainer = styled.View`
  width: 100%;
  height: auto;
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
  margin-bottom: 16px;

`;

export const InfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;


export const InputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
