import { Component, OnInit } from '@angular/core';
import {signUp} from '../store';
 import { Store } from "@ngrx/store";
@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
	})
export class SignUpComponent implements OnInit {

	constructor(private store : Store<any>) { }

	ngOnInit() {
	}
	signUp(username, password , email) {
		this.store.dispatch(signUp({username:username , password : password , email : email}));
		// this.state = this.store.select("currentUser");
		
	}
}
