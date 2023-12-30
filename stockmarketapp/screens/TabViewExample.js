import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import NewsComponent from './NewsComponent';
import NewsCard from './NewsCard';
import HomeScreen from './HomeScreen';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} >
    <HomeScreen/>
    </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} >
    <NewsCard/>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    style={{ backgroundColor: 'red' }}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'News' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      tabBarPosition="bottom"
    />
  );
}
