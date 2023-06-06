import { ScrollView } from 'react-native';

import Layout from '../../components/layout';
import { styles, CardContainer, TitleContainer, Text } from './style';
import AccordionCard from '../../components/accordionCard';
import { useTranslation } from 'react-i18next';

import SVG from '../../svgs/svgs';

export default function Home() {
  const { t } = useTranslation();

  const cards = [
    {
      shape: t("Circular"),
      svg: <SVG title="circle"/>,
      types: [
        {
          title: t("Sphere"),
          svg: <SVG title="sphere"/>,
          calculator: "Sphere"
        },
        {
          title: t("Cylinder"),
          svg: <SVG title="cylinder"/>,
          calculator: "Cylinder"
        },
        {
          title: t("Cone"),
          svg: <SVG title="cone"/>,
          calculator: "Cone"
        },
      ]
    },
    {
      shape: t("Triangular"),
      svg: <SVG title="triangle"/>,
      types: [
        {
          title: t("Tetrahedron"),
          svg: <SVG title="tetrahedron"/>,
          calculator: "sphere"
        },
        {
          title: t("Prism"),
          svg: <SVG title="triangular-prism"/>,
          calculator: "sphere"
        },
      ]
    },
    {
      shape: t("Rectangular"),
      svg: <SVG title="square"/>,
      types: [
        {
          title: t("Cube"),
          svg: <SVG title="cube"/>,
          calculator: "sphere"
        },
        {
          title: t("Pyramid"),
          svg: <SVG title="pyramid"/>,
          calculator: "sphere"
        },
        {
          title: t("Hexahedron"),
          svg: <SVG title="hexahedron"/>,
          calculator: "sphere"
        },
      ]
    },
  ];

  return (
    <Layout>
      <ScrollView style={styles.scrollContainer}>
        <TitleContainer>
          <Text>{t("InitialShapes")}</Text>
        </TitleContainer>

        <CardContainer>
          {cards.map((card, index) => (
            <AccordionCard
              key={index.toString()}
              title={card.shape}
              svg={card.svg}
              options={card.types}
            />
          ))}
        </CardContainer>

      </ScrollView>
    </Layout>
  );
}
