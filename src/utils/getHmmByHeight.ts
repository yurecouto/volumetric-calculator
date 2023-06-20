import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";

export const getHmmByHeight = (
  h: number,
  measureH: string,
  setHmm: Dispatch<SetStateAction<number | undefined>>) => {
  const hmm = lengthConversor(h, measureH, "mm")

  return setHmm(hmm)
};
