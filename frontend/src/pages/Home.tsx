import React, { useEffect, useState } from 'react';
// material
import { Box, Container } from '@mui/material';
import MovieList from '../components/MovieList';

import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../actions/movie.action';
import { RootState } from '../reducer';
import Loader from '../components/Loader';
import { MovieDetailsList, Movie } from '../types/types'
import ErrorAlert from '../components/ErrorAlert';
import EmptyAlert from '../components/EmptyAlert';

const Home: React.FC = () => {
  const [moviesList, setmoviesList] = useState<Movie[]>([])
  const dispatch = useDispatch();
  const moviesData = useSelector((state: RootState) => state.allMovie);

  const { data, loading } = moviesData;

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  useEffect(() => {
    setmoviesList(data)
  }, [data])
  
  return (
    <Container>
      <Box
        alignItems="center"
        justifyContent="center">
        {
          loading ? (
            <Loader />
          ) : moviesList.length === 0 ? (
            <EmptyAlert />
          ) : (
            <MovieList data={moviesList} />
          )}
      </Box>
    </Container>
  )
}

export default Home;