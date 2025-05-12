import { Component } from '@angular/core';
import { MessageService } from './messages.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-messages',
  imports: [FormsModule, NgIf, NgFor, RouterModule, RouterLink],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(
    public messageService: MessageService
  ) { }
}
