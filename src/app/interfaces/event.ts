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

/* export class Event {
    id: string;
    title: string;
    artists: Artist[];
    venue: Venue;
    city: string;
    country: string;
    date: Date;
    start: Date;
    end: Date;
    flyerFrontUrl: string;
    attending: number;
    isPrivate: boolean;

    constructor(
        id: any, 
        title: string, 
        artists: any[], 
        venue: any, 
        city: string, 
        country: string, 
        date: Date, 
        start: Date,
        end: Date,
        flyerFrontUrl: string,
        attending: number,
        isPrivate: boolean
    ) {
        this.id = id;
        this.title = title;
        this.artists = artists;
        this.venue = venue;
        this.city = city;
        this.country = country;
        this.date = date;
        this.start = start;
        this.end = end;
        this.flyerFrontUrl = flyerFrontUrl;
        this.attending = attending;
        this.isPrivate = isPrivate;
    }
} */
