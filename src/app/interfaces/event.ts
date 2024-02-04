import { Artist } from "./artist";
import { Venue } from "./venue";

export interface Event {
    _id: string,
    title: string,
    flyerFront: string,
    attending: number,
    date: Date,
    startTime: Date,
    endTime: Date,
    contentUrl: string,
    venue: Venue,
    artists: Artist[],
    city: string,
    country: string,
    private: boolean,
    __v: number
}
