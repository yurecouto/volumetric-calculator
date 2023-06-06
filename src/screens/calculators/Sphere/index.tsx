import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { volumeConversor } from '../../../utils/volumeConversor';
import { lengthConversor } from '../../../utils/lengthConversor';
import CalculatorLayout from '../../../components/calculatorLayout';

export default function Sphere() {
  const default1d = "mm";
  const default3d = "mm3";

  const [canCalculate, setCanCalculate] = useState<boolean>(false);

  const [rmm, setRmm] = useState<string | undefined>(undefined);
  const [r, setR] = useState<string | undefined>(undefined);
  const [p, setP] = useState<string | undefined>(undefined);
  const [d, setD] = useState<string | undefined>(undefined);
  const [v, setV] = useState<string | undefined>(undefined);

  const [measureR, setMeasureR] = useState<string>(default1d);
  const [measureP, setMeasureP] = useState<string>(default1d);
  const [measureD, setMeasureD] = useState<string>(default1d);
  const [measureV, setMeasureV] = useState<string>(default3d);
  const [measureOldV, setMeasureOldV] = useState<string>(measureV);

  const calculateByRmm = () => {
    if (rmm) {
      const volume = (4 / 3) * Math.PI * Math.pow(parseFloat(rmm), 3)
      setV(volumeConversor(volume, default3d, measureV).toString())
    }
  };

  useEffect(() => {
    if (rmm !== undefined) {
      setR(lengthConversor(parseFloat(rmm), "mm", measureR).toString())
    }
  }, [measureR])

  useEffect(() => {
    if (r !== undefined) {
      setRmm(lengthConversor(parseFloat(r), measureR, "mm").toString())
    }
  }, [r, measureR])

  useEffect(() => {
    if (d !== undefined) {
      setR(lengthConversor((parseFloat(d) / 2), measureD, measureR).toString())
    }
  }, [d, measureD])

  useEffect(() => {
    if (p !== undefined) {
      setR(lengthConversor((parseFloat(p) / (2 * Math.PI)), measureP, measureR).toString())
    }
  }, [p, measureP])

  useEffect(() => {
    if (!(p === undefined && r === undefined && d === undefined) && !canCalculate) {
      setCanCalculate(value => !value)
    }
  }, [p, r, d])

  useEffect(() => {
    if (v) {
      setV(volumeConversor(parseFloat(v), measureOldV, measureV).toString())
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
      volume={v}
    >
      <Input
        placeholder="Raio"
        value={r}
        setValue={setR}
        measurement={measureR}
        setMeasurement={setMeasureR}
      />
      <Input
        placeholder="Diametro"
        value={d}
        setValue={setD}
        measurement={measureD}
        setMeasurement={setMeasureD}
      />
      <Input
        placeholder="Perimetro"
        value={p}
        setValue={setP}
        measurement={measureP}
        setMeasurement={setMeasureP}
      />
    </CalculatorLayout>
  );
}
