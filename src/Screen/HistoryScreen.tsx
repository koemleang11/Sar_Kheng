import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {navigate} from '../navigation/MainStack';
import {useNavigation} from '@react-navigation/native';

const HistoryScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          backgroundColor: colors.BrownPrimary,
          height: 48,
          alignItems: 'center',
          paddingHorizontal: 20,
          elevation: 12,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MainDrawer')}>
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
              paddingLeft: 30,
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
      </View>
      <Image
        source={require('../assets/SplashImage/BG.png')}
        style={{width: '100%', height: 395}}
      />
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text
            style={{
              paddingBottom: 20,
              fontSize: 18,
              fontFamily: 'Moul-Regular',
              color: colors.Black,
            }}>
            សម្តេចក្រឡាហោម ស​ ខេង
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Moul-Regular',
              color: colors.Black,
            }}>
            ឧបនាយករដ្ធមន្ត្រី រដ្ធមន្ត្រីក្រសួងមហាផ្ទៃ
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
