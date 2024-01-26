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
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    CommonModule, 
    TagModule, 
    ButtonModule, 
    PaginatorModule, 
    DataViewModule, 
    FormsModule, 
    RouterModule, 
    SidebarModule,
    AutoCompleteModule
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.sass'
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  isVisible = true;
  searchString = '';
  suggestions: Event[]  = [];

  constructor(private eventService: EventService, private toastService: ToastMessageService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents() {
    this.events = this.eventService.getEventList();
    this.events = this.events.sort((b, a) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());
  }

  public moveToCart(event: Event) {
    this.eventService.moveToShoppingCart(event);
    _.remove(this.events, {
      _id: event._id
    });
    this.eventService.setEventList(this.events);
    this.toastService.showSuccess('success', 'Warenkorb', 'item wurde Warenkorb hinzugefügt');
  }

  filterByName(event:any): void {
    let filteredEvents: Event[] = [];
    this.events.forEach((e) => {
      if(e.title.includes(event.query)) {
        filteredEvents.push(e);
      }
    })
    this.events = filteredEvents;
  }

  reset(): void {
    this.events = this.eventService.getEventList();
  }

  openLink(event: Event): void {
    window.open(`${event.venue.direction}`);
  }

}
