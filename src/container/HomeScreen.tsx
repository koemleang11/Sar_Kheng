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
import Swiper from 'react-native-swiper';
import TextTicker from 'react-native-text-ticker';
import {openDrawer} from '../navigation/MainDrawer';
import YoutubePlayer from 'react-native-youtube-iframe';
import {navigate} from '../navigation/MainStack';
const {width} = Dimensions.get('screen');

const HomeScreen = () => {
  const Card = ({data}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('DetailScreen', data)}>
        <View
          style={{height: 231, justifyContent: 'flex-end', marginBottom: 20}}>
          <Swiper>
            <View>
              <ImageBackground
                source={data.images[0]}
                style={styles.ImageBg}></ImageBackground>
            </View>
            <View>
              <ImageBackground
                source={data.images[1]}
                style={styles.ImageBg}></ImageBackground>
            </View>
            <View>
              <ImageBackground
                source={data.images[2]}
                style={styles.ImageBg}></ImageBackground>
            </View>
          </Swiper>
          <View style={styles.TitleContainer}>
            <Text
              style={{
                fontSize: 16,
                color: colors.white,
                fontWeight: 'bold',
                fontFamily: 'Battambang-Regular',
              }}>
              {data.title}
            </Text>
          </View>
          <View
            style={{
              height: 50,
              justifyContent: 'space-between',
              marginHorizontal: 10,
              backgroundColor: colors.Gray,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row',
              paddingTop: 10,
              elevation: 1,
            }}>
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: colors.BrownPrimary,
                height: 28,
                width: 150,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 10,
              }}>
              <Icon name="calendar" style={{color: colors.white}} />
              <Text style={{paddingLeft: 10, color: colors.white}}>
                {data.date}
              </Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: colors.BrownPrimary,
                    fontFamily: 'Battambang-Regular',
                  }}>
                  អានលម្អិត
                </Text>
                <Icon
                  name="arrow-right"
                  style={{
                    paddingTop: 5,
                    paddingLeft: 5,
                    paddingRight: 10,
                    color: colors.BrownPrimary,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      // images swipper end
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent={false} backgroundColor={colors.BrownPrimary} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.BrownPrimary,
          height: 48,
          alignItems: 'center',
          paddingHorizontal: 10,
          elevation: 12,
        }}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <Image
            source={require('../assets/icons/menu-02.png')}
            style={{height: 25, width: 25, tintColor: colors.white}}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/results?search_query=sar+kheng',
            )
          }>
          <View>
            <Image
              source={require('../assets/icons/Yotube3.png')}
              style={{height: 35, width: 35}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{height: 260}}>
        <YoutubePlayer height={200} videoId={'LtvXKx8aYO0'} />
        <View
          style={{
            backgroundColor: colors.BrownPrimary,
            height: 45,
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
          }}>
          <View style={styles.container}>
            <TextTicker
              style={{
                fontSize: 16,
                color: colors.BrownPrimary,
                fontFamily: 'Moul-Regular',
              }}
              duration={20000}
              loop
              bounce={false}
              repeatSpacer={10}
              marqueeDelay={1000}>
              ពាក្យស្លោកជាតិ ៣កុំ ១រាយការណ៍៖ កុំពាក់ព័ន្ធ៖ កុំអន្តរាគមន៍៖
              កុំលើកលែង៖ មួយរាយការណ៍៖
            </TextTicker>
          </View>
        </View>
      </View>
      <FlatList data={data} renderItem={({item}) => <Card data={item} />} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  TitleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: -60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // position:'absolute',
    // opacity: 0.5,
  },
  ImageBg: {
    height: 190,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  container: {
    backgroundColor: colors.white,
    height: 45,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
  },
});
