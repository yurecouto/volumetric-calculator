import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";

export const getRmmByDiameter = (
  d: number,
  measureD: string,
  setRmm: Dispatch<SetStateAction<number | undefined>>) => {

  const dmm = lengthConversor(d, measureD, "mm");
  const rmm = dmm / 2;

  return setRmm(rmm)
};
