import { Dispatch, SetStateAction } from "react";
import { lengthConversor } from "./lengthConversor";
import { areaConversor } from "./areaConversor";

export const getAmm2ByRay = (
  r: string,
  measureR: string,
  measureA: string,
  setA: Dispatch<SetStateAction<string | undefined>>,
  setAmm2: Dispatch<SetStateAction<string | undefined>>) => {
  const rmm = lengthConversor(parseFloat(r), measureR, "mm")

  const area = Math.PI * Math.pow(rmm, 2)
  setAmm2(area.toString())
  setA(areaConversor(area, "mm2", measureA)?.toString())
};
