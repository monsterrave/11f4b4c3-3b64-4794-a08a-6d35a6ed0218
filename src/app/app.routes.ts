import { Routes } from "@angular/router";

import { EventListComponent } from "./components/event-list/event-list.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

export const routes: Routes = [
  {
    path: "events",
    component: EventListComponent
  },
  { path: "cart", component: ShoppingCartComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
];
