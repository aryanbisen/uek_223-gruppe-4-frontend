export type Event = {
    id: string;
    eventName?: string;  // Matches backend field
    date?: string;
    location?: string;
    guestList?: User[]; // Matches UserNameDTO structure
    eventCreator?: User;
};

export type User = {
    id: string;
    firstName: string;
    lastName: string
};
