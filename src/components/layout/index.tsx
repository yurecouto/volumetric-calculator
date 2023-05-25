import { View } from 'react-native';

import styles from './style';
import { ReactNode } from 'react';
import Header from '../header';

interface Props {
  children?: ReactNode;
}

export default function Layout({
  children,
  }: Props) {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.subContainer}>
        {children}
      </View>
    </View>
  );
}
