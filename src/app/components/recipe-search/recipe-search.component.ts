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
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: "sdr-recipe-search",
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule,
    InputTextareaModule,
  ],
  templateUrl: "./recipe-search.component.html",
  styleUrl: "./recipe-search.component.scss"
})
export class RecipeSearchComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  recipeSearchForm = new FormGroup({
    search: new FormControl(""),
    summary: new FormControl("")
  });
  suggestions = [];
  responsiveOptions: any = [];
  summary: any;

  constructor(private recipesService: RecipesService, private toastService: ToastMessageService) {}

  ngOnInit(): void {
    this.subscription = this.searchRecipesOnValueChange();

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];
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
      this.suggestions = response.results;
      console.log(this.suggestions);
    });
  }

  showRecipeSummary(recipeSummaryId: string) {
    this.recipesService.searchSummaryByRecipeId(recipeSummaryId).subscribe((response: any) => {
      this.summary = response.summary;
      this.recipeSearchForm.get("summary")?.setValue(this.summary);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
