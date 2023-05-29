import colors from "../themes/colors";
import MenuFill from "./svgs/menu-fill.svg"
import Circle from "./svgs/circle.svg"
import Square from "./svgs/square.svg"
import Triangle from "./svgs/triangle.svg"

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
        <Circle width={48} height={48} color={colors.LIGHT_TEXT}/>
      )
    case 'triangle':
      return (
        <Square width={48} height={48} color={colors.LIGHT_TEXT}/>
      );
    case 'square':
      return (
        <Triangle width={48} height={48} color={colors.LIGHT_TEXT}/>
      );
    default:
      return (
        <></>
      );
  }
}
