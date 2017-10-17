import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	softwares;
  constructor() {

  this.softwares = ["photoShop" , "illustrator"]; 
}

  ngOnInit() {
  }

  search(queryObject) {
  	console.log(queryObject);
  	
  }
  switch(os) {
  	console.log(os);
  	
  }
  filterShortcuts(filter) {
  	 console.log(filter);
  	 
  }
}
