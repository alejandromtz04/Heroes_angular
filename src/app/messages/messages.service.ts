import { Injectable } from '@angular/core';
import { MessageInterface } from '../models/message.interface';

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    
    message: string[] = []

    addNewMessage(message: string): void {
        this.message.push(message);
    }

    getMessages() {
        return this.message;
    }

    clear(): void {
        this.message = [];
    }
}