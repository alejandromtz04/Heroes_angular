import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MessagesService {
    
    public message: string[] = []

    addNewMessage(message: string): void {
        this.message.push(message);
    }

    clear(): void {
        this.message = [];
    }
}