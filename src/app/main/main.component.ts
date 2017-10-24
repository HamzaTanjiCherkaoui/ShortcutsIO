import { Component, OnInit } from '@angular/core';
import { Shortcut} from '../models/shortcut';
import {getShortcuts , getShortcut } from "../store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {  ShortcutsEffects } from '../shortcuts.effects';
import { UserService } from '../user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  })
export class MainComponent implements OnInit {
	softwares;
  showModal;
  shortcuts:Observable<any>;
  SelectedShortcut;
  isAuthenticated;
  constructor(private store : Store<any> , private shortcutsEffects : ShortcutsEffects , private userService : UserService) {

    this.store.dispatch(getShortcuts());
    this.shortcuts = store.select("shortcuts");
    this.softwares = ["photoShop" , "illustrator"]; 
    this.isAuthenticated = userService.isAuthenticated();
    console.log(this.isAuthenticated);
    
    

  }

  ngOnInit() {
  }

  search(queryObject) {
  	console.log(queryObject);
  	
  }
  switch(os) {
  	console.log(os);
  	
  }
  filterShortcuts(filter) {
    console.log(filter);

  }

  logout() {
    this.userService.logout();
  }

  showShortCutDetails(id) {
    
    this.store.dispatch(getShortcut(id));
    this.SelectedShortcut = this.store.select("shortcut");
    this.showModal = true;
    
  }
}
