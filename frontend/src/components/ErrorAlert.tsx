import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';

interface Ialter {
  message: string | undefined;
}

const ErrorAlert = (message: Ialter) => {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, [])


  return (
    <Snackbar open={open}>
      <Alert severity="error">{message.message}</Alert>
    </Snackbar >
  );
}

export default ErrorAlert;