import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'WHAT language is thine, O sea?',
      content: 'The language of eternal question.',
    },
    {
      title: 'What language is thy answer, O sky?',
      content: 'The language of eternal silence.',
    },
    {
      title:
        'We, the rustling leaves, have a voice that answers the storms, but who are you so silent?',
      content: 'I am a mere flower.',
    },
  ];

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
