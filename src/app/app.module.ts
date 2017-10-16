import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { ShortcutComponent } from './shortcut/shortcut.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ShortcutCreatorComponent } from './shortcut-creator/shortcut-creator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ShortcutDetailsComponent } from './shortcut-details/shortcut-details.component';

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
    SigninComponent,
    FavorisComponent,
    ShortcutCreatorComponent,
    NotFoundComponent,
    ProfileComponent,
    ShortcutDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
