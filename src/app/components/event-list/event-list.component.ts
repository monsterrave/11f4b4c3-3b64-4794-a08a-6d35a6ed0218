import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { Event } from '../../interfaces/event'
import * as _ from 'lodash';
import { ToastMessageService } from '../../services/toast-message.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, TagModule, ButtonModule, PaginatorModule, DataViewModule, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.sass'
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService, private toastService: ToastMessageService) {}

  ngOnInit(): void {
    this.getEvents();
    this.eventService.removeEvent$.subscribe((ev: Event) => {
      this.events.push(ev);
    });
  }

  private getEvents() {
    this.eventService.fetchEvents().subscribe(res => {
      this.events = res;
    });
  }

  public moveToCart(event: Event) {
    this.eventService.addEvent$.next(event);
    _.remove(this.events, {
      _id: event._id
    });
    this.toastService.showSuccess('success', 'Warenkorb', 'item wurde Warenkorb hinzugefügt');
  }

  

  /* private mapApiResponse(apiResponse: any) {
    this.events = apiResponse.map((obj: any) => {
      obj = new Event(
        obj.id, 
        obj.title, 
        obj.artists, 
        obj.venue, 
        obj.city, 
        obj.country, 
        obj.date, 
        obj.startTime, 
        obj.endTime, 
        obj.flyerFront, 
        obj.attending, 
        obj.private
      )
    });
  } */

}
