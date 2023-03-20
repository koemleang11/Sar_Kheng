import {StyleSheet,StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import {Provider} from 'react-redux';
import store from './src/store';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <>
    <StatusBar backgroundColor={'#E87E04'}/>
    <Provider store={store}>
      <SafeAreaView edges={['top']} style={{flex:1}}>
      <Route />
      </SafeAreaView>
    </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
