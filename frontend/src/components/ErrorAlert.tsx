import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function ErrorAlert() {
  return (
    <Box sx={{mt: 10}}>
      <Alert severity="error">Somting went wrong!</Alert>
    </Box >
  );
}