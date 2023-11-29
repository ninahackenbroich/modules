import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  @Input() showModal = false;
  questions = [
    {
      question: 'What is your name?',
      answer: 'My name is Bob'
    },
    {
      question: 'What is your favorite color?',
      answer: 'My favorite color is blue'
    },
    {
      question: 'What is your favorite language?',
      answer: 'My favorite language is TypeScript'
    }
  ];

  onClick() {
    this.showModal = !this.showModal;
  }
}
