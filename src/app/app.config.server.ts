import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideServerRendering } from "@angular/platform-server";

import { appConfig } from "./app.config";

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(),
        BrowserModule,
        BrowserAnimationsModule
    ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
