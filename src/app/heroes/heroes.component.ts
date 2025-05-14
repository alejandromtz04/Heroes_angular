import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../models/heroes.interface';
import { FormsModule } from '@angular/forms';
//import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { HeroService } from '../heroes.service';
import { MessagesService } from '../messages/messages.service';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor, ButtonModule, CardModule, NgIf, HeroDetailComponent, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  // Properties
  constructor(
    private readonly heroService: HeroService,
    private readonly myMessagesService: MessagesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  hero: HeroInterface = {
    id: 1,
    name: 'Windstorm'
  }

  heroes: HeroInterface[] = [];
  selectedHero? : HeroInterface;

  goToMessages() {
    this.router.navigate(['/messages']);
  }

  getHeroes(): void {
    this.heroService.getAllHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
    this.myMessagesService.addNewMessage(`HeroesComponent: Selected hero: ${hero.name}`);
  }

}
