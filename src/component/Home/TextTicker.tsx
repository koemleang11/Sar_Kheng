import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextTicker from 'react-native-text-ticker'
import colors from '../../theme/colors'
const TextTick = () => {
  return (
    <View
    style={{
      backgroundColor: colors.BrownPrimary,
      height: 45,
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
    }}>
    <View style={styles.container}>
            <TextTicker
              style={{
                fontSize: 16,
                color: colors.BrownPrimary,
                fontFamily: 'Moul-Regular',
              }}
              duration={20000}
              loop
              bounce={false}
              repeatSpacer={10}
              marqueeDelay={1000}>
              ពាក្យស្លោកជាតិ ៣កុំ ១រាយការណ៍៖ កុំពាក់ព័ន្ធ៖ កុំអន្តរាគមន៍៖
              កុំលើកលែង៖ មួយរាយការណ៍៖
            </TextTicker>
          </View>
        </View>
  )
}

export default TextTick;

const styles = StyleSheet.create({container: {
    backgroundColor: colors.white,
    height: 45,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
  },})