import { Component, OnInit }                                from '@angular/core';
import { trigger, animate, state, style, transition }       from '@angular/animations';
import { FormControl, Validators }                          from '@angular/forms';
import { ActivatedRoute }                                   from '@angular/router';
import { environment }                                      from '../../../environments/environment';
import { Http, Headers, RequestOptions }                    from '@angular/http';
import { MatSnackBar }                                      from '@angular/material';
import { TranslateService }                                 from 'ng2-translate';

// For email format verification
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [
        trigger('flyInOut', [
            state('true', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ])
        ])
    ]
})

export class LoginComponent implements OnInit{
    // Control vars
    private loading             = false;
    private user                = {username:"", password:"", email:""}
    private recoverForm         = false;    // Control when show the message
    private emailFormControl    = new FormControl('', [
                Validators.required,
                Validators.pattern(EMAIL_REGEX)
    ]);
    private usernameFormControl = new FormControl('', [ Validators.required ]);
    private passwordFormControl = new FormControl('', [ Validators.required ]);

    // Previous page
    private continueURL : string;

    // ActivatedRoute is used to get Query Params to get the URL to redirect on finish login.
    constructor(private translate: TranslateService,
                private route: ActivatedRoute,
                private http: Http,
                public snackBar: MatSnackBar) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('cat');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('cat');
    }

    // On Init, get URL to redirect
    ngOnInit() {
        this.route.queryParams.subscribe(res => { this.continueURL = res['continue']});
    }

    // Submit form to login
    login():void {
        // Encoding Username and Password in Base64 format.
        let headers = new Headers()
        headers.append('Authorization', 'Basic ' +  btoa(this.user.username + ':' + this.user.password))
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        headers.append('Access-Control-Allow-Origin', '*')

        let options = new RequestOptions({ headers: headers });

        this.loading = true;

        this.http.get(environment.ApiIP+"/users/token", options).subscribe(
            data => {
                console.log(data)
                // console.log("User Login: " + data.Person.name);
                if (this.continueURL == undefined){         // If not URL provided, redirect to MyFEDAC
                    window.location.href = "http://www.fedac.cat/"
                } else {                                    // Else, redirect to provided URL
                    window.location.href = this.continueURL;
                }
                this.loading = false;
            },
            (err) => {
                this.snackBar.open('Error d\'autentificació', 'Close', {
                    duration: 2000
                });
                this.loading = false;
            }
        );
    }
}
