export type Event = {
    id: string;
    eventName: string;  // Matches backend field
    date?: string;
    location?: string;
    guestList?: { id: string; firstName: string; lastName: string }[]; // Matches UserNameDTO structure
};
