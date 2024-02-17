import { Routes } from "@angular/router";
import { RecipeSearchComponent } from "./components/recipe-search/recipe-search.component";

export const routes: Routes = [
  {
    path: "recipes",
    component: RecipeSearchComponent
  },
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
];
