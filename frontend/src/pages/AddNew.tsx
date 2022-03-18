import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';

// action
import { add } from '../actions/movie.action';
import { RootState } from '../reducer';

const AddNew: React.FC = () =>{
    const [name, setName] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [des, setDes] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    const dispatch = useDispatch();

    const onAddNew = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let movie = {
            name: name,
            year: year,
            plot: des,
            url: url
        }
        dispatch(add(JSON.stringify(movie)));
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 5 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Add a new movie
                </Typography>

                <Box sx={{ boxShadow: 5, borderRadius: 3, p: 5 }} display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <form onSubmit={onAddNew}>
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Name"
                                type="text"
                                placeholder="Black Panther"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Year"
                                type="number"
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Description"
                                type="text"
                                onChange={(e) => setDes(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Torrent Link"
                                type="text"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                sx={{ mb: 2 }}
                                disableElevation
                                type="submit" >
                                Add
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default AddNew