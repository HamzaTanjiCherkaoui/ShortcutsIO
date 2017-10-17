import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';



@Component({
	selector: 'shortcuts',
	templateUrl: './shortcuts.component.html',
	styleUrls: ['./shortcuts.component.css']
	})
export class ShortcutsComponent implements OnInit {
	shortcuts ;
	@Output() showShortCutDetails = new EventEmitter<any>();
	@Input() Shortcuts;
	constructor() { 
		
	}

	ngOnInit() {
	}

}
