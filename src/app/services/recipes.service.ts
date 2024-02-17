import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipesService {

  constructor(private httpClient: HttpClient) {}

  public searchRecipes(searchTerm: string, page: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:5000/api/recipe/search?searchTerm=${searchTerm}&page=${page}`);
  }

  public searchSummaryByRecipeId(recipeId: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:5000/api/recipe/searchSummaryByRecipeId?recipeId=${recipeId}`);
  }
}
