import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import EventService from "../../Services/EventService";
import UserService from "../../Services/UserService";
import { User } from "../../types/models/EventWithName.model";

const validationSchema = Yup.object().shape({
    eventName: Yup.string().required('Event name is required'),
    eventDate: Yup.string().required('Event date is required'),
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

    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // Fetch current user on component mount
    useEffect(() => {
        const fetchUser = async () => {
            const userID = localStorage.getItem("userID"); // Assuming the user ID is stored in local storage
            if (userID) {
                const user = await UserService.getUser(userID);
                setCurrentUser(user);
            }
        };

        fetchUser();
    }, []);

    const handleSubmit = async (values: { eventName: string; date: string; location: string; guestList: string }) => {
        if (!currentUser) {
            alert("User not found!");
            return;
        }

        const newEvent = {
            id: crypto.randomUUID(), // Generate a unique ID for the event
            eventCreator: currentUser,
            eventName: values.eventName,
            date: values.date,
            location: values.location,
            guestList: values.guestList.split(",").map((name) => ({
                firstName: name.trim(),
                lastName: "",
                id: crypto.randomUUID(), // Temporary guest IDs, ideally, these should be real user IDs
            })),
        };

        try {
            await EventService.addEvent(newEvent);
            alert("Event Created Successfully!");
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event.");
        }
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
                                id: '',
                                eventCreator: currentUser || { id: '', firstName: '', lastName: '' }, // Default empty user while loading
                                eventName: '',
                                date: '',
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
                                                InputLabelProps={{
                                                    shrink: true, // Ensures label stays above input
                                                }}
                                                onChange={(e) => props.setFieldValue("date", e.target.value)} // Set date value using setFieldValue
                                                onBlur={props.handleBlur}
                                                value={props.values.date || ''} // Ensure empty string if no date is selected
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
