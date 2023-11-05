import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type Props = {
    value: number,
}

export default function BasicRating( {value}: Props ) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
        precision={0.5}
        value={value}
        readOnly
      />
    </Box>
  );
}