export type Event = {
    id: string;
    eventCreator: User;
    eventName: string;  // Matches backend field
    date?: string;
    location?: string;
    guestList?: User[]; // Matches UserNameDTO structure
};

export type User = { firstName: string; id: string; lastName: string };