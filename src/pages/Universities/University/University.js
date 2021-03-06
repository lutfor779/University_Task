import { ListItem, ListItemButton, ListItemText, } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const University = ({ university }) => {
    const navigate = useNavigate();

    const handleDetails = (name) => {
        navigate(`/universities/university/${name}`);
    }
    // console.log(university.name)
    return (
        <ListItem sx={{ bgcolor: 'navy', my: 4, borderRadius: 16 }}>
            <ListItemButton sx={{ color: 'white', borderRadius: 16, textAlign: 'center' }}
                onClick={() => handleDetails(university.name)}>
                <ListItemText primary={university.name} />
            </ListItemButton>
        </ListItem>

    );
};

export default University;