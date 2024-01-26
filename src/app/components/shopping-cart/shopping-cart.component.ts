import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../interfaces/event'
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import * as _ from 'lodash';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule, 
    TagModule, 
    DataViewModule, 
    SidebarModule, 
    TagModule, 
    ButtonModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.sass'
})
export class ShoppingCartComponent {

  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getShoppingCartList();
  }

  removeFromCart(event: Event) {
    _.remove(this.events, {
      _id: event._id
    });
    this.eventService.moveToEventList(event);
  }
}
