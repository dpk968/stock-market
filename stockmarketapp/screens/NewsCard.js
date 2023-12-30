import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

const NewsCard = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#000', borderRadius: 10, overflow: 'hidden', margin: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
        <Image
          source={{ uri: 'https://i.imgur.com/EXAMPLE.jpg' }}
          style={{ width: '100%', height: 200 }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Headline
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
            viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim
            nisi. Curabitur sit amet nulla. Nam in massa. Sed vel tellus. Curabitur
            sem urna, consequat vel, suscipit in, mattis placerat.
          </Text>
          <Text style={{ color: 'blue' }}>
            Read more
          </Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', margin: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
        <Image
          source={{ uri: 'https://i.imgur.com/EXAMPLE.jpg' }}
          style={{ width: '100%', height: 200 }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Headline
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
            viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim
            nisi. Curabitur sit amet nulla. Nam in massa. Sed vel tellus. Curabitur
            sem urna, consequat vel, suscipit in, mattis placerat.
          </Text>
          <Text style={{ color: 'blue' }}>
            Read more
          </Text>
        </View>
      </View>


      <View style={{ backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', margin: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
        <Image
          source={{ uri: 'https://i.imgur.com/EXAMPLE.jpg' }}
          style={{ width: '100%', height: 200 }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Headline
          </Text>
          <Text style={{ marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
            viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim
            nisi. Curabitur sit amet nulla. Nam in massa. Sed vel tellus. Curabitur
            sem urna, consequat vel, suscipit in, mattis placerat.
          </Text>
          <Text style={{ color: 'blue' }}>
            Read more
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsCard;
