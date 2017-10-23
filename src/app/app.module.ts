import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

// Dependencies for ALL application
import { MatCardModule, MatInputModule, MatProgressBarModule, MatTabsModule,
         MatChipsModule, MatAutocompleteModule, MatButtonModule }           from '@angular/material';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { Http, HttpModule }         from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { FlexLayoutModule }         from '@angular/flex-layout';
import { RouterModule }             from '@angular/router';
import { rootRouterConfig }         from './app.routes';

import 'hammerjs';

// Dependencies for LoginModuleFEDAC components
import { LoginModule }            from "./components/login/login.module";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        LoginModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        RouterModule.forRoot(rootRouterConfig, { useHash: false })
    ],
    providers: [ ],
    bootstrap: [ AppComponent]
})
export class AppModule { }
