import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextTicker from 'react-native-text-ticker';
import colors from '../../theme/colors';
const TextTick = () => {
  return (
    <View
      style={{
        backgroundColor: colors.BrownPrimary,
        height: 45,
      }}>
      <View style={styles.container}>
        <TextTicker
          style={{
            fontSize: 14,
            color: colors.BrownPrimary,
            fontFamily: 'Moul-Regular',
            marginHorizontal: 20,
          }}
          duration={60000}
          bounce={false}
          bounceDelay={0}
          repeatSpacer={0}>
          កុំពាក់ព័ន្ធ ៖ កុំជួញដូរ កុំចែកចាយ កុំធ្វើខ្នងបង្អែក កុំឃុបឃិត
          និងកុំបើ ប្រាស់គ្រឿងញៀន ។ កុំអន្តរាគមន៍ ៖
          កុំរារាំងការរអនុវត្តច្បាប់ចំពោះឧក្រិដ្ឋជនគ្រឿងញៀន ទោះបី ជាក្រុមគ្រួសារ
          សាច់ញាតិឬ មិត្តភក្កិក៏ដោយ ។ កុំលើកលែង ៖
          កុំបន្ធូរបន្ថយការអនុត្តច្បាប់ចំពោះឧក្រិដ្ឋជនគ្រឿងញៀន។
          សមត្ថកិច្ចពាកព័ន្ធទាំងអស់ត្រូវអនុវត្តច្បាប់ដោយម៉ឺងម៉ាត់ និងស្មោះ
          ត្រង់វិជ្ជាជីវ:របស់ខ្លួន ហើយជនគ្រប់រូបត្រូវគោរព និងអនុវត្ត ច្បាប់។
          មួយរាយការណ៍៖ ត្រូវរាយការណ៍ផ្ដល់ព័ត៌មានដល់សមត្ថកិច្ចអំពីមុខសញ្ញាជួញដូរ
          ចែកចាយ ប្រើប្រាស់ ទីតាំងកែច្នៃផលិតនិងទីតាំង ស្តុកទុកគ្រឿងញៀនខុសច្បាប់
          ដល់សមត្ថកិច្ច។
        </TextTicker>
      </View>
    </View>
  );
};

export default TextTick;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 45,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    paddingHorizontal: -10,
  },
});
