
import Layout from '../../../components/layout';
import { Container, InputBox, Line, SubContainer, Button, ButtonText, InfoText, InputContainer, InfoContainer, Title, ResultContainer } from './style';
import { useTranslation } from 'react-i18next';

import SVG from '../../../svgs/svgs';
import Input from '../../../components/input';
import useScreenSize from '../../../hooks/screenSize';
import Result from '../../../components/result';
import { LayoutAnimation, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Sphere() {
  const { t } = useTranslation();
  const { height } = useScreenSize();

  const [p, setP] = useState<string | undefined>(undefined);
  const [r, setR] = useState<string | undefined>(undefined);
  const [d, setD] = useState<string | undefined>(undefined);

  const [infoOpen, SetInfoOpen] = useState<boolean>(false);

  const handleInfo = () => {
    SetInfoOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <Layout>
      <Container height={height}>

        <SubContainer>
          <InputBox>

            <InfoContainer>
              <Title>Medidas</Title>

              <TouchableOpacity onPress={handleInfo}>
                <SVG title='info'/>
              </TouchableOpacity>
            </InfoContainer>

            {infoOpen && (
              <>
                <ResultContainer>
                  <SVG title="sphere-page"/>
                  <InfoText
                    multiline
                    textAlignVertical="top"
                  >
                    {t("SphereInfo")}
                  </InfoText>
                </ResultContainer>
              </>
            )}

            <InputContainer>
              <Input
                placeholder="Perimetro"
                value={p}
                setValue={setP}
              />
              <Input
                placeholder="Raio"
                value={r}
                setValue={setR}
              />
              <Input
                placeholder="Diametro"
                value={d}
                setValue={setD}
              />
            </InputContainer>

            <Line/>
            <Result/>
          </InputBox>

          <Button>
            <ButtonText>{t("Calculate")}</ButtonText>
          </Button>
        </SubContainer>

        {/* <ResultContainer>
          <SVG title="sphere-page"/>

          <InfoContainer>
            <InfoText>{t("SphereInfo")}</InfoText>
          </InfoContainer>
        </ResultContainer> */}

      </Container>
    </Layout>
  );
}
