import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navigate } from '../../navigation/MainStack';
import Swiper from 'react-native-swiper';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardHome  = ({data}: any) => {
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
                style={styles.ImageBg}>
             </ImageBackground>
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

  export default CardHome;
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
  });