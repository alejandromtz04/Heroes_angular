import { Component, Input } from '@angular/core';
import { HeroInterface } from '../models/heroes.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../heroes.service';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { IftaLabel } from 'primeng/iftalabel';
import { FloatLabel } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'


@Component({
  selector: 'app-hero-detail',
  imports: [
    CommonModule, 
    FormsModule, 
    CardModule, 
    ButtonModule, 
    IftaLabel, 
    FloatLabel, 
    InputTextModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: HeroInterface;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getHero();
  }


  //
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroeById(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }
}
