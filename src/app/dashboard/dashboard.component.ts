import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { HeroInterface } from '../models/heroes.interface';
import { HeroService } from '../heroes/heroes.service';
import { RouterModule } from '@angular/router';
import { HEROES } from '../mock-heroes';

import { ButtonModule } from 'primeng/button';

 
@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: HeroInterface[] = [];

  constructor(
    private readonly heroService: HeroService
  ) { }

  numberOfHeroes: number = 0;


  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {

    const heroesLenght = HEROES.length;

    for(let i: number = 0; i < heroesLenght; i++) { 
      this.numberOfHeroes += i;
    }

    this.heroService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, this.numberOfHeroes));
    }

   
}
