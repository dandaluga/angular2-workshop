import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { TeamService, CardComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  directives: [ ROUTER_DIRECTIVES, CardComponent ],
  templateUrl: 'team.component.html',
  styleUrls: [ 'team.component.css']
})

export class TeamComponent implements OnInit {

  constructor(
    public team:TeamService,
    public router:Router
  ) {}

  ngOnInit() {//alert("Hit the team page");
  }

  onEdit(event){
    this.router.navigate(['/detail', event.id]);
    // console.log(event);
  }

  // ngAfterViewInit
  // ngAfterContentInit

}
