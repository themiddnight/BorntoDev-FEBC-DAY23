import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const lists = [
    'Name (A-Z)',
    'Name (Z-A)',
    'Price (Low to High)',
    'Price (High to Low)',
    'Rating (Low to High)',
    'Rating (High to Low)',
];

export default function ProductFilter() {
    const [order, setOrder] = React.useState(lists[0]);

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value as string);
    };

    return (
        <FormControl>
            <InputLabel>Order by</InputLabel>
            <Select
                value={order}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                sx={{ minWidth: 200 }}
            >
                {lists.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}