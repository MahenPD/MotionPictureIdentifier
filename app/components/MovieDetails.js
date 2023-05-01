import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {getMovieDetails} from '../services/apiendpoints';

const MovieDetails = ({title}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(title);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [title]);

  return (
    <View>
      {movie && (
        <>
          <Text>{movie.Title}</Text>
          <Image source={{uri: movie.Poster}} />
        </>
      )}
    </View>
  );
};

export default MovieDetails;
