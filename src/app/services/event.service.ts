import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Event } from "../interfaces/event";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventsList: Event[] = [];
  eventsShoppingCart: Event[] = [];

  constructor(private httpClient: HttpClient) {
    this.fetchEvents();
  }

  public fetchEvents() {
    this.httpClient.get<any>("https://teclead-ventures.github.io/data/london-events.json").subscribe((events) => {
      this.eventsList = events;
    });
  }

  public setEventList(events: Event[]) {
    this.eventsList = events;
  }

  public getEventList(): Event[] {
    return this.eventsList;
  }

  public moveToEventList(event: Event): void {
    this.eventsList.push(event);
  }

  public moveToShoppingCart(event: Event): void {
    this.eventsShoppingCart.push(event);
  }

  public getShoppingCartList(): Event[] {
    return this.eventsShoppingCart;
  }
}
