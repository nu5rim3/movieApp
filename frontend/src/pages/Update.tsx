import { Box, Button, Container, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { update, get } from '../actions/movie.action';
import ErrorAlert from '../components/ErrorAlert';
import Loader from '../components/Loader'
import { RootState } from '../reducer';

const Update: React.FC = () => {
    const [movieState, setmovieState] = useState<any | null>(null)

    let { movieId } = useParams();

    const movieData = useSelector((state: RootState) => state.movie);

    const { data, loading, error } = movieData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get(movieId));
    }, [dispatch, movieId]);


    useEffect(() => {
        setmovieState(data)

        setName(movieState?.name)
        setYear(movieState?.year)
        setDes(movieState?.plot)
        setUrl(movieState?.url)
    }, [data]);

    const [name, setName] = useState(movieState?.name);
    const [year, setYear] = useState(movieState?.year);
    const [plot, setDes] = useState(movieState?.plot);
    const [url, setUrl] = useState(movieState?.url);

    const onUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let movie = {
            name: name,
            year: year,
            plot: plot,
            url: url
        }

        dispatch(update(movieId, JSON.stringify(movie)));

    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 5 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Update movie details
                </Typography>

                <Box sx={{ boxShadow: 5, borderRadius: 3, p: 5 }} display="flex" justifyContent="center" alignItems="center">
                    {
                        loading ? (
                            <Loader />
                        ) : error ? (
                            <ErrorAlert />
                        ) : (
                            <Box>
                                <form onSubmit={onUpdate}>
                                    <TextField
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        sx={{ mb: 2, width: '100%' }}
                                        label="Name"
                                        type="text"
                                        value={name}
                                        placeholder="Black Panther"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <TextField
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        sx={{ mb: 2, width: '100%' }}
                                        label="Year"
                                        type="number"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                    <TextField
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        sx={{ mb: 2, width: '100%' }}
                                        label="Description"
                                        type="text"
                                        value={plot}
                                        onChange={(e) => setDes(e.target.value)}
                                    />
                                    <TextField
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        sx={{ mb: 2, width: '100%' }}
                                        label="Torrent Link"
                                        type="text"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{ mb: 2 }}
                                        disableElevation
                                        type="submit" >
                                        Update
                                    </Button>
                                </form>
                            </Box>
                        )}
                </Box>
            </Box>
        </Container>
    )
}

export default Update;