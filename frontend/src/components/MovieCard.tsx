import { Box, Button, Card, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const MovieImage = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
});

interface Props {
    name: string;
    id: string;
    year: string;
    des: string;
    url: string;
}

const MovieCard = ({ name, id, des, year }: Props) => {
    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <MovieImage src={'https://via.placeholder.com/150'} />
            </Box>
            <Stack spacing={2} sx={{ p: 3 }}>
                <Typography variant="subtitle1" noWrap>
                    {name}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                    {year}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                    {des}
                </Typography>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Link to={{ pathname: `/movie/${id}` }} style={{ textDecoration: 'none' }}>
                        <Button>
                            view more
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Card>
    )
}


export default MovieCard;