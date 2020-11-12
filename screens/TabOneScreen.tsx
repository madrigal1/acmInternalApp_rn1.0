import * as React from 'react';
import { StyleSheet } from 'react-native';
import Feed from '../components/Feed';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgMain
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
