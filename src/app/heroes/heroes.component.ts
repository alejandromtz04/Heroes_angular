import { Component } from '@angular/core';
import { HeroInterface } from '../models/heroes.interface';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { NgIf } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, ButtonModule, CardModule, NgIf, HeroDetailComponent],
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

  selectedHero? : HeroInterface;
  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }
}
