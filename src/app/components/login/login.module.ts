import { NgModule }                                                 from '@angular/core';
import { BrowserModule }                                            from "@angular/platform-browser";
import { FlexLayoutModule }                                         from '@angular/flex-layout';

import { MatCardModule, MatInputModule, MatProgressBarModule,
    MatButtonModule, MatTooltipModule, MatIconModule, MatSnackBarModule}  from '@angular/material';

import { LoginComponent }                                           from './login.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader }  from 'ng2-translate/ng2-translate';
import { FormsModule, ReactiveFormsModule }                         from '@angular/forms';
import { HttpClientModule }                                         from '@angular/common/http';
import { Http }                                                     from '@angular/http';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MatCardModule, MatInputModule, MatProgressBarModule, MatButtonModule,
        MatTooltipModule, MatIconModule, MatSnackBarModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [ LoginComponent ],
    exports: [ LoginComponent ]
})
export class LoginModule {

}
