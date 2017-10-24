import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {
	@Output()logout = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
