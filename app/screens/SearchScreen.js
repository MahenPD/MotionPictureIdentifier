import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {identifyMovieUsingAudio} from '../services/apiendpoints';
import {getPermissions} from '../utils/helpers';
import {Icon} from '@rneui/themed';
import Grid from '../../assets/icons/Grid';
import Trending from '../../assets/icons/Trending';

export default function SearchScreen({navigation}) {
  const [searchTapped, setSearchTapped] = useState(false);

  const audioRecorderPlayer = new AudioRecorderPlayer();

  useEffect(() => {
    getPermissions();
  }, []);

  useEffect(() => {
    if (searchTapped) {
      console.log(searchTapped);
      toggleRecording();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTapped]);

  const toggleRecording = async () => {
    try {
      const audioPath = await audioRecorderPlayer.startRecorder();
      setTimeout(async () => {
        await audioRecorderPlayer.stopRecorder();
        const formData = new FormData();

        formData.append('audio', {
          uri: audioPath,
          name: 'audio.mp4',
          type: 'audio/mp4',
        });

        const result = await identifyMovieUsingAudio(formData);
        setSearchTapped(!searchTapped);

        console.log('Identified Movie: ', result);
        navigation.navigate('DetailedScreen', {movie: result});
        return result;
      }, 11000); // Record for 10 seconds
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.circleIcon}>
          <Grid />
        </View>
        <View style={styles.circleIcon}>
          <Trending />
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          onPress={() => setSearchTapped(!searchTapped)}
          style={styles.touchableContainer}>
          <Text style={styles.title}>
            {searchTapped ? 'SEARCHING ...' : 'TAP TO SEARCH'}
          </Text>
          <Image
            style={styles.image}
            source={require('./../../assets/wawe-img.png')}
          />
          <View style={styles.circleIcon}>
            <Icon name="search" color={'#FFC700'} size={30} />
          </View>
          {searchTapped && (
            <View style={styles.lottieContainer}>
              <LottieView
                source={require('./../../assets/ripple.json')}
                autoPlay
                loop
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 50,
    marginTop: 60,
  },
  image: {
    marginVertical: 70,
    zIndex: 99,
  },
  touchableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleIcon: {},
  lottieContainer: {
    position: 'absolute',
    justifyContent: 'center',
    top: -150,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    zIndex: 1,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
});
