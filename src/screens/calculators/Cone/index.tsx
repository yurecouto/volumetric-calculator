import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { volumeConversor } from '../../../utils/volumeConversor';
import { lengthConversor } from '../../../utils/lengthConversor';
import { areaConversor } from '../../../utils/areaConversor';
import CalculatorLayout from '../../../components/calculatorLayout';
import { Line } from './style';

export default function Cone() {
  const default1d = "mm";
  const default2d = "mm2";
  const default3d = "mm3";

  const [rmm, setRmm] = useState<string | undefined>(undefined);
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

  const [canCalculate, setCanCalculate] = useState<boolean>(amm2 !== undefined && hmm !== undefined);

  const calculateByArea = () => {
    if (amm2 && hmm) {
      const volume = (parseFloat(hmm) * parseFloat(amm2)) / 3
      setV(volumeConversor(volume, "mm3", measureV).toString())
    }
  };

  useEffect(() => {
    if (amm2 !== undefined && measureA) {
      setA(areaConversor(parseFloat(amm2), "mm2", measureA)?.toString())
    }
  }, [measureA]);

  useEffect(() => {
    if (amm2 !== undefined && measureA) {
      setA(areaConversor(parseFloat(amm2), "mm2", measureA)?.toString())
    }
  }, [amm2]);

  useEffect(() => {
    if (a !== undefined && measureA) {
      setAmm2(areaConversor(parseFloat(a), measureA, "mm2")?.toString())
    }
  }, [a]);

  useEffect(() => {
    if (rmm !== undefined && measureA) {
      setAmm2((Math.PI * (parseFloat(rmm) * parseFloat(rmm))).toString())
    }
  }, [rmm]);

  useEffect(() => {
    if (rmm !== undefined) {
      setR(lengthConversor(parseFloat(rmm), "mm", measureR).toString())
    }
  }, [measureR]);

  useEffect(() => {
    if (r !== undefined) {
      setRmm(lengthConversor(parseFloat(r), measureR, "mm").toString())
    }
  }, [r, measureR]);

  useEffect(() => {
    if (h !== undefined) {
      setHmm(lengthConversor(parseFloat(h), measureH, "mm").toString())
    }
  }, [h, measureH]);

  useEffect(() => {
    if (d !== undefined) {
      setR(lengthConversor((parseFloat(d) / 2), measureD, measureR).toString())
    }
  }, [d, measureD]);

  useEffect(() => {
    if (p !== undefined) {
      setR(lengthConversor((parseFloat(p) / (2 * Math.PI)), measureP, measureR).toString())
    }
  }, [p, measureP]);

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
      infoSvg='cone-page'
      infoText='ConeInfo'
      setMeasureVolume={setMeasureV}
      measureVolume={default3d}
      canCalculate={canCalculate}
      volume={v}
    >
      <Input
        placeholder="Altura"
        value={h}
        setValue={setH}
        measurement={measureH}
        setMeasurement={setMeasureH}
      />
      <Line/>
      <Input
        placeholder="Area da Base"
        value={a}
        area={true}
        setValue={setA}
        measurement={measureA}
        setMeasurement={setMeasureA}
      />
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
      <Line/>
    </CalculatorLayout>
  );
}
