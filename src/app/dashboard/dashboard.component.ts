import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { HeroInterface } from '../models/heroes.interface';
import { HeroService } from '../heroes/heroes.service';
import { RouterModule } from '@angular/router';

 
@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: HeroInterface[] = [];

  constructor(
    private readonly heroService: HeroService
  ) { }

  ngOnInit(): void {
      this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
    }
}
