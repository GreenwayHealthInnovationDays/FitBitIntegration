import { Component, OnInit } from '@angular/core';
import { FitbitFriendsComponent } from './fitbit-friends'
import { FitbitActivityComponent } from './fitbit-activity'

@Component({
  moduleId: module.id,
  selector: 'fit-bit-api-integration-app',
  templateUrl: 'fit-bit-api-integration.component.html',
  styleUrls: ['fit-bit-api-integration.component.css'],
  directives: [FitbitFriendsComponent, FitbitActivityComponent]
})
export class FitBitApiIntegrationAppComponent  implements OnInit {
  title = 'Fitbit Dashboard';
  data = DashboarData;
  ngOnInit() {
    this.data.prototype.activities = [];
    this.data.prototype.steps = 0;
  }
}

export class DashboarData {
  steps: number;
  activities: Array<Activity>;
}

export class Activity {
  name: string;
  durationInMin: number;
}
