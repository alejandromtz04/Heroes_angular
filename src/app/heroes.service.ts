import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroInterface } from './models/heroes.interface';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages/messages.service';

 @Injectable({
    providedIn: 'root',
 })

 export class HeroService {
    constructor(
        private readonly messagesService: MessagesService
    ) { }

    getAllHeroes(): Observable<HeroInterface[]> {
        try {
            if (!HEROES) {
                throw new Error('Heroes doesnt exist in the database')
            }
            const heroesList = of(HEROES)
            this.messagesService.addNewMessage("HeroServices: fetched heroes");
            return heroesList

        } catch (error) {
            throw new Error('An error has been ocurred')
        }
    }

    // create method getHeroById() { }

    getHeroeById(id: number): Observable<HeroInterface> {
        try {
            if (!id || id === 0) {
                throw new Error(`The id with value: ${id}`)
            } 

            const hero = HEROES.find(find => find.id === id)!;
            this.messagesService.addNewMessage(`HeroService: fetched hero id=${id}`);
            return of(hero)

        } catch (error) {
            throw new Error('An error has been ocurred ')
        }
    }

 }