import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function EmptyAlert() {
  return (
    <Box sx={{mt: 10}}>
      <Alert severity="warning">Sorry! List is Empty</Alert>
    </Box >
  );
}