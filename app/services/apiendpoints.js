import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';
const MOVIE_SEARCH_URL = 'http://www.omdbapi.com/?apikey=1e8679ea&t=';

export const identifyMovieUsingAudio = async formData => {
  return await fetch(`${BASE_URL}/convertAudioToText`, {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      // Access the result returned by the Flask API
      const movieResult = JSON.parse(data.result);
      console.log(movieResult);

      const keys = Object.keys(movieResult);
      const maxKey = Math.max(...keys);

      const identifiedMovie = movieResult[maxKey];
      return identifiedMovie;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getMovieDetails = async title => {
  try {
    const response = await fetch(
      'https://www.omdbapi.com/?t=' + title + '&apikey=1e8679ea&r=json',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
