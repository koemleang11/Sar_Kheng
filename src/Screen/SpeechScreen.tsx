import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../theme/colors';
import {navigate, reset} from '../navigation/MainStack';

const SpeechScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={colors.BrownPrimary} />

      {/* Header Start */}

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
              paddingLeft: 20,
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
      </View>

      {/* Header End */}

      {/* Imgae  */}
      <ScrollView>
        <Image
          source={require('../assets/SplashImage/BG.png')}
          style={{width: '100%', height: 380, resizeMode: 'cover'}}
        />

        {/* <Image End> */}

        {/* Speech Detail start */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            backgroundColor: colors.BrownPrimary,
            marginTop: -30,
            marginBottom: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Moul-Regular',
              color: colors.white,
            }}>
            ពាក្យស្លោកជាតិ ៣កុំ ១រាយការណ៍
          </Text>
        </View>
        <View>
          <Text style={styles.TitleSection}>កុំពាក់ព័ន្ធ ៖</Text>
          <Text style={styles.detail}>
            កុំជួញដូរ កុំចែកចាយ កុំធ្វើខ្នងបង្អែក កុំឃុបឃិត និងកុំប្រើ
            ប្រាស់គ្រឿងញៀន ។
          </Text>
        </View>
        <View>
          <Text style={styles.TitleSection}>កុំអន្តរាគមន៍ ៖</Text>
          <Text style={styles.detail}>
            កុំរារាំងការរអនុវត្តច្បាប់ចំពោះឧក្រិដ្ឋជនគ្រឿងញៀន ទោះបី
            ជាក្រុមគ្រួសារ សាច់ញាតិ ឬ មិត្តភក្កិក៏ដោយ ។
          </Text>
        </View>
        <View>
          <Text style={styles.TitleSection}>កុំលើកលែង ៖ </Text>
          <Text style={styles.detail}>
            កុំបន្ធូរបន្ថយការអនុត្តច្បាប់ចំពោះឧក្រិដ្ឋជនគ្រឿងញៀន។
            សមត្ថកិច្ចពាកព័ន្ធទាំងអស់ត្រូវអនុវត្តច្បាប់ដោយម៉ឺងម៉ាត់ និងស្មោះ
            ត្រង់វិជ្ជាជីវ:របស់ខ្លួន ហើយជនគ្រប់រូបត្រូវគោរព និងអនុវត្ត ច្បាប់។
          </Text>
        </View>
        <View>
          <Text style={styles.TitleSection}>មួយរាយការណ៍៖</Text>
          <Text style={styles.detail}>
            ត្រូវរាយការណ៍ផ្ដល់ព័ត៌មានដល់ សមត្ថកិច្ចអំពីមុខសញ្ញា ជួញដូរ ចែកចាយ
            ប្រើប្រាស់ទីតាំងកែច្នៃផលិតនិងទីតាំង ស្តុកទុកគ្រឿងញៀនខុសច្បាប់
            ដល់សមត្ថកិច្ច។
          </Text>
        </View>
      </ScrollView>

      {/* Speech Detail start */}
    </SafeAreaView>
  );
};

export default SpeechScreen;

const styles = StyleSheet.create({
  TitleSection: {
    fontSize: 18,
    color: colors.BrownPrimary,
    paddingHorizontal: 20,
    fontFamily: 'Battambang-Bold',
  },
  detail: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: 18,
    fontFamily: 'Battambang-Regular',
    color: colors.Black,
  },
});
