import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})

export class CardComponent implements OnInit {

  @Input() person;
  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}
