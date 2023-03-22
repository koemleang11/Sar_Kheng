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
import CustomHeader from '../component/Header/CustomHeader';

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
      <CustomHeader />
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
