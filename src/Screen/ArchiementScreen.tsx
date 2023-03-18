import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import data from '../temp/DataHome';
import MaterailIcon from 'react-native-vector-icons/MaterialIcons';
import {navigate, reset} from '../navigation/MainStack';

const {width} = Dimensions.get('screen');

const ArchiementScreen = ({navigation}: any) => {
  const Card = ({data}: any) => {
    return (
      <View style={{height: 231, justifyContent: 'flex-end', marginBottom: 20}}>
        <Swiper>
          <View>
            <ImageBackground
              source={data.images[0]}
              style={styles.ImageBg}></ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={data.images[1]}
              style={{
                height: 192,
                marginHorizontal: 20,
                justifyContent: 'flex-end',
                borderRadius: 10,
              }}></ImageBackground>
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
              fontFamily: 'Battambang-Bold',
            }}>
            {data.title}
          </Text>
        </View>
        <View
          style={{
            height: 50,
            justifyContent: 'space-between',
            marginHorizontal: 20,
            backgroundColor: colors.Gray,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            paddingTop: 10,
            elevation: 12,
          }}>
          <View
            style={{
              marginHorizontal: 10,
              backgroundColor: colors.BrownPrimary,
              height: 28,
              width: 180,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <Icon name="calendar" style={{color: colors.white}} />
            <Text
              style={{
                paddingLeft: 10,
                fontFamily: 'Battambang-Bold',
                color: colors.white,
              }}>
              {data.date}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate('DetailScreen', data)}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    paddingLeft: 10,
                    fontSize: 16,
                    color: colors.BrownPrimary,
                    fontFamily: 'Battambang-Bold',
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
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={colors.BrownPrimary} />
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          backgroundColor: colors.BrownPrimary,
          height: 48,
          alignItems: 'center',
          paddingHorizontal: 20,
          elevation: 12,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate('HomeScreen')}>
          <View
            style={{
              width: 32,
              height: 32,
              elevation: 30,
              backgroundColor: colors.BrownPrimary,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              paddingLeft: 5,
            }}>
            <MaterailIcon
              name="arrow-back-ios"
              size={20}
              color={colors.white}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingLeft: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
              paddingLeft: 20,
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
      </View>
      <FlatList data={data} renderItem={({item}) => <Card data={item} />} />
    </SafeAreaView>
  );
};

export default ArchiementScreen;

const styles = StyleSheet.create({
  TitleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: 20,
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
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    borderRadius: 20,
    overflow: 'hidden',
  },
});
