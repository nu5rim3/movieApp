import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { styled } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { get, deleteOne } from '../actions/movie.action';

import Loader from '../components/Loader';
import { RootState } from '../reducer';


const MovieImage = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
});

const Details = () => {
    const [movieState, setmovieState] = useState<any | null>(null);
    let { movieId } = useParams();
    const pathname = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'));


    const movieData = useSelector((state: RootState) => state.movie);

    const { data, loading } = movieData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get(movieId));
    }, [dispatch, movieId]);


    useEffect(() => {
        setmovieState(data);
    }, [data]);

    const onDelete = () => {
        dispatch(deleteOne(movieId))
    }

    return (
        <Container>
            {loading ? <Loader /> : <>
                <Box sx={{ pt: '50%', position: 'relative' }}>
                    <MovieImage src={'https://via.placeholder.com/700'} />
                </Box>
                <Stack spacing={2} sx={{ p: 3 }}>
                    <Typography variant="subtitle1" noWrap>
                        {movieState?.name} -&nbsp;

                        {movieState?.year} 
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                        {movieState?.plot}
                    </Typography>
                    <a target="_blank" href={movieState?.url} rel="noreferrer">Torrent link</a>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to={{ pathname: `${pathname}/update/${movieId}` }} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }} >
                        <Button variant='contained' fullWidth>Edit</Button>
                    </Link>
                    <Button variant='contained' color='error' fullWidth onClick={onDelete}>Delete</Button>
                </Stack>
            </>}
        </Container >
    )
}

export default Details