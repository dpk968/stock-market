import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Table = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>8</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.text}>9</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>10</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>11</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>12</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TableView = () => {
  return (
    <View style={styles.container}>
      <Table />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
