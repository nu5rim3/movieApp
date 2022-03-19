import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../components/Loader';

// action
import { add } from '../actions/movie.action';
import { RootState } from '../reducer';

const formData = new FormData();

const AddNew: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [des, setDes] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    const dispatch = useDispatch();

    const onAddNew = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formData.append("name", name);
        formData.append("year", year);
        formData.append("plot", des);
        formData.append("url", url);
        dispatch(add(formData));
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }
        formData.append("file", e.target.files[0], e.target.files[0].name);
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
                                id="name"
                                type="text"
                                placeholder="Black Panther"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Year"
                                id="year"
                                type="number"
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Description"
                                id="plot"
                                type="text"
                                onChange={(e) => setDes(e.target.value)}
                            />
                            <TextField
                                required
                                sx={{ mb: 2, width: '100%' }}
                                label="Torrent Link"
                                id="url"
                                type="text"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <TextField
                                required
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