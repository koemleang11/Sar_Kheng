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
import data from '../temp/DataHome';
import YoutubePlayer from 'react-native-youtube-iframe';
import CardHome from '../component/Home/CardHome';
import TextTick from '../component/Home/TextTicker';
import Header from '../component/Home/Header';
import {navigate} from '../navigation/MainStack';

const {width} = Dimensions.get('screen');

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent={false} backgroundColor={colors.BrownPrimary} />
      <Header />
      <View style={{height: 270}}>
        <YoutubePlayer
          webViewStyle={{opacity: 0.99}}
          height={220}
          videoId={'LtvXKx8aYO0'}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate('SpeechScreen')}>
          <TextTick />
        </TouchableOpacity>
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
  },
});
