import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import EventService from "../../Services/EventService";
import {User} from "../../types/models/Event.model";
import {useNavigate, useParams} from "react-router-dom";
import {Event} from "../../types/models/Event.model"

const validationSchema = Yup.object().shape({
    eventName: Yup.string().required('Event name is required'),
    date: Yup.string().required('Event date is required'),
    location: Yup.string().required('Location is required'),
    guestList: Yup.string().required('Guest list is required'),
});

const EditEventPage = () => {
    // styling

    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 320,
    };
    const btnstyle = {marginTop: '16px'};

    // navigation

    const navigate = useNavigate();
    const redirectToError = () => {
        navigate('/error');
    };

    // submit form

    const handleSubmit = (values: {
        id: string;
        eventName: string;
        date: string;
        location: string;
        guestList: User[]
    }) => {
        EventService.updateEvent(values)
        console.log('Event Edited:', values);
        alert('Event Edited Successfully!');
    };

    // get original event data

    const [originalEvent, setOriginalEvent] = React.useState<Event>({
        id: '',
        eventName: '',
        date: '',
        location: '',
        guestList: [],
    });
    let eventID = useParams().eventID;
    if (typeof eventID !== "string") {
        redirectToError();
    } else {

    }
    if (!originalEvent) {
        redirectToError();
    }

    useEffect(() => {
        EventService.getEvent(eventID ?? "")
            .then(res => setOriginalEvent(res))
            .catch(reason => redirectToError());
    },[])

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
                                id: originalEvent?.id || '',
                                eventName: originalEvent?.eventName || '',
                                date: originalEvent?.date || '',
                                location: originalEvent?.location || '',
                                guestList: originalEvent?.guestList || [],
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
                                                onChange={(e) =>
                                                    props.setFieldValue("date", e.target.value)} // Set date value using setFieldValue
                                                onBlur={props.handleBlur}
                                                value={props.values.date || ''} // Ensure empty string if no date is selected
                                            />
                                            {props.errors.date && (
                                                <div id="feedback" style={{color: 'red'}}>
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
                                                label="Guest List"
                                                id="guestList"
                                                placeholder="Enter guest list"
                                                fullWidth
                                                required
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.guestList}
                                            />
                                            {props.errors.guestList && typeof props.errors.guestList === 'string' && (
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
