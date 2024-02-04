import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import * as _ from "lodash";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { PaginatorModule } from "primeng/paginator";
import { SidebarModule } from "primeng/sidebar";
import { TagModule } from "primeng/tag";

import { Event } from "../../interfaces/event";
import { EventService } from "../../services/event.service";
import { ToastMessageService } from "../../services/toast-message.service";

@Component({
    selector: "app-event-list",
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
    templateUrl: "./event-list.component.html",
    styleUrl: "./event-list.component.scss"
})
export class EventListComponent implements OnInit {
    events: Event[] = [];
    isVisible = true;
    searchString = "";
    suggestions: Event[] = [];

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
        this.toastService.showSuccess("success", "Warenkorb", "item wurde Warenkorb hinzugefügt");
    }

    filterByName(event:any): void {
        const filteredEvents: Event[] = [];
        this.events.forEach((e) => {
            if (e.title.includes(event.query)) {
                filteredEvents.push(e);
            }
        });
        this.events = filteredEvents;
    }

    reset(): void {
        this.events = this.eventService.getEventList();
    }

    openLink(event: Event): void {
        window.open(`${event.venue.direction}`);
    }
}
