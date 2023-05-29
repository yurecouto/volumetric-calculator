import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Layout from '../../components/layout';
import { styles, CardContainer, TitleContainer } from './style';
import AccordionCard from '../../components/accordionCard';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <ScrollView style={styles.scrollContainer}>
        <TitleContainer>
          <Text>{t("InitialShapes")}</Text>
        </TitleContainer>

        <CardContainer>
          <AccordionCard/>
          <AccordionCard/>
          <AccordionCard/>
          <AccordionCard/>
          <AccordionCard/>
          <AccordionCard/>
        </CardContainer>
      </ScrollView>
    </Layout>
  );
}
