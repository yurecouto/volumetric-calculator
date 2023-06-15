import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";
import { areaConversor } from "./areaConversor";

export const getAmm2ByPerimeter = (
  p: string,
  measureP: string,
  measureA: string,
  setA: Dispatch<SetStateAction<string | undefined>>,
  setAmm2: Dispatch<SetStateAction<string | undefined>>) => {
  const pmm = lengthConversor(parseFloat(p), measureP, "mm")

  const area = Math.PI * Math.pow(pmm / (2 * Math.PI), 2)
  setAmm2(area.toString())
  setA(areaConversor(area, "mm2", measureA)?.toString())
};
