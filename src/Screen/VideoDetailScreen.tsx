import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import MaterailIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import YoutubePlayer from 'react-native-youtube-iframe';
import CustomAutoWebView from '../component/CustomeAutoHight/CustomAutoWebView';
import {goBack} from '../navigation/MainStack';
const {width} = Dimensions.get('screen');

const VideoDetailScreen = ({navigation, route}: any) => {
  const data = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={colors.BrownPrimary} />

      {/* Header start */}

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
        <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()}>
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
        <View>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
              textAlign: 'center',
            }}>
            ព័ត៌មានលម្អិត
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: colors.BrownPrimary,
              elevation: 5,
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text
              style={{fontSize: 16, color: colors.white, fontWeight: 'bold'}}>
              អ
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.BrownPrimary,
              elevation: 5,
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text
              style={{fontSize: 20, color: colors.white, fontWeight: 'bold'}}>
              អ
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.BrownPrimary,
              elevation: 5,
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <MaterailIcon name="ios-share" size={20} color={colors.white} />
          </View>
        </View>
      </View>

      {/* Header end */}
      <YoutubePlayer height={200} videoId={data.link} />
      <View style={styles.imageDetails}>
        <Text
          style={{
            // width: '100%',
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.BrownPrimary,
            textAlign: 'justify',
            fontFamily: 'KhmerOS_battambang',
          }}>
          {data.title}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: colors.Black,
          height: 36,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="calendar" style={{paddingTop: 4, paddingRight: 5}} />
          <Text>March 04, 2023</Text>
        </View>
      </View>
      <ScrollView>
        <CustomAutoWebView />
        <View
          style={{
            marginTop: 10,
            alignContent: 'center',
          }}>
          <Image source={data.images[0]} style={styles.imgDeatil} />
          <Image source={data.images[1]} style={styles.imgDeatil} />
          <Image source={data.images[2]} style={styles.imgDeatil} />
          <Image source={data.images[3]} style={styles.imgDeatil} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoDetailScreen;

const styles = StyleSheet.create({
  ImageBg: {
    height: 200,
    marginHorizontal: 20,
  },
  imageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 20,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imgDeatil: {
    width: '100%',
    marginBottom: 10,
  },
});
