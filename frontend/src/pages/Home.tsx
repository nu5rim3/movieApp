import React, { useEffect } from 'react';
// material
import { Box, Container} from '@mui/material';
import MovieList from '../components/MovieList';

import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../actions/movie.action';
import { RootState } from '../reducer';
import Loader from '../components/Loader';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.allMovie.data);
  const loading = useSelector((state: RootState) => state.allMovie.loading);

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  return (
    <Container>
      <Box
        alignItems="center"
        justifyContent="center">
        {loading ? <Loader /> :
          <MovieList data={data} />
        }
      </Box>
    </Container>
  )
}

export default Home;