import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { volumeConversor } from '../../../utils/volumeConversor';
import { lengthConversor } from '../../../utils/lengthConversor';
import CalculatorLayout from '../../../components/calculatorLayout';
import { useTranslation } from 'react-i18next';
import { getRmmByRay } from '../../../utils/getRmmByRay';
import { getRmmByPerimeter } from '../../../utils/getRmmByPerimeter';
import { getRmmByDiameter } from '../../../utils/getRmmByDiameter';

export default function Sphere() {
  const { t } = useTranslation();

  const default1d = "mm";
  const default3d = "mm3";

  const [canCalculate, setCanCalculate] = useState<boolean>(false);

  const [rmm, setRmm] = useState<number | undefined>(undefined);
  const [r, setR] = useState<number | undefined>(undefined);
  const [p, setP] = useState<number | undefined>(undefined);
  const [d, setD] = useState<number | undefined>(undefined);
  const [v, setV] = useState<number | undefined>(undefined);

  const [measureR, setMeasureR] = useState<string>(default1d);
  const [measureP, setMeasureP] = useState<string>(default1d);
  const [measureD, setMeasureD] = useState<string>(default1d);
  const [measureV, setMeasureV] = useState<string>(default3d);
  const [measureOldV, setMeasureOldV] = useState<string>(measureV);

  const calculateByRmm = () => {
    if (rmm) {
      const volume = (4 / 3) * Math.PI * Math.pow(rmm, 3)
      setV(volumeConversor(volume, default3d, measureV))
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
    }
  };

  const arrangeValues = (value: number, state: string) => {
    switch (state) {
      case "p":
        setP(value)
        getRmmByPerimeter(value, measureP, setRmm)
        break
      case "d":
        setD(value)
        getRmmByDiameter(value, measureD, setRmm)
        break
      case "r":
        setR(value)
        getRmmByRay(value, measureR, setRmm)
        break
    }
  };

  useEffect(() => {
    if (!(p === undefined && r === undefined && d === undefined) && !canCalculate) {
      setCanCalculate(value => !value)
    }
  }, [p, r, d])

  useEffect(() => {
    if (v) {
      setV(volumeConversor(v, measureOldV, measureV))
      setMeasureOldV(measureV)
    }
  }, [measureV])

  return (
    <CalculatorLayout
      calculate={calculateByRmm}
      infoSvg='sphere-page'
      infoText='SphereInfo'
      setMeasureVolume={setMeasureV}
      measureVolume={default3d}
      canCalculate={canCalculate}
      volume={v?.toString()}
    >
      <Input
        placeholder={t("Ray")}
        value={r?.toString()}
        setValue={(value) => arrangeValues(value, "r")}
        measurement={measureR}
        setMeasurement={(measure) => arrangeMeasures(measure, "r")}
      />
      <Input
        placeholder={t("Diameter")}
        value={d?.toString()}
        setValue={(value) => arrangeValues(value, "d")}
        measurement={measureD}
        setMeasurement={(measure) => arrangeMeasures(measure, "d")}
      />
      <Input
        placeholder={t("Perimeter")}
        value={p?.toString()}
        setValue={(value) => arrangeValues(value, "p")}
        measurement={measureP}
        setMeasurement={(measure) => arrangeMeasures(measure, "p")}
      />
    </CalculatorLayout>
  );
}
