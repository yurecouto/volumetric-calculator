import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Layout from '../../components/layout';
import { styles, CardContainer, TitleContainer, Text } from './style';
import AccordionCard from '../../components/accordionCard';
import { useTranslation } from 'react-i18next';

// import Circle from '../../svgs/circle.svg';
// import Triangle from '../../svgs/triangle.svg';
// import Square from '../../svgs/square.svg';
import colors from '../../themes/colors';
import SVG from '../../svgs/svgs';
import { useState } from 'react';

export default function Home() {
  const { t } = useTranslation();

  const cards = [
    {
      shape: t("Circular"),
      svg: <SVG title="circle"/>,
      types: [
        {
          title: "teste 1",
          svg: <SVG title="triangle"/>
        },
        {
          title: "teste 2",
          svg: <SVG title="circle"/>
        },
        {
          title: "teste 3",
          svg: <SVG title="square"/>
        }
      ]
    },
    {
      shape: t("Triangular"),
      svg: <SVG title="triangle"/>,
      types: [
        {
          title: "teste 1",
          svg: <SVG title="triangle"/>
        },
        {
          title: "teste 2",
          svg: <SVG title="circle"/>
        },
        {
          title: "teste 3",
          svg: <SVG title="square"/>
        }
      ]
    },
    {
      shape: t("Rectangular"),
      svg: <SVG title="square"/>,
      types: [
        {
          title: "teste 1",
          svg: <SVG title="triangle"/>
        },
        {
          title: "teste 2",
          svg: <SVG title="circle"/>
        },
        {
          title: "teste 3",
          svg: <SVG title="square"/>
        }
      ]
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
              key={card.shape}
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
