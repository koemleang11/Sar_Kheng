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
            marginHorizontal:20
          }}
          duration={20000}
          bounce={false}
          bounceDelay={10}
          repeatSpacer = {-120}
        >
          ពាក្យស្លោកជាតិ ៣កុំ ១រាយការណ៍៖ កុំពាក់ព័ន្ធ៖ កុំអន្តរាគមន៍៖ កុំលើកលែង៖
          មួយរាយការណ៍៖
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
    paddingHorizontal:-10
  },
});
