import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroInterface } from './models/heroes.interface';
import { HEROES } from './mock-heroes';
import { MessageService } from './messages/messages.service';

 @Injectable({
    providedIn: 'root',
 })

 export class HeroService {
    constructor(
        private readonly messageService: MessageService
    ) { }

    getAllHeroes(): Observable<HeroInterface[]> {
        try {
            if (!HEROES) {
                throw new Error('Heroes doesnt exist in the database')
            }
            const heroesList = of(HEROES)
            this.messageService.addNewMessage("HeroServices: fetched heroes");
            return heroesList

        } catch (error) {
            throw new Error('Error has ben ocurred')
        }
    }



 }