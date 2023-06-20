import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { volumeConversor } from '../../../utils/volumeConversor';
import { lengthConversor } from '../../../utils/lengthConversor';
import { areaConversor } from '../../../utils/areaConversor';
import CalculatorLayout from '../../../components/calculatorLayout';
import { Line } from './style';
import { getHmmByHeight } from '../../../utils/getHmmByHeight';
import { getAmm2ByPerimeter } from '../../../utils/getAmm2ByPerimeter';
import { getAmm2ByDiameter } from '../../../utils/getAmm2ByDiameter';
import { getAmm2ByRay } from '../../../utils/getAmm2ByRay';
import { getAmm2ByArea } from '../../../utils/getAmm2ByArea';
import { useTranslation } from 'react-i18next';

export default function Cone() {
  const { t } = useTranslation();

  const default1d = "mm";
  const default2d = "mm2";
  const default3d = "mm3";

  const [hmm, setHmm] = useState<number | undefined>(undefined);
  const [amm2, setAmm2] = useState<number | undefined>(undefined);
  const [h, setH] = useState<number | undefined>(undefined);
  const [a, setA] = useState<number | undefined>(undefined);
  const [r, setR] = useState<number | undefined>(undefined);
  const [p, setP] = useState<number | undefined>(undefined);
  const [d, setD] = useState<number | undefined>(undefined);
  const [v, setV] = useState<number | undefined>(undefined);

  const [measureH, setMeasureH] = useState<string>(default1d);
  const [measureA, setMeasureA] = useState<string>(default2d);
  const [measureR, setMeasureR] = useState<string>(default1d);
  const [measureP, setMeasureP] = useState<string>(default1d);
  const [measureD, setMeasureD] = useState<string>(default1d);
  const [measureV, setMeasureV] = useState<string>(default3d);
  const [measureOldV, setMeasureOldV] = useState<string>(measureV);

  const [canCalculate, setCanCalculate] = useState<boolean>(amm2 !== undefined && hmm !== undefined);

  const calculateByArea = () => {
    if (amm2 && hmm) {
      const volume = (hmm * amm2) / 3
      setV(volumeConversor(volume, "mm3", measureV))
    }
  };

  const arrangeMeasures = (measure: string, state: string) => {
    switch (state) {
      case "p":
        if (p) {
          setMeasureP(measure)
          setP(lengthConversor(p, measureP, measure))
        } break
      case "d":
        if (d) {
          setMeasureD(measure)
          setD(lengthConversor(d, measureD, measure))
        } break
      case "r":
        if (r) {
          setMeasureR(measure)
          setR(lengthConversor(r, measureR, measure))
        } break
      case "a":
        if (a) {
          setMeasureA(measure)
          setA(areaConversor(a, measureA, measure))
          getAmm2ByArea(areaConversor(a, measureA, "mm2"), measureA, setAmm2)
        } break
      case "h":
        if (h) {
          setMeasureH(measure)
          setH(lengthConversor(h, measureH, measure))
          getHmmByHeight(lengthConversor(h, measureH, "mm"), measureH, setHmm)
        } break
    }
  };

  const arrangeValues = (value: number, state: string) => {
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
      setV(volumeConversor(v, measureOldV, measureV))
      setMeasureOldV(measureV)
    }
  }, [measureV]);

  return (
    <CalculatorLayout
      calculate={calculateByArea}
      infoSvg='cone-page'
      infoText='ConeInfo'
      setMeasureVolume={setMeasureV}
      measureVolume={default3d}
      canCalculate={canCalculate}
      volume={v?.toString()}
    >
      <Input
        placeholder={t("Height")}
        value={h?.toString()}
        setValue={(value) => arrangeValues(value, "h")}
        measurement={measureH}
        setMeasurement={(measure) => arrangeMeasures(measure, "h")}
      />
      <Line/>
      <Input
        placeholder={t("BaseArea")}
        value={a?.toString()}
        area={true}
        setValue={setA}
        measurement={measureA}
        setMeasurement={setMeasureA}
      />
      <Input
        placeholder={t("Ray")}
        value={r?.toString()}
        setValue={setR}
        measurement={measureR}
        setMeasurement={setMeasureR}
      />
      <Input
        placeholder={t("Diameter")}
        value={d?.toString()}
        setValue={setD}
        measurement={measureD}
        setMeasurement={setMeasureD}
      />
      <Input
        placeholder={t("Perimeter")}
        value={p?.toString()}
        setValue={setP}
        measurement={measureP}
        setMeasurement={setMeasureP}
      />
      <Line/>
    </CalculatorLayout>
  );
}
