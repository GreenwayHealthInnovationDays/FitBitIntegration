import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-fitbit-activity',
  templateUrl: 'fitbit-activity.component.html',
  styleUrls: ['fitbit-activity.component.css']
})
export class FitbitActivityComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  steps: number;
}
