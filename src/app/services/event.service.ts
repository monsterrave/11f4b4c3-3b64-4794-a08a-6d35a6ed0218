import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  addEvent$ = new Subject<Event>();
  removeEvent$ = new Subject<Event>();

  constructor(private httpClient: HttpClient) {
    this.addEvent$.asObservable();
    this.removeEvent$.asObservable();
  }

  public fetchEvents(): Observable<any> {
    return this.httpClient.get('https://teclead-ventures.github.io/data/london-events.json');
  }
}
