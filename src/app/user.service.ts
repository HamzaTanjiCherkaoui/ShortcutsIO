import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';


@Injectable()
export class UserService {

	private  API = "http://localhost:8000/api/v1";
	constructor(private http: Http , private cookie : CookieService , private router: Router) { 
	}


	login(data){
		
		return  this.http.post(`${this.API}/login/` ,{username : data.user.username , password : data.user.password})
		.map(res => res.json().token).catch(this.handleError); 
		
	}

	setAccessToken(data){
		
		var token = data.payload;
		this.cookie.put('auth_token', token);
		
		this.router.navigate(['/account']);
		return Observable.timer(1000).mapTo({token : data.payload});

		

	}

	isAuthenticated() {
		return this.cookie.get("auth_token")?true:false;
	}
	
	logout() {
		this.cookie.remove('auth_token');
		this.router.navigate(['/login']);

	}

	private handleError(error: Response | any) {
		error = {
			status: error.status,
			body: error.json()
		}
		return Observable.throw(error);
	}

}
