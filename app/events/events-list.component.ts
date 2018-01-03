import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './index';
import { EventService } from './shared/event.service';

@Component({
    template: `
        <div >
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventsListComponent implements OnInit {
  public events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}
