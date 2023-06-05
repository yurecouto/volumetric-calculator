import { View } from 'react-native';

import { Container, Left, Right, Text } from './style';

import MenuFill from '../../svgs/svgs/menu-fill.svg';
import colors from '../../themes/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SVG from '../../svgs/svgs';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Props {
  height: number;
}

export default function Header({
  height
  }: Props) {
  const navigation = useNavigation();
  const route = useRoute();

  const currentScreen = route.name;

  const handleMenu = () => {
    console.log("Alguem clicou")
  }

  const handleGoHome = () => {
    navigation.navigate("Home" as never)
  }

  return (
    <Container height={height}>
      {currentScreen !== "Home" ? (
        <TouchableOpacity onPress={handleGoHome}>
          <Left>
            <SVG title={"arrow-left"}/>
            <Text>Volume Wizard</Text>
          </Left>
        </TouchableOpacity>
      ) : (
        <Left>
          {currentScreen !== "Home" && (
            <SVG title={"arrow-left"}/>
          )}
          <Text>Volume Wizard</Text>
        </Left>
      )}

      <Right>
        <TouchableOpacity onPress={handleMenu}>
          <SVG title="menu"/>
        </TouchableOpacity>
      </Right>
    </Container>
  );
}
