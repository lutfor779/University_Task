import { Box, CircularProgress, Container, List, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useData from '../../../hooks/useData';
import University from '../University/University';

const Universities = () => {
    const { universities, isLoading, total } = useData();

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (universities.length > 0) {
            setItems(universities.slice((page - 1) * 10, page * 10 + 10))
        }
    }, [page, universities]);

    return (
        isLoading ? <div style={{ marginTop: '15vh' }}>
            <h1>Loading</h1>
            <CircularProgress />
        </div>
            :
            <Container style={{ marginTop: '8vh' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" component="div" gutterBottom sx={{ color: "navy", pt: 3 }}>
                        All Universities
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: '580px', m: 'auto' }} >
                        {
                            items.map((university, index) => <University key={index} university={university} />)
                        }
                    </List>

                    <Stack sx={{ width: '100%', maxWidth: '580px', m: 'auto', borderRadius: 16, my: 3, py: 1, bgcolor: 'lightyellow' }}>
                        <Pagination
                            sx={{ m: 'auto', color: 'white' }}
                            color="primary"
                            count={total}
                            page={page}
                            onChange={handleChange} />
                    </Stack>

                </Box>
            </Container>
    );
};

export default Universities;