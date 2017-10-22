import { Component, OnInit } from '@angular/core';
import {  UserEffects } from '../user.effects';
import { login } from "../store";
import { Store } from "@ngrx/store";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
	})
export class LoginComponent implements OnInit {
	state ;
	constructor( private userEffects :UserEffects , private store : Store<any>) { }

	ngOnInit() {
	}
	login() {

		this.store.dispatch(login({username:"hoxa1235" , password : "hamza123"}));
		this.state = this.store.select("currentUser");
		

	}
}
