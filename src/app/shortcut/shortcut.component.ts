import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent implements OnInit {
	@Input() Shortcut;

  constructor() {

   }

  ngOnInit() {
  }

}
