import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() questions: any[] = [];
  opendIndex = 0;

  constructor() { }
  ngOnInit(): void {

  }

  onClick(index: number): void {
    if (this.opendIndex === index) {
      this.opendIndex = -1;
      return;
    } else {
      this.opendIndex = index;
    }
  }
}
