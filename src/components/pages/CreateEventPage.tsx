import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import EventService from "../../Services/EventService";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/models/Event.model";

const validationSchema = Yup.object().shape({
    eventName: Yup.string().required('Event name is required'),
    date: Yup.string().required('Event date is required'),
    location: Yup.string().required('Location is required'),
    guestList: Yup.string().required('Guest list is required'),
});

const CreateEventPage = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 320,
    };
    const btnstyle = { marginTop: '16px' };

    const navigate = useNavigate();

    const handleSubmit = (values: {
        eventName: string;
        date: string;
        location: string;
        guestList: string;
    }) => {
        const newEvent = {
            id: crypto.randomUUID(),
            eventName: values.eventName,
            date: values.date,
            location: values.location,
            guestList: values.guestList.split(",").map((name) => ({
                firstName: name.trim(),
                lastName: "",
                id: crypto.randomUUID(),
            })),
        };

        EventService.addEvent(newEvent)
            .then(() => {
                alert("Event Created Successfully!");
                navigate("/events");
            })
            .catch((error) => {
                console.error("Error creating event:", error);
                alert("Failed to create event.");
            });
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
                            Create Event
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Formik
                            initialValues={{
                                eventName: '',
                                date: '',
                                location: '',
                                guestList: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            validateOnChange
                            enableReinitialize
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
                                                id="date"
                                                label="Event Date"
                                                type="date"
                                                fullWidth
                                                required
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.date || ''}
                                            />
                                            {props.errors.date && (
                                                <div id="feedback" style={{ color: 'red' }}>
                                                    {props.errors.date}
                                                </div>
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
                                                label="Guest List (comma separated)"
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
                                                Create Event
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

export default CreateEventPage;
