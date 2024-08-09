import { StatusBar } from 'expo-status-bar';

import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>

      <ScrollView>
        <View style={styles.cardwrap}>
          <View style={styles.card}>
            <Text>Hello 1</Text>
          </View>
          <View style={styles.card}>
            <Text>Hello 2</Text>
          </View>
          <View style={styles.card}>
            <Text>Hello 3</Text>
          </View>
          <View style={styles.card}>
            <Text>Hello 4</Text>
          </View>
          <View style={styles.card}>
            <Text>Hello 5</Text>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  );
  
}


const styles = StyleSheet.create({
  cardwrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginHorizontal: 10,
  },

  card: {
    width: '45%',
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 8,
    marginBottom: 16,

  },
});