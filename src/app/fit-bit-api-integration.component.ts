import { Component, OnInit } from '@angular/core';
import { FitbitFriendsComponent } from './fitbit-friends'
import { FitbitActivityComponent } from './fitbit-activity'
import { Activity, Friend } from './fitbit-common'

@Component({
  moduleId: module.id,
  selector: 'fit-bit-api-integration-app',
  templateUrl: 'fit-bit-api-integration.component.html',
  styleUrls: ['fit-bit-api-integration.component.css'],
  directives: [FitbitFriendsComponent, FitbitActivityComponent]
})
export class FitBitApiIntegrationAppComponent implements OnInit {
  title = 'Fitbit Dashboard';
  data = new DashboarData;
  ngOnInit() {
    this.data.dashboardUser = "Ben";
    this.data.activities = [
      { name: "Running", durationInMin: 60 },
      { name: "Swimming", durationInMin: 20 },
      { name: "Cycling", durationInMin: 120 }
    ];
    this.data.friends = [ 
      { firstName: "Bob", lastName: "Smith", username: "Bobo", id: 1 },
      { firstName: "Tina", lastName: "Turtle", username: "TTurtle", id: 2 },
      { firstName: "Arnold", lastName: "Peterson", username: "apeterson", id: 3 }
    ];
  }
}

export class DashboarData {
  dashboardUser: string;
  activities: Array<Activity>;
  friends: Array<Friend>;
}
