import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components 
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ShortcutCreatorComponent } from './shortcut-creator/shortcut-creator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthGuardService} from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'account',
        canActivate: [AuthGuardService],
        component: AccountComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class RoutesModule {
}
