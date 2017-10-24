import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

// Dependencies for ALL application
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { RouterModule }             from '@angular/router';
import { rootRouterConfig }         from './app.routes';

import 'hammerjs';

// Dependencies for LoginModuleFEDAC components
import { LoginModule }            from "./components/login/login.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LoginModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: false })
    ],
    providers: [ ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
