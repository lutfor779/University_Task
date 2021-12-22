import { Button, Container, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../../hooks/useData';

const TargetUniversity = () => {
    const { name } = useParams();
    const { universities, isLoading } = useData();

    const data = !isLoading && universities.find(university => university.name === name);

    console.log(data)

    return (
        isLoading ? <h1>Loading...</h1>
            :
            <Container>
                <Box sx={{ maxWidth: 680, mx: 'auto', mt: 8 }}>
                    <Paper elevation={3} sx={{ bgcolor: "navy", py: 8, color: 'white' }}>
                        <Typography variant="h4" gutterBottom component="div">
                            {data.name}
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Country: {data?.country}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Domain: {data?.domains[0]}
                        </Typography>


                        <Link href={data?.web_pages[0]} rel="noreferrer" target="_blank" underline="none">
                            <Button
                                sx={{ px: 8, mt: 4 }}
                                variant="contained"
                                color="info">Visit</Button>
                        </Link>

                    </Paper>
                </Box>
            </Container>
    );
};

export default TargetUniversity;