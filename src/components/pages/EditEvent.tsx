import React from 'react';
import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Define the form values interface
interface EventFormValues {
    guestlist: string;
    eventName: string;
    date: string;
    location: string;
}

// Validation schema with Yup
const validationSchema = Yup.object().shape({
    guestlist: Yup.string().required('Required'),
    eventName: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
});

const CreateEvent: React.FC = () => {
    const paperStyle: React.CSSProperties = {
        padding: 20,
        width: 350,
    };
    const btnStyle: React.CSSProperties = { marginTop: '16px' };

    const handleSubmit = (values: EventFormValues) => {
        console.log('Event created:', values);
        // Add event creation logic here
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
                        <Typography variant="h5" align="center">
                            Create Event
                        </Typography>
                    </Grid>
                    <Formik
                        initialValues={{
                            guestlist: '',
                            eventName: '',
                            date: '',
                            location: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur, errors, touched }) => (
                            <Form>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            label="Guest List"
                                            id="guestlist"
                                            placeholder="Enter guest list"
                                            fullWidth
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.guestlist}
                                            error={touched.guestlist && Boolean(errors.guestlist)}
                                            helperText={touched.guestlist && errors.guestlist}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Event Name"
                                            id="eventName"
                                            placeholder="Enter event name"
                                            fullWidth
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.eventName}
                                            error={touched.eventName && Boolean(errors.eventName)}
                                            helperText={touched.eventName && errors.eventName}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Date"
                                            id="date"
                                            type="date"
                                            fullWidth
                                            required
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                            error={touched.date && Boolean(errors.date)}
                                            helperText={touched.date && errors.date}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            label="Location"
                                            id="location"
                                            placeholder="Enter location"
                                            fullWidth
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.location}
                                            error={touched.location && Boolean(errors.location)}
                                            helperText={touched.location && errors.location}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="submit"
                                            color="primary"
                                            variant="contained"
                                            style={btnStyle}
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
            </Paper>
        </Grid>
    );
};

export default CreateEvent;
