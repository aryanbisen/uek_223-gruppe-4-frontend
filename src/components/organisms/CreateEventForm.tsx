import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import CreateForm from '../molecules/CreateForm';

const CreateEventForm: React.FC = () => {
    const handleSubmit = (values: any) => {
        console.log('Event created:', values);
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2c2c2c, #4b0082)' }}>
            <Paper elevation={10} style={{ padding: 20, width: 350 }}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h5" align="center">Create Event</Typography>
                    </Grid>
                    <CreateForm onSubmit={handleSubmit} />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default CreateEventForm;
