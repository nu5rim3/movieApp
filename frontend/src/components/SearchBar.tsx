import React, { useState } from 'react'
// material
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { searchOne, getAll } from '../actions/movie.action';

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();

    const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search === "") {
            dispatch(getAll())
        } else {
            dispatch(searchOne(search))
        }
        setSearch("")
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box sx={{ width: '60%' }} >
                <form onSubmit={onSearch}>
                    <TextField
                        sx={{ mb: 2, width: '100%' }}
                        label="Search"
                        value={search}
                        type="input"
                        placeholder="Search your movie here...."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button sx={{ width: '100%' }} variant="contained" type="submit">Search</Button>
                </form>
            </Box>
        </Box>
    )
}

export default SearchBar;
