import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

const NewsComponent = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: 'https://i.imgur.com/EXAMPLE.jpg' }}
          style={{ width: '100%', height: 200 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10 }}>
          Headline
        </Text>
        <Text style={{ margin: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
          viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim
          nisi. Curabitur sit amet nulla. Nam in massa. Sed vel tellus. Curabitur
          sem urna, consequat vel, suscipit in, mattis placerat.
        </Text>
        <Text style={{ margin: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Read more: </Text>
          <Text
            style={{ color: 'blue' }}
            onPress={() => console.log('Read more clicked!')}
          >
            https://www.example.com/article
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default NewsComponent;
