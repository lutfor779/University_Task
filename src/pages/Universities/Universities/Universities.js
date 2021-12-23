import { Box, CircularProgress, Container, List } from '@mui/material';
import React from 'react';
import useData from '../../../hooks/useData';
import University from '../University/University';

const Universities = () => {
    const { universities, isLoading } = useData();


    return (
        isLoading ? <div>
            <h1>Loading</h1>
            <CircularProgress />
        </div>
            :
            <Container>
                <Box sx={{ flexGrow: 1 }}>
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