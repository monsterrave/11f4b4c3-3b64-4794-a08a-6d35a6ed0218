import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToastModule } from "primeng/toast";

import { EventListComponent } from "./components/event-list/event-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    EventListComponent,
    ShoppingCartComponent,
    ToastModule,
    RouterOutlet
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.sass"
})
export class AppComponent {
  title = "Super Duper Events";
}
