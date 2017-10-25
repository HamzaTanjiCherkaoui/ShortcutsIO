import { Component, OnInit , Output , EventEmitter , Input } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {
	@Output()logout = new EventEmitter<any>();
	@Input() Softwares;
  constructor() { }

  ngOnInit() {
  }

}
