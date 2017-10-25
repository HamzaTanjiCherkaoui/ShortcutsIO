import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

	softwares;
  constructor(private userService : UserService) { 
  	//todo : get softwares from backend
  	this.softwares = ["photoShop" , "illustrator"]; 
  }

  ngOnInit() {
  }

  logout() {
  	this.userService.logout();
  }
}
