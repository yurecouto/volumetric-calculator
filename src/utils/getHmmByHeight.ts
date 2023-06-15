import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";

export const getHmmByHeight = (
  h: string,
  measureH: string,
  setHmm: Dispatch<SetStateAction<string | undefined>>) => {
  const hmm = lengthConversor(parseFloat(h), measureH, "mm")

  return setHmm(hmm.toString())
};
