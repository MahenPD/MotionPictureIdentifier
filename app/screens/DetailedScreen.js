/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getMovieDetails} from '../services/apiendpoints';
import {screenHeight, screenWidth} from '../utils/helpers';
import {Button, Image} from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';

export default function DetailedScreen({navigation, route}) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (route.params.movie) {
      fetchMovieDetails(route.params.movie);
    }
  }, [route]);

  const fetchMovieDetails = async movie => {
    const data = await getMovieDetails(movie);
    setMovie(data);
  };

  return (
    <View style={styles.container}>
      {movie && (
        <>
          <Image
            source={{
              uri: movie.Poster,
            }}
            style={styles.image}
          />
          <View style={styles.detailsSection}>
            <Text style={styles.movieHeader}>{movie.Title}</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.rating}>
                {parseFloat(movie.imdbRating) / 2}
              </Text>
              <StarRating
                disabled={true}
                maxStars={5}
                halfStarEnabled
                starStyle={{marginRight: 5}}
                // eslint-disable-next-line radix
                rating={parseFloat(movie.imdbRating) / 2}
                fullStarColor={'#FFC700'}
                emptyStarColor={'#ccc'}
                starSize={20}
              />
            </View>
            <Text style={styles.genre}>{movie.Genre}</Text>
            <Text style={styles.description}>{movie.Plot}</Text>
            <View style={styles.flex}>
              <Button
                title="ADD TO LIBRARY"
                icon={{
                  name: 'add',
                  type: 'ionicons',
                  size: 20,
                  color: 'black',
                }}
                iconPosition="left"
                buttonStyle={styles.addBtn}
                containerStyle={styles.addBtn}
                titleStyle={styles.btnTitle}
              />

              <Icon
                color="#FFC700"
                name="download"
                onPress={() => console.log('onPress()')}
                size={35}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#111111',
  },
  detailsSection: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'justify',
    // color: 'black',
  },
  image: {
    resizeMode: 'stretch',
    width: screenWidth,
    height: screenHeight * 0.55,
  },
  movieHeader: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 15,
    color: 'white',
  },
  rating: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    color: '#888888',
  },
  genre: {
    fontSize: 14,
    marginBottom: 15,
    color: 'white',
  },
  addBtn: {
    width: screenWidth * 0.6,
    padding: 6,
    backgroundColor: '#FFC700',
    borderWidth: 0,
    borderRadius: 20,
  },
  btnTitle: {
    color: 'black',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
