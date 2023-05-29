import { View } from 'react-native';

import { Container, Left, Right, Text } from './style';

import MenuFill from '../../svgs/svgs/menu-fill.svg';
import colors from '../../themes/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SVG from '../../svgs/svgs';

export default function Header() {

  const handleMenu = () => {
    console.log("Alguem clicou")
  }

  return (
    <Container>
      <Left>
        <Text>Volume Wizard</Text>
      </Left>

      <Right>
        <TouchableOpacity onPress={handleMenu}>
          <SVG title="menu"/>
        </TouchableOpacity>
      </Right>
    </Container>
  );
}
