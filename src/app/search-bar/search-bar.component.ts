import { Component, OnInit , Input  , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
	@Input() Softwares;
	queryInput; 
	selectedSoftware;
	@Output() search = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
