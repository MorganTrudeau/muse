import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import global, {colors} from '../styles';
import TrackPlayer from 'react-native-track-player';

const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');
const TRACK_LAYOUT_HEIGHT = 50;

const playTrack = track =>
  TrackPlayer.add([track])
    .then(() => TrackPlayer.skip(track.id))
    .then(() => TrackPlayer.play());

const renderTrack = item => {
  const artworkSize = TRACK_LAYOUT_HEIGHT - 5;
  return (
    <TouchableWithoutFeedback onPress={playTrack.bind(null, item)}>
      <View style={[global.row]}>
        <Image
          source={{uri: item.artwork}}
          style={{
            width: artworkSize,
            height: artworkSize,
            marginHorizontal: 10,
          }}
        />
        <View>
          <Text style={global.titleLargeWhite}>{item.title}</Text>
          <Text style={[global.textLargeWhite, {opacity: 0.5}]}>
            {item.artist}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TracksList = ({tracks, refreshing, onRefresh}) => {
  const renderItem = ({item, index}) => renderTrack(item);
  return (
    <FlatList
      data={tracks}
      initialNumToRender={DEVICE_HEIGHT / TRACK_LAYOUT_HEIGHT}
      renderItem={renderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default TracksList;
