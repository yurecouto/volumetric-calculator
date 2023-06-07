import { LinearGradient } from "react-native-svg";

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
import ArrowRight from "./svgs/arrowright.svg"
import ArrowLeft from "./svgs/arrowleft.svg"
import Info from "./svgs/info-filled.svg"
import useScreenSize from "../hooks/screenSize";

interface Props {
  title: string;
}

export default function SVG({
  title,
  }: Props) {

  const { width } = useScreenSize();

  switch (title) {
    case "menu":
      return (
        <MenuFill width={24} height={24} color={colors.LIGHT_TEXT}/>
      );

    case "info":
      return (
        <Info width={24} height={24} color={colors.SECONDARY_BLUE}/>
      );

    case "circle":
      return (
        <Circle width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "sphere":
      return (
        <Sphere width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "sphere-page":
      return (
        <Sphere width={(width * 24) / 100} height={(width * 24) / 100} color={colors.SECONDARY_BLUE}/>
      );

    case "cylinder":
      return (
        <Cylinder width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "cylinder-page":
      return (
        <Cylinder width={(width * 24) / 100} height={(width * 24) / 100} color={colors.SECONDARY_BLUE}/>
      );

    case "cone":
      return (
        <Cone width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "cone-page":
      return (
        <Cone width={(width * 24) / 100} height={(width * 24) / 100} color={colors.SECONDARY_BLUE}/>
      );

    case "triangle":
      return (
        <Triangle width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "tetrahedron":
      return (
        <Tetrahedron width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "triangular-prism":
      return (
        <TriangularPrism width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "triangular-prism-page":
      return (
        <TriangularPrism width={(width * 24) / 100} height={(width * 24) / 100} color={colors.SECONDARY_BLUE}/>
      );

    case "square":
      return (
        <Square width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "cube":
      return (
        <Cube width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "pyramid":
      return (
        <Pyramid width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "hexahedron":
      return (
        <Hexahedron width={56} height={56} color={colors.SECONDARY_BLUE}/>
      );

    case "arrow-up":
      return (
        <ArrowUp width={24} height={24} color={colors.NOT_TOO_DARK}/>
      );

    case "arrow-down":
      return (
        <ArrowDown width={24} height={24} color={colors.NOT_TOO_DARK}/>
      );

    case "arrow-right":
      return (
        <ArrowRight width={24} height={24} color={colors.NOT_TOO_DARK}/>
      );

    case "arrow-left":
      return (
        <ArrowLeft width={32} height={32} color={colors.LIGHT_TEXT}/>
      );

    default:
      return (
        <></>
      );
  }
}
