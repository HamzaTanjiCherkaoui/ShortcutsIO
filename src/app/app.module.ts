import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutesModule } from './app-routes';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';

import {ShortcutsService} from './shortcuts.service';
import {UserService} from './user.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { ShortcutComponent } from './shortcut/shortcut.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ShortcutCreatorComponent } from './shortcut-creator/shortcut-creator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ShortcutDetailsComponent } from './shortcut-details/shortcut-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { ModalComponent } from './modal/modal.component';

import {shortcuts , shortcut , currentUser } from './store';
import {ShortcutsEffects} from './shortcuts.effects';
import {UserEffects} from './user.effects';
import { AccountHeaderComponent } from './account-header/account-header.component';


@NgModule({
  declarations: [
  AppComponent,
  MainComponent,
  SearchBarComponent,
  ShortcutsComponent,
  ShortcutComponent,
  FilterBarComponent,
  FooterComponent,
  HeaderComponent,
  LoginComponent,
  FavorisComponent,
  ShortcutCreatorComponent,
  NotFoundComponent,
  ProfileComponent,
  ShortcutDetailsComponent,
  SignUpComponent,
  AccountComponent,
  ModalComponent,
  AccountHeaderComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RoutesModule,
  ReactiveFormsModule,
  NoopAnimationsModule,
  CookieModule.forRoot(),
  StoreModule.forRoot({shortcuts , shortcut , currentUser}),
  EffectsModule.forRoot([ShortcutsEffects,UserEffects])
  ],
  providers: [ShortcutsService,UserService],
  bootstrap: [AppComponent]
  })
export class AppModule { }
