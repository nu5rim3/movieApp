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
const RootCard = styled(Card)({
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
});

interface Props {
    name: string;
    id: string;
    year: string;
    des: string;
    url: string;
    imgUrl: string;
}

const MovieCard = ({ name, id, des, year, imgUrl }: Props) => {
    return (
        <RootCard>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <MovieImage src={`http://localhost:8070/${imgUrl}`} />
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
        </RootCard>
    )
}


export default MovieCard;