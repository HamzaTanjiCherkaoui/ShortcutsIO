import { Component } from '@angular/core';
import {ShortcutsService} from './shortcuts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private shortcutsService: ShortcutsService) {
  	this.shortcutsService.getShortcut("59e77af437764e484cafac63").subscribe(res => console.log(res));
  }
}
