import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { RecipeSearchComponent } from "./components/recipe-search/recipe-search.component";

@Component({
  selector: "sdr-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RecipeSearchComponent,
    ToastModule,
    RouterOutlet
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.sass"
})
export class AppComponent {
  title = "Super Duper Recipes!";
}
