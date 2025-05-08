import { Component } from '@angular/core';
import { HeroInterface } from '../models/heroes.interface';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, ButtonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // Properties

  hero: HeroInterface = {
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;

}
