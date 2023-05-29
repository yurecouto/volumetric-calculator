import { ScrollView, StyleSheet, View } from 'react-native';

import Layout from '../../components/layout';
import { styles, CardContainer, TitleContainer, Text } from './style';
import AccordionCard from '../../components/accordionCard';
import { useTranslation } from 'react-i18next';

// import Circle from '../../svgs/circle.svg';
// import Triangle from '../../svgs/triangle.svg';
// import Square from '../../svgs/square.svg';
import colors from '../../themes/colors';
import SVG from '../../svgs/svgs';

export default function Home() {
  const { t } = useTranslation();

  const cards = [
    {
      shape: t("Circular"),
      svg: <SVG title="circle"/>
    },
    {
      shape: t("Triangular"),
      svg: <SVG title="triangle"/>
    },
    {
      shape: t("Rectangular"),
      svg: <SVG title="square"/>
    },
    // {
    //   shape: "test 04",
    // },
    // {
    //   shape: "test 05",
    // }
  ];

  const testeee = [1, 2, 3, 4]

  return (
    <Layout>
      <ScrollView style={styles.scrollContainer}>
        <TitleContainer>
          <Text>{t("InitialShapes")}</Text>
        </TitleContainer>

        <CardContainer>
          {cards.map((card, index) => (
            <AccordionCard
              key={index}
              title={card.shape}
              svg={card.svg}
            />
          ))}
        </CardContainer>

      </ScrollView>
    </Layout>
  );
}
