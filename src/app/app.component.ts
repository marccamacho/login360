import { Component, ElementRef, AfterViewInit }     from '@angular/core';
import { Http, Headers, Response, RequestOptions }  from '@angular/http';
import { TranslateService }                         from 'ng2-translate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{

    constructor(translate: TranslateService, private element: ElementRef, private http: Http) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('cat');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('cat');
    }

    ngAfterViewInit() { }
}
