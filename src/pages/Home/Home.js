import { Box, CircularProgress, Container, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import University from '../Universities/University/University';

const Home = () => {
    const { universities, isLoading } = useData();
    const [homeData, setHomeData] = useState(null);
    useEffect(() => {
        if (universities.length > 0) {
            setHomeData(universities.slice(5, 15))
        }
    }, [universities]);
    console.log(homeData)

    return (
        isLoading ? <div>
            <h1>Loading</h1>
            <CircularProgress />
        </div>

            :
            <div>
                <img src="https://cur.glitter-graphics.net/pub/3299/3299065hkr1frjavx.gif" alt="banner" height={200} width={"100%"} />
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <List sx={{ width: '100%', maxWidth: '520px', m: 'auto' }} >
                            {
                                homeData.map((university, index) => <University key={index} university={university} />)
                            }
                        </List>
                    </Box>
                </Container>
            </div>
    );
};

export default Home;