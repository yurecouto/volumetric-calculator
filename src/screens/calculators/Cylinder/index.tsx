import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { volumeConversor } from '../../../utils/volumeConversor';
import { lengthConversor } from '../../../utils/lengthConversor';
import { areaConversor } from '../../../utils/areaConversor';
import CalculatorLayout from '../../../components/calculatorLayout';
import { Line } from './style';
import { getHmmByHeight } from '../../../utils/getHmmByHeight';
import { getAmm2ByDiameter } from '../../../utils/getAmm2ByDiameter';
import { getAmm2ByRay } from '../../../utils/getAmm2ByRay';
import { getAmm2ByPerimeter } from '../../../utils/getAmm2ByPerimeter';
import { getAmm2ByArea } from '../../../utils/getAmm2ByArea';

export default function Cylinder() {
  const default1d = "mm";
  const default2d = "mm2";
  const default3d = "mm3";

  const [canCalculate, setCanCalculate] = useState<boolean>(false);

  const [hmm, setHmm] = useState<string | undefined>(undefined);
  const [amm2, setAmm2] = useState<string | undefined>(undefined);
  const [h, setH] = useState<string | undefined>(undefined);
  const [a, setA] = useState<string | undefined>(undefined);
  const [r, setR] = useState<string | undefined>(undefined);
  const [p, setP] = useState<string | undefined>(undefined);
  const [d, setD] = useState<string | undefined>(undefined);
  const [v, setV] = useState<string | undefined>(undefined);

  const [measureH, setMeasureH] = useState<string>(default1d);
  const [measureA, setMeasureA] = useState<string>(default2d);
  const [measureR, setMeasureR] = useState<string>(default1d);
  const [measureP, setMeasureP] = useState<string>(default1d);
  const [measureD, setMeasureD] = useState<string>(default1d);
  const [measureV, setMeasureV] = useState<string>(default3d);
  const [measureOldV, setMeasureOldV] = useState<string>(measureV);

  const calculateByArea = () => {
    if (amm2 && hmm) {
      const volume = parseFloat(hmm) * parseFloat(amm2)

      setV(volumeConversor(volume, "mm3", measureV).toString())
    }
  };

  const arrangeMeasures = (measure: string, state: string) => {
    switch (state) {
      case "p":
        if (p) {
          setMeasureP(measure)
          setP(lengthConversor(parseFloat(p), measureP, measure).toString())
        } break
      case "d":
        if (d) {
          setMeasureD(measure)
          setD(lengthConversor(parseFloat(d), measureD, measure).toString())
        } break
      case "r":
        if (r) {
          setMeasureR(measure)
          setR(lengthConversor(parseFloat(r), measureR, measure).toString())
        } break
      case "a":
        if (a) {
          setMeasureA(measure)
          setA(areaConversor(parseFloat(a), measureA, measure)?.toString())
          getAmm2ByArea(areaConversor(parseFloat(a), measureA, "mm2")?.toString(), measureA, setAmm2)
        } break
      case "h":
        if (h) {
          setMeasureH(measure)
          setH(lengthConversor(parseFloat(h), measureH, measure).toString())
          getHmmByHeight(lengthConversor(parseFloat(h), measureH, "mm").toString(), measureH, setHmm)
        } break
    }
  };

  const arrangeValues = (value: string, state: string) => {
    switch (state) {
      case "p":
        setP(value)
        getAmm2ByPerimeter(value, measureP, measureA, setA, setAmm2)
        break
      case "d":
        setD(value)
        getAmm2ByDiameter(value, measureD, measureA, setA, setAmm2)
        break
      case "r":
        setR(value)
        getAmm2ByRay(value, measureR, measureA, setA, setAmm2)
        break
      case "a":
        setA(value)
        getAmm2ByArea(value, measureA, setAmm2)
        break
      case "h":
        setH(value)
        getHmmByHeight(value, measureH, setHmm)
        break
    }
  };

  useEffect(() => {
    if (amm2 && hmm && !canCalculate) {
      setCanCalculate(value => !value)
    }
  }, [amm2, hmm]);

  useEffect(() => {
    if (v) {
      setV(volumeConversor(parseFloat(v), measureOldV, measureV).toString())
      setMeasureOldV(measureV)
    }
  }, [measureV]);

  return (
    <CalculatorLayout
      calculate={calculateByArea}
      infoSvg='cylinder-page'
      infoText='CylinderInfo'
      setMeasureVolume={setMeasureV}
      measureVolume={default3d}
      canCalculate={canCalculate}
      volume={v}
    >
      <Input
        placeholder="Altura"
        value={h}
        setValue={(value) => arrangeValues(value, "h")}
        measurement={measureH}
        setMeasurement={(measure) => arrangeMeasures(measure, "h")}
      />
      <Line/>
      <Input
        placeholder="Area da Base"
        value={a !== "NaN" ? a : ""}
        area={true}
        setValue={(value) => arrangeValues(value, "a")}
        measurement={measureA}
        setMeasurement={(measure) => arrangeMeasures(measure, "a")}
      />
      <Input
        placeholder="Raio"
        value={r}
        setValue={(value) => arrangeValues(value, "r")}
        measurement={measureR}
        setMeasurement={(measure) => arrangeMeasures(measure, "r")}
      />
      <Input
        placeholder="Diametro"
        value={d}
        setValue={(value) => arrangeValues(value, "d")}
        measurement={measureD}
        setMeasurement={(measure) => arrangeMeasures(measure, "d")}
      />
      <Input
        placeholder="Perimetro"
        value={p}
        setValue={(value) => arrangeValues(value, "p")}
        measurement={measureP}
        setMeasurement={(measure) => arrangeMeasures(measure, "p")}
      />
    </CalculatorLayout>
  );
}
