import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'filter-bar',
	templateUrl: './filter-bar.component.html',
	styleUrls: ['./filter-bar.component.css']
	})
export class FilterBarComponent implements OnInit {
	selectedOs : FormControl;
	filterOption : FormControl;
	@Output() switch = new EventEmitter<any>();
	@Output() filter = new EventEmitter<any>();
	constructor() { 
		this.selectedOs = new FormControl();
		this.filterOption= new FormControl();
	}

	ngOnInit() {
	}

}
