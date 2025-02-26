import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    eventName: Yup.string().required('Event name is required'),
    eventDate: Yup.string().required('Event date is required'),
    location: Yup.string().required('Location is required'),
    guestList: Yup.string().required('Guest list is required'),
});

const EditEventPage = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 320,
    };
    const btnstyle = { marginTop: '16px' };

    const handleSubmit = (values: { eventName: string; eventDate: string; location: string; guestList: string }) => {
        console.log('Event Edited:', values);
        alert('Event Edited Successfully!');
    };

    return (
        <Grid
            container
            style={{
                background: 'linear-gradient(135deg, #2c2c2c, #4b0082)',
                minHeight: '100vh',
            }}
            justifyContent="center"
            alignItems="center"
        >
            <Paper elevation={10} style={paperStyle}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h4" align="center">
                            Edit Event
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Formik
                            initialValues={{
                                eventName: '',
                                eventDate: '',
                                location: '',
                                guestList: '',
                            }}
                            enableReinitialize
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            validateOnChange
                            isInitialValid={false}
                        >
                            {(props) => (
                                <Form onSubmit={props.handleSubmit}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField
                                                label="Event Name"
                                                id="eventName"
                                                placeholder="Enter event name"
                                                fullWidth
                                                required
                                                autoFocus
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.eventName}
                                            />
                                            {props.errors.eventName && (
                                                <div id="feedback">{props.errors.eventName}</div>
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="eventDate"
                                                label="Event Date"
                                                type="date"
                                                fullWidth
                                                required
                                                InputLabelProps={{ shrink: true }}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.eventDate}
                                            />
                                            {props.errors.eventDate && (
                                                <div id="feedback">{props.errors.eventDate}</div>
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Location"
                                                id="location"
                                                placeholder="Enter location"
                                                fullWidth
                                                required
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.location}
                                            />
                                            {props.errors.location && (
                                                <div id="feedback">{props.errors.location}</div>
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                label="Guest List"
                                                id="guestList"
                                                placeholder="Enter guest list"
                                                fullWidth
                                                required
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.guestList}
                                            />
                                            {props.errors.guestList && (
                                                <div id="feedback">{props.errors.guestList}</div>
                                            )}
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                style={btnstyle}
                                                fullWidth
                                            >
                                                Edit Event
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default EditEventPage;
