import React from 'react';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../atoms/TextInput';
import DateInput from '../atoms/DateInput';
import SubmitButton from '../atoms/SubmitButton';

interface EventFormValues {
    guestlist: string;
    eventName: string;
    date: string;
    location: string;
}

const validationSchema = Yup.object().shape({
    guestlist: Yup.string().required('Required'),
    eventName: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
});

interface EventFormProps {
    onSubmit: (values: EventFormValues) => void;
}

const EditForm: React.FC<EventFormProps> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ guestlist: '', eventName: '', date: '', location: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, handleBlur, errors, touched }) => (
                <Form>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextInput
                                label="Guest List"
                                id="guestlist"
                                placeholder="Enter guest list"
                                value={values.guestlist}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.guestlist && Boolean(errors.guestlist)}
                            />
                        </Grid>
                        <Grid item>
                            <TextInput
                                label="Event Name"
                                id="eventName"
                                placeholder="Enter event name"
                                value={values.eventName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.eventName && Boolean(errors.eventName)}
                            />
                        </Grid>
                        <Grid item>
                            <DateInput
                                id="date"
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.date && Boolean(errors.date)}
                            />
                        </Grid>
                        <Grid item>
                            <TextInput
                                label="Location"
                                id="location"
                                placeholder="Enter location"
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.location && Boolean(errors.location)}
                            />
                        </Grid>
                        <Grid item>
                            <SubmitButton label="Save Changes" />
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default EditForm;
