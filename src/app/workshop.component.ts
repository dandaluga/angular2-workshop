import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './+home';
import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';
import { TeamService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'workshop-app',
  templateUrl: 'workshop.component.html',
  styleUrls: ['workshop.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, TeamService]
})

@Routes([
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/team', component: TeamComponent},
  {path: '/detail/:id', component: DetailComponent}
])

export class WorkshopAppComponent {
  title = 'Angular 2 Workshop';
}
