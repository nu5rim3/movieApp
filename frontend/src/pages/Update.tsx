import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { update, get } from '../actions/movie.action';
import Loader from '../components/Loader'
import { RootState } from '../reducer';

const formData = new FormData();

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
        setImgUrl(movieState?.imgUrl)
    }, [data]);

    const [name, setName] = useState(movieState?.name);
    const [year, setYear] = useState(movieState?.year);
    const [plot, setDes] = useState(movieState?.plot);
    const [url, setUrl] = useState(movieState?.url);
    const [imgUrl, setImgUrl] = useState(movieState?.imgUrl);

    const onUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formData.append("name", name);
        formData.append("year", year);
        formData.append("plot", plot);
        formData.append("url", url);

        dispatch(update(movieId, formData));

    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }
        formData.append("file", e.target.files[0], e.target.files[0].name);
    }

    const MovieImage = styled('img')({
        top: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute'
    });

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
                                    <TextField
                                        sx={{ mb: 2, width: '100%' }}
                                        id="image"
                                        type="file"
                                        onChange={handleChange}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{ mb: 2 }}
                                        disableElevation
                                        type="submit" >
                                        Update
                                    </Button>
                                </form>
                                <Box sx={{ pt: '100%', position: 'relative' }}>
                                    <MovieImage src={`http://localhost:8070/${imgUrl}`} />
                                </Box>
                            </Box>
                        )}
                </Box>
            </Box>
        </Container>
    )
}

export default Update;