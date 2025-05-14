import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, Location } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { TableStyle } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-messages',
  standalone: true,
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
  providers: [MessageService],
})
export class MessagesComponent {
  constructor(
    public readonly myMessagesService: MessagesService,
    private readonly primeMessageService: MessageService,
    private readonly location: Location
  ) {}

  messages: boolean = true;

  getMessage() {
    this.messages = true;
  }

  showMessages() {
    this.messages = true;
  }

  clearMessages() {
    this.myMessagesService.clear();
    this.messages = false;
  }

  show() {
    this.primeMessageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Deleted Successfully',
      life: 2000,
    });
  }

  showBottomRight() {
    this.primeMessageService.add({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Deleted Successfully',
      key: 'br',
      life: 3000,
    });
  }

  goBack(): void {
    this.location.back();
  }
}
