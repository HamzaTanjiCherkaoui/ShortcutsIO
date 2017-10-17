import { Component, OnChanges ,Input} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  implements OnChanges {
  visibility = 'hidden';

  @Input() isVisible : boolean = true;

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
