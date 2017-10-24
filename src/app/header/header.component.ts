import { Component, Input  , EventEmitter , Output, OnInit , OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Input() Softwares;
  @Input() isAuthenticated;

	@Output() search = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  constructor() { 
  	
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    const isAuthenticated = changes.isAuthenticated;
    this.isAuthenticated = isAuthenticated.currentValue;
  }
}
