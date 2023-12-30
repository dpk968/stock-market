import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import {useAuth} from '../auth/AuthContext';

const NewsCard = () => {
  const [data, setData] = useState([]);
  const {companyName} = useAuth();

  useEffect(() => {
    fetch(
      `https://api.iex.cloud/v1/data/core/news/${companyName}?range=last-week&token=pk_9e697d85bc3446ba8c552b18e85ff4bc`,
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <ScrollView>
      {data.map(item => (
        // <Text key={item.id}>{item.summary}</Text>

        <View key={item.id}
          style={{
            backgroundColor: '#000',
            borderRadius: 10,
            overflow: 'hidden',
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={{width: '100%', height: 200}}
          />
          <View style={{padding: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.headline}</Text>
            <Text style={{marginVertical: 10}}>
            {item.summary}
            </Text>
            <Text style={{color: 'blue'}}>Read more</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default NewsCard;
