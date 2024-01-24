import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { CommonModule } from '@angular/common';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    EventListComponent, 
    SidebarModule, 
    ShoppingCartComponent, 
    ToastModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Super Duper Events';
  //isVisible = false;

  @ViewChild(Sidebar)sidebar: any;

  showCart(event: any) {
    console.log(event)
    console.log(this.sidebar);
    this.sidebar.show();
  }
}
