export type EventWithName = {
    id: string;
    eventCreator: User;
    eventName: string;  // Matches backend field
    date?: string;
    location?: string;
    guestList?: User[]; // Matches UserNameDTO structure
};

export type User = { id: string; firstName: string; lastName: string };