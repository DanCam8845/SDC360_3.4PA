import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  messageInput: string = '';
  displayedMessage: string = 'Hello World!';

  updateMessage() {
    this.displayedMessage = this.messageInput;
  }
}
