import Input from '../../../components/input';
import { useEffect, useState } from 'react';
import { volumeConversor } from '../../../utils/volumeConversor';
import { lengthConversor } from '../../../utils/lengthConversor';
import { areaConversor } from '../../../utils/areaConversor';
import CalculatorLayout from '../../../components/calculatorLayout';
import { Line } from './style';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function Prism() {
  const { t } = useTranslation();

  const default1d = "mm";
  const default2d = "mm2";
  const default3d = "mm3";

  const [hmm, setHmm] = useState<string | undefined>(undefined);
  const [amm2, setAmm2] = useState<string | undefined>(undefined);
  const [h, setH] = useState<string | undefined>(undefined);
  const [a, setA] = useState<string | undefined>(undefined);
  const [sideA, setSideA] = useState<string | undefined>(undefined);
  const [sideB, setSideB] = useState<string | undefined>(undefined);
  const [sideC, setSideC] = useState<string | undefined>(undefined);

  const [v, setV] = useState<string | undefined>(undefined);

  const [measureH, setMeasureH] = useState<string>(default1d);
  const [measureA, setMeasureA] = useState<string>(default2d);
  const [measureSideA, setMeasureSideA] = useState<string>(default1d);
  const [measureSideB, setMeasureSideB] = useState<string>(default1d);
  const [measureSideC, setMeasureSideC] = useState<string>(default1d);

  const [measureV, setMeasureV] = useState<string>(default3d);
  const [measureOldV, setMeasureOldV] = useState<string>(measureV);

  const [canCalculate, setCanCalculate] = useState<boolean>(amm2 !== undefined && hmm !== undefined);

  const calculateByArea = () => {
    if (amm2 && hmm) {
      const volume = parseFloat(hmm) * parseFloat(amm2)
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
    if (h !== undefined) {
      setHmm(lengthConversor(parseFloat(h), measureH, "mm").toString())
    }
  }, [h, measureH]);

  useEffect(() => {
    if (sideA !== undefined && sideB !== undefined && sideC !== undefined) {
      if (parseFloat(sideA) <= 0 || parseFloat(sideB) <= 0 || parseFloat(sideB) <= 0) {
        Alert.alert("Erro", "Os lados precisam ser maiores que 0")
      }

      if (!(sideA + sideB > sideB && sideA + sideB > sideB && sideB + sideB > sideA)) {
        Alert.alert("Erro", "Insira valores possiveis de se formar um triangulo")
      }

      const A = lengthConversor(parseFloat(sideA), measureSideA, "mm")
      const B = lengthConversor(parseFloat(sideB), measureSideA, "mm")
      const C = lengthConversor(parseFloat(sideC), measureSideA, "mm")

      const semiPerimeter = (A + B + C) / 2;
      const area = Math.sqrt(semiPerimeter * (semiPerimeter - A) * (semiPerimeter - B) * (semiPerimeter - C));

      setAmm2(area.toString())
    }
  }, [sideA, sideB, sideC, measureSideA, measureSideB, measureSideC]);

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
      infoSvg='triangular-prism-page'
      infoText='PrismInfo'
      setMeasureVolume={setMeasureV}
      measureVolume={default3d}
      canCalculate={canCalculate}
      volume={v}
    >
      <Input
        placeholder={t("Height")}
        value={h}
        setValue={setH}
        measurement={measureH}
        setMeasurement={setMeasureH}
      />
      <Line/>
      <Input
        placeholder={t("BaseArea")}
        value={a}
        area={true}
        setValue={setA}
        measurement={measureA}
        setMeasurement={setMeasureA}
      />
      <Input
        placeholder={t("SideA")}
        value={sideA}
        setValue={setSideA}
        measurement={measureSideA}
        setMeasurement={setMeasureSideA}
      />
      <Input
        placeholder={t("SideB")}
        value={sideB}
        setValue={setSideB}
        measurement={measureSideB}
        setMeasurement={setMeasureSideB}
      />
      <Input
        placeholder={t("SideC")}
        value={sideC}
        setValue={setSideC}
        measurement={measureSideC}
        setMeasurement={setMeasureSideC}
      />
      <Line/>
    </CalculatorLayout>
  );
}
