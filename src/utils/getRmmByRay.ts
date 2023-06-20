import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";

export const getRmmByRay = (
  r: number,
  measureR: string,
  setRmm: Dispatch<SetStateAction<number | undefined>>) => {
  const rmm = lengthConversor(r, measureR, "mm")

  return setRmm(rmm)
};
