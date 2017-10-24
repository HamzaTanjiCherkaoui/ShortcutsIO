import {Injectable} from "@angular/core";
import { Actions , Effect} from "@ngrx/effects";
import { Observable } from "rxjs";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/switchMap';

import {
	LOGIN , LOGIN_SUCCESS , LOGIN_ERROR ,ACCESS_SUCCESS ,
	SIGNUP , SIGNUP_SUCCESS , SIGNUP_ERROR
	} from './store';
	import {UserService} from './user.service';

	@Injectable()
	export class UserEffects {
		constructor(private action$ : Actions, private userService : UserService , private store : Store<any>) {
		}

		@Effect() login$ = this.action$
		.ofType(LOGIN)
		.switchMap((data) =>
			this.userService.login(data)
			.map(token => ({type: LOGIN_SUCCESS, payload: token}))
			.catch(() => Observable.of({type: LOGIN_ERROR}))
			);

		@Effect() setAccessToken$ = this.action$
		.ofType(LOGIN_SUCCESS)
		.switchMap((data) =>
			this.userService.setAccessToken(data)
			.map(token => ({type: ACCESS_SUCCESS, payload: token}))
			.catch(() => Observable.of({type: ACCESS_SUCCESS}))
			);

		@Effect() signUp$ = this.action$
		.ofType(SIGNUP)
		.switchMap((data) =>
			this.userService.signUp(data)
			.map(user => ({type: SIGNUP_SUCCESS, payload: user}))
			.catch(() => Observable.of({type: SIGNUP_ERROR}))
			);
	}
