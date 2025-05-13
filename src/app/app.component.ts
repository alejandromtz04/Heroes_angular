import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/messages.service';

import { MenubarModule } from 'primeng/menubar'
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NgIf, NgFor } from '@angular/common';
import { Ripple } from 'primeng/ripple';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, RouterOutlet, MenubarModule, ButtonModule, NgIf, NgFor, ToastModule, Ripple],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    public readonly messageService: MessageService
  ) { }
  title = 'Heroes of CEPA';
  messages: boolean = false;
  visible: boolean = false;

  menuItems: MenuItem[] =[];

  ngOnInit() {
    this.menuItems = [
      { label: 'List of Heroes', routerLink: '/heroes' },
      { label: 'Dashboard', routerLink: '/dashboard' }
    ];
  }

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
