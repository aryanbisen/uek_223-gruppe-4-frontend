import api from '../config/Api';
import { Event } from '../types/models/Event.model';
import { User } from "../types/models/User.model";

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

    updateEvent: async (event: Event) : Promise<Event> => {
        try {
            const { data } = await api.put(`/event`, event);
            return data;
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    },

    addEvent: async (event: Event): Promise<Event> => {
        try {
            const { data } = await api.post('/event', event);
            return data;
        } catch (error) {
            console.error('Error adding event:', error);
            throw error;
        }
    },

    getEvents: async (size: number, offset: number): Promise<Event[]> => {
        try {
            const { data } = await api.get<Event[]>(`/event?size=${size}&offset=${offset}`);
            return data;
        } catch (error) {
            console.error('Error fetching all events:', error);
            throw error;
        }
    },

    getMyEvents: async (userID: string, size: number, offset: number): Promise<Event[]> => {
        try {
            const { data } = await api.get<Event[]>(`/event/creator/${userID}?size=${size}&offset=${offset}`);
            return data;
        } catch (error) {
            console.error('Error fetching all events:', error);
            throw error;
        }
    },

    getEventGuests: async (eventID: string, size: number, offset: number) : Promise<User[]> => {
        try {
            const { data } = await api.get<User[]>(`/event/${eventID}/guests?size=${size}&offset=${offset}`);
            return data;
        } catch (error) {
            console.error('Error fetching all guests:', error);
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
