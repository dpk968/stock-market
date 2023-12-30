import React from 'react';
import { ScrollView,View, StyleSheet,Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import {useAuth} from '../auth/AuthContext';

const LineChartExample = () => {
  const {xAxis,yAxis} = useAuth();
  

  return (
    <View>
      {typeof xAxis != 'undefined' ? (
        <LineChart
          data={{
            labels: xAxis,
            datasets: [
              {
                data: yAxis,
              },
            ],
          }}
          width={Dimensions.get('window').width - 50}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} 
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#001d3b',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ):(
        <LineChart
          data={{
            labels:  [2.27, 2.29, 2.29, 2.31, 2.31, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.29, 2.29, 2.285, 2.285, 2.285, 2.275],
            datasets: [
              {
                data: [1703883596136, 1703883445889, 1703883445636, 1703883304790, 1703883264985, 1703883037572, 1703882983081, 1703882983081, 1703882887466, 1703882873240, 1703882789989, 1703882770071, 1703882770052, 1703882770052, 1703882770040, 1703882621862, 1703882616732, 1703882616729, 1703882616729, 1703882616702],
              },
            ],
          }}
          width={Dimensions.get('window').width - 50}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
  },
  chartCard: {
    marginTop: 16,
  },
});

export default LineChartExample;