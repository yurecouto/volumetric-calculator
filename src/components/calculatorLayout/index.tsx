
import Layout from '../../components/layout';
import { Container, InputBox, SubContainer, Button, ButtonText, InfoText, InputContainer, InfoContainer, Title, ResultContainer, InferiorContainer, styles } from './style';
import { useTranslation } from 'react-i18next';

import SVG from '../../svgs/svgs';
import useScreenSize from '../../hooks/screenSize';
import Result from '../../components/result';
import { LayoutAnimation, ScrollView, TouchableOpacity } from 'react-native';
import { ReactNode, useState } from 'react';

interface Props {
  volume?: string;
  canCalculate?: boolean;
  infoSvg: string;
  infoText: string;
  children?: ReactNode;
  measureVolume: string;
  calculate: (params: string) => void;
  setMeasureVolume: (params: string) => void;
};

export default function CalculatorLayout({
  volume,
  setMeasureVolume,
  canCalculate,
  calculate,
  infoSvg,
  infoText,
  children,
  measureVolume
}: Props) {
  const { t } = useTranslation();
  const { height } = useScreenSize();

  const [infoOpen, SetInfoOpen] = useState<boolean>(false);

  const handleInfo = () => {
    SetInfoOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <Layout>
      <ScrollView style={styles.scrollContainer}>
        <Container height={height}>
          <SubContainer>
            <InputBox>

              <InfoContainer>
                <Title>{t("Measurements")}</Title>

                <TouchableOpacity onPress={handleInfo}>
                  <SVG title='info'/>
                </TouchableOpacity>
              </InfoContainer>

              {infoOpen && (
                <>
                  <ResultContainer>
                    <SVG title={infoSvg}/>
                    <InfoText
                      multiline
                      textAlignVertical="top"
                    >
                      {t(infoText)}
                    </InfoText>
                  </ResultContainer>
                </>
              )}

              <InputContainer>
                {children}
              </InputContainer>
            </InputBox>

            <InferiorContainer>
              <Result value={volume} setMeasurement={setMeasureVolume} measurement={measureVolume}/>

              <Button active={canCalculate} onPress={calculate}>
                <ButtonText>{t("Calculate")}</ButtonText>
              </Button>
            </InferiorContainer>
          </SubContainer>
        </Container>
      </ScrollView>
    </Layout>
  );
}
