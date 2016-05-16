import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public team:TeamService) {}

  // constructor(@Inject(Number) public team:TeamService) {}
  
  ngOnInit() {}

}
