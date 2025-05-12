import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../models/heroes.interface';
import { FormsModule } from '@angular/forms';
//import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { HeroService } from '../heroes.service';
import { MessageService } from '../messages/messages.service';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { RouterModule } from '@angular/router';


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
    private readonly messageService: MessageService
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


  getHeroes(): void {
    this.heroService.getAllHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
    this.messageService.addNewMessage(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
