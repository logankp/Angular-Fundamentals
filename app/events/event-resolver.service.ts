import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router/';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {}
    public resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id']);
    }
}
