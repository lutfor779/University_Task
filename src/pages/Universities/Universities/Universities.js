import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import University from '../University/University';

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=India')
            .then(res => res.json())
            .then(data => {
                setUniversities(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        isLoading ? <h1>Loading...</h1>
            :
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        universities.map((university, index) => <University key={index} university={university} />)
                    }

                </Grid>
            </Box>
    );
};

export default Universities;