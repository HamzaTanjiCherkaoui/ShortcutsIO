import { Component } from '@angular/core';
import {ShortcutsService} from './shortcuts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  // to remove : Shortcut service injection 
  constructor(private shortcutsService: ShortcutsService) {
  
  }
}
