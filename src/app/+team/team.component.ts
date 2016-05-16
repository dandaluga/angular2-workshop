import { Component, OnInit } from '@angular/core';
import { TeamService, CardComponent } from '../shared';
import { ROUTER_DIRECTIVES } from '@angular/router';

// import { TeamService } from '../shared';
// import { CardComponent } from "../shared/card/card.component";

@Component({
  moduleId: module.id,
  selector: 'app-team',
  directives: [ ROUTER_DIRECTIVES, CardComponent ],
  templateUrl: 'team.component.html',
  styleUrls: [ 'team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public team:TeamService) {}

  ngOnInit() {
  }

  // ngAfterViewInit
  // ngAfterContentInit

}
