import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Loading() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' pt={9}>
        <Typography variant='body1'>Loading...</Typography>
    </Box>
  )
}
