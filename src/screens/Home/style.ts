import styled from 'styled-components/native';
import colors from '../../themes/colors';

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.BLUE_DEFAULT};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
