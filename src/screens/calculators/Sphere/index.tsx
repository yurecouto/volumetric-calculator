
import Layout from '../../../components/layout';
import { Container, InputBox, Line, InputContainer, Button, Text, ResultContainer, InfoContainer } from './style';
import { useTranslation } from 'react-i18next';

import SVG from '../../../svgs/svgs';
import Input from '../../../components/input';
import { ScrollView } from 'react-native';

export default function Sphere() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <ResultContainer>
          <SVG title="sphere-page"/>
          <InfoContainer>

          </InfoContainer>
        </ResultContainer>

        <InputContainer>
          <InputBox>
            <Input placeholder="Perimetro"/>
            <Line/>
            <Input placeholder="Raio"/>
            <Line/>
            <Input placeholder="Diametro"/>
          </InputBox>

          <Button>
            <Text>{t("Calculate")}</Text>
          </Button>
        </InputContainer>

      </Container>
    </Layout>
  );
}
