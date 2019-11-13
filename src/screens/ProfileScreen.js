import React from 'react';
import global, {colors} from '../styles';
import {connect} from 'react-redux';
import {View, SafeAreaView} from 'react-native';
import Avatar from '../components/Avatar';
import TracksList from '../components/TracksList';
import {tracksToArray} from '../utils/selectors';

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={global.container}>
          <View style={{paddingVertical: 40, paddingHorizontal: 20}}>
            <Avatar size={35} user={this.props.activeUser} />
          </View>
          <TracksList tracks={this.props.tracks} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapState = state => {
  return {tracks: tracksToArray(state), activeUser: state.auth.data};
};

export default connect(mapState)(ProfileScreen);
