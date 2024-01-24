import { Component, EventEmitter, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../interfaces/event'
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, TagModule, DataViewModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.sass'
})
export class ShoppingCartComponent {

  events: Event[] = [];
  @Output() show = new EventEmitter<boolean>();

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.addEvent$.subscribe((event) => {
      this.events.push(event);
      this.showShoppingCart();
    });
  }

  showShoppingCart(): void {
    this.show.emit(true);
  }

  removeFromCart(event: Event) {
    this.eventService.removeEvent$.next(event);
  }
}
