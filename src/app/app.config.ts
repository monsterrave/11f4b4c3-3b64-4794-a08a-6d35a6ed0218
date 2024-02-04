import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { MessageService } from "primeng/api";

import { routes } from "./app.routes";
import { EventService } from "./services/event.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule, BrowserModule, BrowserAnimationsModule),
    MessageService,
    EventService
  ]
};
