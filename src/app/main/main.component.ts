import { Component, OnInit } from '@angular/core';
import { Shortcut} from '../models/shortcut';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	softwares;
  showModal;
  shortcuts; 
  constructor() {

  this.softwares = ["photoShop" , "illustrator"]; 
  this.shortcuts =  [
  new Shortcut(1,["Shift","A"],"Lorem ipsum dolor sit." , "Lorem ipsum." , 4 , 4 , "Lorem ipsum dolor sit."),
  new Shortcut(2,["Ctrl","X"],"Lorem ipsum dolor sit." , "Lorem ipsum." , 4 , 4 , "Lorem ipsum dolor sit."),
  new Shortcut(3,["Ctrl","Z"],"Lorem ipsum dolor sit." , "Lorem ipsum." , 4 , 4 , "Lorem ipsum dolor sit.")];
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

  showShortCutDetails(id) {
    //after Success 
    this.showModal = true;
    
  }
}
