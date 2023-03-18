import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { openDrawer } from '../../navigation/MainDrawer'
import colors from '../../theme/colors'

const Header = () => {
  return (
    <View>
      <View
        style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <Image
            source={require('../../assets/icons/menu-02.png')}
            style={{height: 25, width: 25, tintColor: colors.white}}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: colors.white,
              fontFamily: 'Moul-Regular',
            }}>
            សម្តេចក្រឡាហោម ស ខេង
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/results?search_query=sar+kheng',
            )
          }>
          <View>
            <Image
              source={require('../../assets/icons/Yotube3.png')}
              style={{height: 35, width: 35}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.BrownPrimary,
        height: 48,
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation: 12,
      }
})