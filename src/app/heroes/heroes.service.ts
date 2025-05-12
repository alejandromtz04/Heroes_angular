import { Injectable } from '@angular/core';

import { HeroInterface } from '../models/heroes.interface';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

 @Injectable({
    providedIn: 'root',
 })

 export class HeroService {
    constructor() { }

    getAllHeroes(): Observable<HeroInterface[]> {
        try {
            if (!HEROES) {
                throw new Error('Heroes doesnt exist in the database')
            }
            
            return of(HEROES)

        } catch (error) {
            throw new Error('Error has ben ocurred')
        }
    }

 }