import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { debounceTime, Subscription } from "rxjs";
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from "../../services/recipes.service";
import { ToastMessageService } from "../../services/toast-message.service";

@Component({
  selector: "app-recipe-search",
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./recipe-search.component.html",
  styleUrl: "./recipe-search.component.scss"
})
export class RecipeSearchComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  recipeSearchForm = new FormGroup({
    search: new FormControl("")
  });
  suggestions = [];

  constructor(private recipesService: RecipesService, private toastService: ToastMessageService) {}

  ngOnInit(): void {
    this.subscription = this.searchRecipesOnValueChange();
  }

  searchRecipesOnValueChange(): Subscription | undefined {
    return this.recipeSearchForm.get("search")?.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((val) => {
      this.searchRecpies(val, "5");
    });
  }

  searchRecpies(searchTerm: any, page = "5"): void {
    this.recipesService.searchRecipes(searchTerm, page).subscribe((response: any) => {
      this.suggestions = response;
      console.log(this.suggestions);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
