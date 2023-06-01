import colors from "../themes/colors";
import MenuFill from "./svgs/menu-fill.svg"
import Circle from "./svgs/circle.svg"
import Square from "./svgs/square.svg"
import Triangle from "./svgs/triangle.svg"
import ArrowUp from "./svgs/arrow-up.svg"
import ArrowDown from "./svgs/arrow-down.svg"

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

    case 'triangle':
      return (
        <Triangle width={56} height={56} color={colors.LIGHT_TEXT}/>
      );

    case 'square':
        return (
      <Square width={56} height={56} color={colors.LIGHT_TEXT}/>
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
