import { LinearGradient } from 'react-native-svg';

import colors from "../themes/colors";
import MenuFill from "./svgs/menu-fill.svg"
import Circle from "./svgs/circle.svg"
import Square from "./svgs/square.svg"
import Triangle from "./svgs/triangle.svg"
import ArrowUp from "./svgs/arrow-up.svg"
import ArrowDown from "./svgs/arrow-down.svg"
import Sphere from "./svgs/sphere.svg"
import Cylinder from "./svgs/cylinder.svg"
import Cone from "./svgs/cone.svg"
import Tetrahedron from "./svgs/tetrahedron.svg"
import TriangularPrism from "./svgs/triangular-prism.svg"
import Cube from "./svgs/cube.svg"
import Hexahedron from "./svgs/hexahedron.svg"
import Pyramid from "./svgs/pyramid.svg"
import Test from "./svgs/test.svg"

interface Props {
  title: string;
}

export default function SVG({
  title,
  }: Props) {
  switch (title) {
    case 'menu':
      return (
        <MenuFill width={24} height={24} color={colors.LIGHT_TEXT}/>
      );

    case 'circle':
      return (
        <Circle width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'sphere':
      return (
        <Sphere width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'cylinder':
      return (
        <Cylinder width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'cone':
      return (
        <Cone width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'triangle':
      return (
        <Triangle width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'tetrahedron':
      return (
        <Tetrahedron width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'triangular-prism':
      return (
        <TriangularPrism width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'square':
      return (
        <Square width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'cube':
      return (
        <Cube width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'pyramid':
      return (
        <Pyramid width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'hexahedron':
      return (
        <Hexahedron width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'arrow-up':
      return (
        <ArrowUp width={24} height={24} color={colors.NOT_TOO_DARK}/>
      );

    case 'arrow-down':
      return (
        <ArrowDown width={24} height={24} color={colors.NOT_TOO_DARK}/>
      );

    default:
      return (
        <></>
      );
  }
}
