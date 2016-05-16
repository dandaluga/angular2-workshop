import { Component, OnInit } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { TeamService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})

export class DetailComponent implements OnInit, OnActivate {

  person;
  
  routerOnActivate(curr:RouteSegment):void {
      const id = curr.getParam('id');

      this.person = this.team.people.find(person =>
        person.id === +id
      );
  }

  constructor(public team:TeamService) {}

  ngOnInit() {}

}
