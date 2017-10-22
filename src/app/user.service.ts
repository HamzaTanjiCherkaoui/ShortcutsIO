import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class UserService {

	private  API = "http://localhost:8000/api/v1";
	constructor(private http: Http , private cookie : CookieService) { 
	}


	login(data){
		
		return this.http.post(`${this.API}/login/` ,{username : data.user.username , password : data.user.password})
		.map(res => res.json().token).catch(this.handleError); 
		
	}

	setAccessToken(data){
		
		var token = data.payload;
		this.cookie.put('auth_token', token);
		return Observable.timer(0).mapTo({token : data.payload});

		

	}

	private handleError(error: Response | any) {
		error = {
			status: error.status,
			body: error.json()
		}
		return Observable.throw(error);
	}

}
