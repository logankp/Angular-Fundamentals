import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {}
    public resolve() {
        return this.eventService.getEvents();
    }
}
