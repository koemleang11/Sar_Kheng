import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent={false} backgroundColor={colors.DarkBrown} />
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
          <Text style={{paddingLeft: 100, fontSize: 18, color: colors.white}}>
            ការជូនដំណឹង
          </Text>
        </View>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>28.02.2023</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.Gray,
          height: 60,
          elevation: 7,
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <View>
          <Icon name="notifications" size={30} color={colors.BrownPrimary} />
        </View>
        <View style={{paddingLeft: 20}}>
          <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
            កំណែអាប់ដេតថ្មីត្រូវបានដាក់ឱ្យប្រើប្រាស់
          </Text>
          <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
            កំណែអាប់ដេត​ 2.0.0 ថ្មីត្រូវបានដាក់ឱ្យប្រើប្រាស់
          </Text>
        </View>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>28.02.2023</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.Gray,
          height: 60,
          elevation: 7,
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <View>
          <Icon name="notifications" size={30} color={colors.BrownPrimary} />
        </View>
        <View style={{paddingLeft: 20}}>
          <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
            កំណែអាប់ដេតថ្មីត្រូវបានដាក់ឱ្យប្រើប្រាស់
          </Text>
          <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
            កំណែអាប់ដេត​ 2.0.0 ថ្មីត្រូវបានដាក់ឱ្យប្រើប្រាស់
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.Gray,
          height: 60,
          elevation: 7,
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <View>
          <Icon name="notifications" size={30} color={colors.BrownPrimary} />
        </View>
        <View style={{paddingLeft: 20}}>
          <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
            កំណែអាប់ដេតថ្មីត្រូវបានដាក់ឱ្យប្រើប្រាស់
          </Text>
          <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
            កំណែអាប់ដេត​ 2.0.0 ថ្មីត្រូវបានដាក់ឱ្យប្រើប្រាស់
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
