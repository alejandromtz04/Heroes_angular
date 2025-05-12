import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { MenubarModule } from 'primeng/menubar'
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [HeroesComponent, MessagesComponent, RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heroes of the life';

  menuItems: MenuItem[] =[];

  ngOnInit() {
    this.menuItems = [
      { label: 'List of Heroes', routerLink: '/heroes' },
      { label: 'Dashboard', routerLink: '/dashboard' }
    ];
  }
}
