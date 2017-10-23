import { Routes }                               from '@angular/router';

import { LoginComponent }                       from './components/login/login.component';

export const rootRouterConfig: Routes = [
    // Unique path
    {
      path: '**',
      component: LoginComponent
    }
];
