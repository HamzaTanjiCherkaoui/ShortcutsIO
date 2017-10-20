import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ShortcutsService {

	constructor() { }

	getShortcuts(){
		return Observable.timer(1000)
		.mapTo([{

			_id:"59e77af437764e484cafac63",
			buttons:["chtr","A"],
			description:"description ",
			maker:"lorem ipsum",
			rates:2,
			views:12,
			gif:"/test.gif"
			},
			{
				_id:"59e77af537764e484cafac64",
				buttons:["ctrl","Z"],
				description:"description",
				maker:"lorem",
				rates:3,
				views:3,
				gif:"lorem"
				}]);
	}

}


