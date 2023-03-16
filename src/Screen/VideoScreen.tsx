import React, {useState, useCallback, useRef} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import colors from '../theme/colors';
import data from '../temp/VideoData';
import {SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {navigate, reset} from '../navigation/MainStack';

const VideoScreen = () => {
  const VideoCard = ({data}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('VideoDetailScreen', data)}>
        <View>
          <YoutubePlayer height={200} videoId={data.link} />
          <View
            style={{
              height: 90,
              justifyContent: 'center',
              elevation: 12,
              marginBottom: 10,
              backgroundColor: colors.white,
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Battambang-Bold',
                paddingTop: 10,
              }}>
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Battambang-Regular',
                paddingTop: 10,
              }}>
              {data.date}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.BrownPrimary,
          height: 48,
          alignItems: 'center',
          paddingHorizontal: 20,
          elevation: 12,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => reset('MainDrawer')}>
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
            <Icon name="arrow-back-ios" size={20} color={colors.white} />
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
              fontSize: 20,
              color: colors.white,
              fontFamily: 'Moul-Regular',
              paddingLeft: 20,
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <VideoCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default VideoScreen;
