import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {useSelector} from 'react-redux';
import defaultColor from '../../theme/colors';
const des = `<p>នាថ្ងៃទី៤ខែមីនាឆ្នាំ២០២៣នេះសម្ដេចក្រឡាហោម ស ខេង ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងមហាផ្ទៃបានអញ្ជើញដឹកនាំគណៈប្រតិភូជាន់ខ្ពស់ក្រសួងមហាផ្ទៃចូលជួបសម្ដែងការគួរសមជាមួយឯកឧត្តមផាមមិញជិញ នាយករដ្ឋមន្ត្រីនៃសាធារណរដ្ឋសង្គមនិយមវៀតណាម។នាឱកាសនោះ ឯកឧត្តម ផាម មិញជិញ នាយករដ្ឋមន្ត្រីនៃសាធារណរដ្ឋសង្គមនិយមវៀតណាម បានបង្ហាញការស្វាគមន៍ចំពោះវត្តមាន សម្ដេចក្រឡាហោម ស ខេង ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងមហាផ្ទៃ និងគណៈប្រតិភូ។ជាមួយគ្នានោះ សម្ដេចក្រឡាហោម ស ខេង ក៏បានថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះ ឯកឧត្ដម នាយករដ្ឋមន្ត្រី ផាម មិញជិញ ដែលបានចំណាយពេលវេលាដ៏មានតម្លៃទទួលជួបគណៈប្រតិភូក្រសួង មហាផ្ទៃនាឱកាសបំពេញទស្សនកិច្ចនៅសាធារណរដ្ឋសង្គមនិយម វៀតណាម។ទន្ទឹមនេះ សម្ដេចក្រឡាហោម ស ខេង ក៏បានជម្រាបជូនឯក ឧត្ដម នាយករដ្ឋមន្ត្រី ផាម មិញជិញ អំពីលទ្ធផលនៃកិច្ចសហ ប្រតិបត្តិការ ដ៏ល្អប្រសើររវាងក្រសួងមហាផ្ទៃនិងក្រសួងនគរបាល​វៀតណាមផងដែរ។ ផ្អែកលើការលើកឡើងខាងលើនេះ ឯកឧត្ដមនាយករដ្ឋមន្ត្រី ផាម មិញជិញ ក៏បានវាយតម្លៃខ្ពស់ចំពោះកិច្ចសហប្រតិបត្តិការដ៏ល្អរវាង ក្រសួងទាំងពីរនិងបានលើកទឹកចិត្តខ្ពស់សម្រាប់កិច្ចសហប្រតិបត្តិ ការរវាងក្រសួងមហាផ្ទៃកម្ពុជា និងក្រសួងនគរបាលវៀតណាម នាឆ្នាំ២០២៣បន្តទៀត។</p>`;
const {width} = Dimensions.get('screen');

interface Props{
  fontSize:number
}

const CustomAutoWebView:React.FC<Props> = ({fontSize}) => {
  function searchAndReplace(String: any) {
    if (String) {
      return String.replace(/(?:\r\n|\r)/g, '<br>');
    }
  }
  return (
    <View
      style={{
        backgroundColor: defaultColor.white,
        flex: 1,
        marginHorizontal: 10,
      }}>
      <AutoHeightWebView
        scrollEnabled={false}
        dataDetectorTypes="none"
        style={{width: '100%', opacity: 0.99, minHeight: 1}}
        customStyle={`
                                * {
                                  font-family: 'Battambang-Regular' !important;
                                  line-height:${2} !important;
                                  letter-spacing:${0.5}px !important;
                                  font-size:${fontSize}px !important;
                                  color:${defaultColor.Black};
                                  textAlign: 'justify'
                                }
                                li{
                                  color:${defaultColor.Black};
                                  font-size:${fontSize}px;
                                  textAlign: 'justify'
                                }
                                img{
                                  width:calc(100%) !important;
                                  height:${width / 1.3}px !important;
                                  margin-left: 0px !important;
                                  margin-right: 0px !important;
                                  margin-top:13px !important;
                                  margin-bottom: 20px;
                                  }
                                    p{
                                        margin-bottom:20px !important;
                                        line-height:${1.5} !important;
                                        letter-spacing:${0.3}px !important;
                                        textAlign: 'justify'
                                    }
                                    iframe{
                                      font-size:30px;
                                      width:calc(100%) !important;
                                      height:${width / 1.9}px !important;
                                      margin-left: 0px !important;
                                      margin-right: 0px !important;
                                      textAlign: 'justify'
                                      }
                                `}
        source={{
          html: `<html><head><link href="https://fonts.googleapis.com/css?family=Battambang&display=swap" rel="stylesheet">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>
                        ${searchAndReplace(des)}
                  </body></html>`,
        }}
        scalesPageToFit={true}
        viewportContent={
          'width=device-width, initial-scale=1.0, user-scalable=no'
        }
      />
    </View>
  );
};

export default React.memo(CustomAutoWebView);

const styles = StyleSheet.create({});
