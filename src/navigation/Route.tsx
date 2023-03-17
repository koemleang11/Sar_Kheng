import {StyleSheet} from 'react-native';
import React from 'react';
import MainStack, {navigationRef} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainDrawer from './MainDrawer';
const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 1}}>
        <MainDrawer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
