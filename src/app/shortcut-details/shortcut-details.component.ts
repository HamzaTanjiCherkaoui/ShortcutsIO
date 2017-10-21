import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'shortcut-details',
  templateUrl: './shortcut-details.component.html',
  styleUrls: ['./shortcut-details.component.css']
})
export class ShortcutDetailsComponent implements OnInit {
	@Input() shortcut; 
  constructor() { }

  ngOnInit() {
  }

}
