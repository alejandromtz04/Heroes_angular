import { Component } from '@angular/core';
import { MessageService } from './messages.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { TableStyle } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-messages',
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    RouterModule,
    RouterLink,
    ButtonModule,
    Toast,
    Ripple,
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  messages: boolean = false;

  getMessage() {
    this.messages = true;
  }

  showMessages() {
    this.messages = true;
  }

  clearMessages() {
    this.messageService.clear();
    this.messages = false;
  }
}
