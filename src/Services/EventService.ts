import api from '../config/Api';
import { Event } from '../types/models/Event.model';

const EventService = {
    getEvent: async (eventID: string): Promise<Event> => {
        try {
            const { data } = await api.get<Event>(`/event/${eventID}`);
            return data;
        } catch (error) {
            console.error('Error fetching event:', error);
            throw error;
        }
    },

    updateEvent: async (event: Event) => {
        try {
            return await api.put(`/event`, event);
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    },

    addEvent: async (event: Event) => {
        try {
            const { data } = await api.post('/event', event);
            return data;
        } catch (error) {
            console.error('Error adding event:', error);
            throw error;
        }
    },

    getAllEvents: async (): Promise<Event[]> => {
        try {
            const { data } = await api.get<Event[]>(`/event`);
            return data;
        } catch (error) {
            console.error('Error fetching all events:', error);
            throw error;
        }
    },

    deleteEvent: async (id: string) => {
        try {
            return await api.delete(`/event/${id}`);
        } catch (error) {
            console.error('Error deleting event:', error);
            throw error;
        }
    },
};

export default EventService;
