import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useAuth} from '../auth/AuthContext';


const Card = ({ title, subtitle }) => {

    

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default CardView = () => {
    const [securityEvent, setsecurityEvent] = useState();
    const [lastSalePrice, setLastSalePrice] = useState();
    const [volumn, setVolumn] = useState();

    const {companyName} = useAuth();

    useEffect(()=>{
        fetchCompanyDetails();
    },[])

    const fetchCompanyDetails = async () => {
        try {
          const response = await fetch(
            `https://api.iex.cloud/v1/data/core/iex_deep/${companyName}?token=pk_85f727a2802d4a7d9de64485baeb569b`,
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setsecurityEvent(result[0]['securityEvent']['securityEvent']);
          setLastSalePrice(result[0]['lastSalePrice']);
          setVolumn(result[0]['volume']);
          console.log("result",securityEvent['securityEvent']);
        } catch (error) {
          console.error('Error fetching technical data:', error);
        }
      };



  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Card title="Company Name" subtitle={companyName} />
        <Card title="Security Event" subtitle={securityEvent} />
      </View>
      <View style={styles.row}>
        <Card title="Last Sale Price" subtitle={lastSalePrice} />
        <Card title="Volumn" subtitle={(volumn)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    // padding: 10,
    width:'100%',
    height: 'auto',
    marginBottom:'5%',
    marginTop:'10%'
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    // elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#000'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#000'
  },
});
