import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../temp/DataHome';

import TextTicker from 'react-native-text-ticker';
import {openDrawer} from '../navigation/MainDrawer';
import YoutubePlayer from 'react-native-youtube-iframe';
import {navigate} from '../navigation/MainStack';
import CardHome from '../component/Home/CardHome';
import TextTick from '../component/Home/TextTicker';
import Header from '../component/Home/Header';

const {width} = Dimensions.get('screen');

const HomeScreen = () => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent={false} backgroundColor={colors.BrownPrimary} />
      <Header/>
      <View style={{height: 260}}>
        <YoutubePlayer
          webViewStyle={{opacity: 0.99}}
          height={200}
          videoId={'LtvXKx8aYO0'}
        />
          <TextTick/>
      </View>
      <FlatList data={data} renderItem={({item}) => <CardHome data={item} />} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.BrownPrimary,
    height: 48,
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 12,
  }
});
