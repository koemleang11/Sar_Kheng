import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {navigate} from '../navigation/MainStack';
import {SafeAreaView} from 'react-navigation';
import data from '../temp/ContactList';

const DrawerScreen = ({data}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 300}}>
        <Image
          source={require('../assets/SplashImage/BgImage.png')}
          style={{width: '100%', height: 300, resizeMode: 'cover'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 43,
          backgroundColor: colors.BrownPrimary,
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              fontWeight: 'bold',
              fontFamily: 'Battambang-Bold',
            }}>
            ការជូនដំណឹង
          </Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#767577', true: '#914D00'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('DailyAction')}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/Cooperate.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>សកម្មភាពប្រចាំថ្ងៃ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('VideoScreen')}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/Video.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>វីដេអូ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginBottom: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('SpeechScreen')}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/quotes.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>ប្រសាសន៌សម្តេច</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('HistoryScreen')}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/history.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>ជីវប្រវត្តិ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('ArchiementScreen')}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/Achievement.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>ស្នាដៃ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('ContactScreen')}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/Contact.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>ទំនាក់ទំនង</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Linking.openSettings()}>
            <View style={styles.TextContainer}>
              <Image
                source={require('../assets/icons/settings.png')}
                style={{width: 24, height: 24}}
              />
              <Text style={styles.TextTitle}>ការកំណត់</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            justifyContent: 'space-around',
            height: 44,
            borderWidth: 1,
            borderColor: colors.BrownPrimary,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.facebook.com/SamdechKrolahomSarkheng?mibextid=LQQJ4d',
              )
            }>
            <Image
              source={require('../assets/icons/Facebook.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://t.me/SAMDECHKROLAHOM?mibextid=ncKXMA')
            }>
            <Image
              source={require('../assets/icons/Telegram.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://twitter.com/SamdechKrolahom')
            }>
            <Image
              source={require('../assets/icons/Tweeter.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/results?search_query=sar+kheng',
              )
            }>
            <Image
              source={require('../assets/icons/Youtube.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://samdechkrolahomsarkheng.com/?mibextid=ncKXMA',
              )
            }>
            <Image
              source={require('../assets/icons/Website.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  TextTitle: {
    paddingLeft: 10,
    fontSize: 18,
    color: colors.Black,
    fontFamily: 'Battambang-Bold',
  },
  TextContainer: {
    height: 36,
    borderWidth: 1,
    borderColor: colors.BrownPrimary,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
