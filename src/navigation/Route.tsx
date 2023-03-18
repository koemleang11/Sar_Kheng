import {StyleSheet} from 'react-native';
import React from 'react';
import MainStack, {navigationRef} from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainDrawer from './MainDrawer';
import colors from '../theme/colors';
const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <MainDrawer />
    </NavigationContainer>
  );
};

export default Route;

const styles = StyleSheet.create({});
