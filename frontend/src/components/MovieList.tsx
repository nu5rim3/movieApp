import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

// ----------------------------------------------------------------------

export default function MovieList(data: any) {
  return (
    <Grid container spacing={3} sx={{ paddingY: 5 }}>
      {data.data.map((item: { _id: string; name: string; plot: string; url: string; year: string; imgUrl: string }) => (
        <Grid key={item._id} item xs={12} sm={6} md={3}>
          <MovieCard name={item.name} id={item._id} des={item.plot} url={item.url} year={item.year} imgUrl={item.imgUrl} />
        </Grid>
      ))}
    </Grid>
    // <></>
  );
}