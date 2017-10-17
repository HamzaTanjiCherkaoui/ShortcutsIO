import { Component, OnInit } from '@angular/core';
import { Shortcut} from '../models/shortcut';

@Component({
	selector: 'shortcuts',
	templateUrl: './shortcuts.component.html',
	styleUrls: ['./shortcuts.component.css']
	})
export class ShortcutsComponent implements OnInit {
	shortcuts ;
	constructor() { 
		this.shortcuts =  [
	new Shortcut(1,["Shift","A"],"Lorem ipsum dolor sit." , "Lorem ipsum." , 4 , 4 , "Lorem ipsum dolor sit."),
	new Shortcut(2,["Ctrl","X"],"Lorem ipsum dolor sit." , "Lorem ipsum." , 4 , 4 , "Lorem ipsum dolor sit."),
	new Shortcut(3,["Ctrl","Z"],"Lorem ipsum dolor sit." , "Lorem ipsum." , 4 , 4 , "Lorem ipsum dolor sit.")];
	}

	ngOnInit() {
	}

}
