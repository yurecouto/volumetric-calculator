import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import colors from "../../../themes/colors";

export const Line = styled.View`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: ${colors.NOT_TOO_DARK};
  margin-bottom: ${RFValue(8)}px;
`;
