import styled from 'styled-components/native';
import colors from '../../themes/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

export const CardContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${RFValue(8)}px;
`;

export const TitleContainer = styled.View`
  width: 100%;
    padding: ${RFValue(8)}px;
`;

export const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export const Text = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.DARK_TEXT};
  font-weight: 500;
`;
