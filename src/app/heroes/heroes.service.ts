import { Injectable } from '@angular/core';

import { HeroInterface } from '../models/heroes.interface';
import { HEROES } from '../mock-heroes';

 @Injectable({
    providedIn: 'root',
 })

 export class HeroService {
    constructor() { }

    getAllHeroes(): HeroInterface[] {
        try {
            if (!HEROES) {
                throw new Error('Heroes doesnt exist in the database')
            }
            
            return HEROES

        } catch (error) {
            throw new Error('Error has ben ocurred')
        }
    }

 }