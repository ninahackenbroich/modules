import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  @Input() showModal = false;

  onClick() {
    this.showModal = !this.showModal;
  }
}
