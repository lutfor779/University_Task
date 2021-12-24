import { Box, Button, CircularProgress, Container, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData';
import University from '../Universities/University/University';

const Home = () => {
    const { universities, isLoading } = useData();
    const [homeData, setHomeData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (universities.length > 0) {
            setHomeData(universities.slice(90, 105))
        }
    }, [universities]);


    return (
        isLoading ? <div style={{ marginTop: '15vh' }}>
            <h1>Loading</h1>
            <CircularProgress />
        </div>

            :
            <div style={{ marginTop: '8vh' }}>
                <img src="https://cur.glitter-graphics.net/pub/3299/3299065hkr1frjavx.gif" alt="banner" height={200} width={"100%"} />
                <Container>
                    <Box sx={{ flexGrow: 1, pb: 4 }}>
                        <Typography variant="h3" component="div" gutterBottom sx={{ color: "salmon", pt: 3 }}>
                            Some Universities
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: '520px', m: 'auto' }} >
                            {
                                homeData.map((university, index) => <University key={index} university={university} />)
                            }
                        </List>
                        <Button variant='outlined'
                            onClick={() => navigate('/universities')}
                            sx={{ width: '100%', maxWidth: '520px', m: 'auto', borderRadius: 16 }}
                            color="secondary">See more</Button>
                    </Box>
                </Container>
            </div>
    );
};

export default Home;