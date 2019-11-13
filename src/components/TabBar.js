import React from 'react';
import {View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import global, {colors} from '../styles';
import MusicController from '../containers/MusicPlayer';
import Icon from '../components/Icon';

const Tab = ({onPress, icon, tint}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{padding: 20}}>
        <Icon asset={icon} size={20} tint={tint} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default class TabBar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{backgroundColor: colors.tabBarBg}}>
        <MusicController componentType={'bar'} />
        <View style={[global.row, {justifyContent: 'center', borderTopWidth: 1, borderTopColor: "#000"}]}>
          <Tab icon={require('../assets/img/user.png')} tint={'#fff'} />
        </View>
      </SafeAreaView>
    );
  }
}
