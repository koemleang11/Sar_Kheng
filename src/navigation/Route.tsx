import {StyleSheet} from 'react-native';
import React from 'react';
import MainStack, {navigationRef} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 1}}>
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
