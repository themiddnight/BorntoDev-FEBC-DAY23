import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchBox() {
    return (
        <Box
            display={'flex'}
            gap={1}
        >
            <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
            <Button variant="text" sx={{paddingInline:2}}>Search</Button>
        </Box>
    );
}