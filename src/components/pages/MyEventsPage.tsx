import {
    Paper,
    Grid,
    Typography, List, ListItem, ListItemButton, ListItemText, TablePagination,
} from '@mui/material';
import React from 'react';
import EventService from "../../Services/EventService";
import { Event } from "../../types/models/Event.model"
import {useNavigate} from "react-router-dom";

const MyEventsPage = () => {
    // styling
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 320,
    };

    // pagination
    const [events, setEvents] = React.useState<Event[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        EventService.getEvents(rowsPerPage, page) //TODO: replace with getMyEvents and add user ID
            .then(result => console.debug(result))
            .catch(reason => alert(reason));
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const fetchEvents = () => {
        EventService.getEvents(rowsPerPage, page) //TODO: replace with getMyEvents and add user ID
            .then((result) => setEvents(result))
            .catch((error) => alert(error));
    };
    React.useEffect(() => {
        fetchEvents();
    }, [page, rowsPerPage]);

    // navigation
    const navigate = useNavigate();
    const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const eventId = event.currentTarget.id; // ID des geklickten Elements abrufen
        navigate('/event/' + eventId);
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
                            Your Events
                        </Typography>
                    </Grid>
                    <Grid item>
                        <List>
                            {events.map((value: Event, index: number) => (
                                <ListItem disablePadding key={index}>
                                    <ListItemButton id={value.id} onClick={handleButtonClick}>
                                        <ListItemText primary={value.eventName}
                                                      secondary={value.date + " / " + value.location}/>
                                    </ListItemButton>
                                </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                    <Grid>
                        <TablePagination
                            component="div"
                            count={100}
                            size="small"
                            showFirstButton showLastButton
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default MyEventsPage;
