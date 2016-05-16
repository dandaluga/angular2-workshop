import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TeamService, CardComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  directives: [ ROUTER_DIRECTIVES, CardComponent ],
  templateUrl: 'team.component.html',
  styleUrls: [ 'team.component.css']
})

export class TeamComponent implements OnInit {

  constructor(public team:TeamService) {}

  ngOnInit() {}

  // ngAfterViewInit
  // ngAfterContentInit

}
