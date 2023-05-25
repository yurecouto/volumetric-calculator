import { View } from 'react-native';

import { Container, Left, Right, Text } from './style';

import MenuFill from '../../svgs/menu-fill.svg';
import colors from '../../themes/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header() {

  const handleMenu = () => {}

  return (
    <Container>
      <Left>
        <Text>Volume Wizard</Text>
      </Left>

      <Right>
        {/* <Icon icon="mingcute:menu-fill" /> */}
        <TouchableOpacity onPress={handleMenu}>
          <MenuFill width={24} height={24} color={colors.LIGHT_TEXT}/>
        </TouchableOpacity>
      </Right>
    </Container>
  );
}
