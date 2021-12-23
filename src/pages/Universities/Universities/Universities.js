import { Box, CircularProgress, Container, List, Typography } from '@mui/material';
import React from 'react';
import useData from '../../../hooks/useData';
import University from '../University/University';

const Universities = () => {
    const { universities, isLoading } = useData();


    return (
        isLoading ? <div style={{ marginTop: '15vh' }}>
            <h1>Loading</h1>
            <CircularProgress />
        </div>
            :
            <Container style={{ marginTop: '8vh' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" component="div" gutterBottom sx={{ color: "salmon", pt: 3 }}>
                        All Universities
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: '520px', m: 'auto' }} >
                        {
                            universities.map((university, index) => <University key={index} university={university} />)
                        }
                    </List>
                </Box>
            </Container>
    );
};

export default Universities;