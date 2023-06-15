import { Dispatch, SetStateAction } from "react";
import { areaConversor } from "./areaConversor";

export const getAmm2ByArea = (
  a: string,
  measureA: string,
  setAmm2: Dispatch<SetStateAction<string | undefined>>
  ) => {
  const area = areaConversor(parseFloat(a), measureA, "mm2")

  setAmm2(area.toString())
};
