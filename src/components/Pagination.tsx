import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
    page: number,
    pages: number,
    setPage: (page: number) => void
}

export default function BasicPagination({ page, pages, setPage }: Props) {

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Stack spacing={2} sx={{ marginBlock: 6 }}>
            <Pagination count={pages} page={page} color="primary" onChange={handleChange}/>
        </Stack>
    );
}