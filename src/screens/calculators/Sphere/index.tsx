
import Layout from '../../../components/layout';
import { Container, InputBox } from './style';
import { useTranslation } from 'react-i18next';

import SVG from '../../../svgs/svgs';
import Input from '../../../components/input';

export default function Sphere() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <SVG title="sphere-page"/>
        <InputBox>
          <Input placeholder="Perimetro"/>
          <Input placeholder="Raio"/>
          <Input placeholder="Diametro"/>
        </InputBox>
      </Container>
    </Layout>
  );
}
