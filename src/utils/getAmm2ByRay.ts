import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";
import { areaConversor } from "./areaConversor";

export const getAmm2ByRay = (
  r: number,
  measureR: string,
  measureA: string,
  setA: Dispatch<SetStateAction<number | undefined>>,
  setAmm2: Dispatch<SetStateAction<number | undefined>>) => {
  const rmm = lengthConversor(r, measureR, "mm")

  const area = Math.PI * Math.pow(rmm, 2)
  setAmm2(area)
  setA(areaConversor(area, "mm2", measureA))
};
