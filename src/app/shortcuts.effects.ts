import {Injectable} from "@angular/core";
import { Action , Effect} from "@ngrx/effects";
import { Observable } from "rxjs";
import {Store} from "@ngrx/store";

import {GET_SHORTCUTS , GET_SHORTCUTS_SUCCESS , GET_SHORTCUTS_ERROR } from './store';
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
}
