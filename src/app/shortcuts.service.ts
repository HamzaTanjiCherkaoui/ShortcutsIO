import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ShortcutsService {

	private  API = "http://localhost:8000/api/v1";
	constructor(private http: Http) { 
	}

	getShortcuts(){

		return this.http.get(this.API+"/shortcuts" )
		.map(res => res.json()).catch(this.handleError); 
	}

	private handleError(error: Response | any) {
		error = {
			status: error.status,
			body: error.json()
		}
		return Observable.throw(error);
	}

}
