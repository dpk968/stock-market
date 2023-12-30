import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

import LineChartExample from './LineChartExample';
import {useAuth} from '../auth/AuthContext';

const SearchBar = () => {
  const {setXAxis,setYAxis,setCompanyName} = useAuth();
  const [searchText, setSearchText] = useState({});
  const [stockData, setStockData] = useState(null);

  const fetchCompanytechnical = async () => {
    try {
      const response = await fetch(
        `https://api.iex.cloud/v1/data/core/iex_deep/${searchText}?token=pk_85f727a2802d4a7d9de64485baeb569b`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setStockData(result[0]['trades']);
    } catch (error) {
      console.error('Error fetching technical data:', error);
    }
  };

  const handleSearch = async () => {
    setCompanyName(searchText);
    fetchCompanytechnical();
    const times = stockData.map((trade) => trade.timestamp);
    const prices = stockData.map((trade) => trade.price);
    
    setXAxis(times);
    setYAxis(prices);
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search text"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchBar;
