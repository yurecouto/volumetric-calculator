import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";
import { areaConversor } from "./areaConversor";

export const getAmm2ByPerimeter = (
  p: number,
  measureP: string,
  measureA: string,
  setA: Dispatch<SetStateAction<number | undefined>>,
  setAmm2: Dispatch<SetStateAction<number | undefined>>) => {
  const pmm = lengthConversor(p, measureP, "mm")

  const area = Math.PI * Math.pow(pmm / (2 * Math.PI), 2)
  setAmm2(area)
  setA(areaConversor(area, "mm2", measureA))
};
