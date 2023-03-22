import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactList from '../temp/ContactList';
import {Linking} from 'react-native';
import {navigate, reset} from '../navigation/MainStack';

const ContactScreen = ({navigation}: any) => {
  const Card = ({data}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          marginHorizontal: 30,
          borderBottomWidth: 1,
          borderColor: colors.BrownPrimary,
          alignItems: 'center',
        }}>
        <Image source={data.images} style={{height: 30, width: 30}} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Linking.openURL(data.link)}>
          <Text
            style={{
              fontSize: 16,
              color: colors.Black,
              paddingLeft: 10,
              paddingRight: 20,
              textAlign: 'justify',
              fontFamily: 'Battambang-Regular',
            }}>
            {data.Title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 10}}>
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
          activeOpacity={0.9}
          onPress={() => navigate('HomeScreen')}>
          <View
            style={{
              width: 32,
              height: 32,
              elevation: 8,
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
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
              paddingLeft: 20,
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
      </View>
      <View style={{width: '100%', height: 395}}>
        <ImageBackground
          source={require('../assets/SplashImage/BgImage2.png')}
          style={{width: '100%', height: 395}}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: -50,
          backgroundColor: colors.white,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}>
        <FlatList
          data={ContactList}
          renderItem={({item}) => <Card data={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
