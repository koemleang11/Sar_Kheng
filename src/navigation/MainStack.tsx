import {Animated, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../container/HomeScreen';
import DetailScreen from '../Screen/DetailScreen';
import MainDrawer from './MainDrawer';
import DrawerScreen from '../Screen/DrawerScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import DailyAction from '../container/DailyAction';
import SpeechScreen from '../Screen/SpeechScreen';
import HistoryScreen from '../Screen/HistoryScreen';
import ContactScreen from '../Screen/ContactScreen';
import ArchiementScreen from '../Screen/ArchiementScreen';
import VideoScreen from '../Screen/VideoScreen';
import VideoDetailScreen from '../Screen/VideoDetailScreen';
import ShareButton from '../component/ShareButton';
export const navigationRef: any = createNavigationContainerRef();

export function navigate(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }
}

export function push(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function reset(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
}

export function replace(name: string, params: any = {}) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={MainDrawer} name="MainDrawer" />
      <Stack.Screen component={DrawerScreen} name="DrawerScreen" />
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={DetailScreen} name="DetailScreen" />
      <Stack.Screen component={NotificationScreen} name="NotificationScreen" />
      <Stack.Screen component={DailyAction} name="DailyAction" />
      <Stack.Screen component={SpeechScreen} name="SpeechScreen" />
      <Stack.Screen component={HistoryScreen} name="HistoryScreen" />
      <Stack.Screen component={ContactScreen} name="ContactScreen" />
      <Stack.Screen component={ArchiementScreen} name="ArchiementScreen" />
      <Stack.Screen component={VideoScreen} name="VideoScreen" />
      <Stack.Screen component={VideoDetailScreen} name="VideoDetailScreen" />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
