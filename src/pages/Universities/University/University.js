import { Grid } from '@mui/material';
import React from 'react';

const University = ({ university }) => {
    console.log(university)

    return (

        <Grid item xs={2} sm={4} md={4}>
            <h1>{university.name}</h1>
        </Grid>

    );
};

export default University;