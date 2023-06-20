import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";

export const getRmmByPerimeter = (
  p: number,
  measureP: string,
  setRmm: Dispatch<SetStateAction<number | undefined>>) => {

  const pmm = lengthConversor(p, measureP, "mm");

  const rmm = pmm / (2 * Math.PI);

  return setRmm(rmm);
};
