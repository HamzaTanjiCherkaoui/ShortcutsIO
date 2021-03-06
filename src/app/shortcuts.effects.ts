import {Injectable} from "@angular/core";
import { Actions , Effect} from "@ngrx/effects";
import { Observable } from "rxjs";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/switchMap';

import {
GET_SHORTCUTS , GET_SHORTCUTS_SUCCESS , GET_SHORTCUTS_ERROR , 
GET_SHORTCUT , GET_SHORTCUT_SUCCESS , GET_SHORTCUT_ERROR 
} from './store';
import {ShortcutsService} from './shortcuts.service';

@Injectable()
export class ShortcutsEffects {
	constructor(private action$ : Actions, private shortcutsService : ShortcutsService , private store : Store<any>) {
	}
	
	@Effect() getShortcuts$ = this.action$
	.ofType(GET_SHORTCUTS)
	.switchMap(payload =>
		this.shortcutsService.getShortcuts()
		.map(shortcuts => ( { type : GET_SHORTCUTS_SUCCESS , payload : shortcuts}))
		.catch( () => Observable.of({type : GET_SHORTCUTS_ERROR})));

	 @Effect() getShortcut$ = this.action$
    .ofType(GET_SHORTCUT)
    .switchMap(id =>
      this.shortcutsService.getShortcut(id)
        .map(shortcut => ({type: GET_SHORTCUT_SUCCESS, payload: shortcut}))
        .catch(() => Observable.of({type: GET_SHORTCUT_ERROR})));
}
