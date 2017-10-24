import { Component, OnInit , OnDestroy } from '@angular/core';
import {  UserEffects } from '../user.effects';
import { login } from "../store";
import { Store } from "@ngrx/store";
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
	})
export class LoginComponent implements OnInit , OnDestroy {
	state ;

	constructor( private router: Router, private cookies: CookieService , private userEffects :UserEffects , private store : Store<any>) { 
		if (this.cookies.get('auth_token'))
		this.router.navigate(['/account']);
		this.state = store.select("currentUser");
	}

	ngOnInit() {
	}
	ngOnDestroy() {
		
	}
	login(username,password) {

		this.store.dispatch(login({username:username , password : password}));
		this.state = this.store.select("currentUser");
		

	}
}
