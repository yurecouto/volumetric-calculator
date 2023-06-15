import { Dispatch, SetStateAction } from "react";
import { areaConversor } from "./areaConversor";
import { lengthConversor } from "./lengthConversor";

export const getAmm2ByDiameter = (
  d: string,
  measureD: string,
  measureA: string,
  setA: Dispatch<SetStateAction<string | undefined>>,
  setAmm2: Dispatch<SetStateAction<string | undefined>>) => {
  const dmm = lengthConversor(parseFloat(d), measureD, "mm")

  const area = Math.PI * Math.pow((dmm / 2), 2)
  setAmm2(area.toString())
  setA(areaConversor(area, "mm2", measureA)?.toString())
};
