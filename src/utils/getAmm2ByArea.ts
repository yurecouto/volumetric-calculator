import { Dispatch, SetStateAction } from "react";
import { areaConversor } from "./areaConversor";

export const getAmm2ByArea = (
  a: number,
  measureA: string,
  setAmm2: Dispatch<SetStateAction<number | undefined>>
  ) => {
  const area = areaConversor(a, measureA, "mm2")

  setAmm2(area)
};
