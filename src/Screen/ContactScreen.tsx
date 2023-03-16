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

const ContactScreen = ({navigation}: any) => {
  const Card = ({data}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: colors.BrownPrimary,
          alignItems: 'center',
        }}>
        <Image source={data.images} style={{height: 20, width: 20}} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Linking.openURL(data.link)}>
          <Text
            style={{
              fontSize: 14,
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
    <SafeAreaView style={{flex: 1}}>
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
              fontSize: 20,
              color: colors.white,
              fontFamily: 'Moul-Regular',
              paddingLeft: 20,
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
      </View>
      <Image
        source={require('../assets/SplashImage/BG.png')}
        style={{width: '100%', height: 395}}
      />
      <FlatList
        data={ContactList}
        renderItem={({item}) => <Card data={item} />}
      />
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
