import { Dispatch, SetStateAction } from "react";
import { areaConversor } from "./areaConversor";
import { lengthConversor } from "./lengthConversor";

export const getAmm2ByDiameter = (
  d: number,
  measureD: string,
  measureA: string,
  setA: Dispatch<SetStateAction<number | undefined>>,
  setAmm2: Dispatch<SetStateAction<number | undefined>>) => {
  const dmm = lengthConversor(d, measureD, "mm")

  const area = Math.PI * Math.pow((dmm / 2), 2)
  setAmm2(area)
  setA(areaConversor(area, "mm2", measureA))
};
