import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FitbitFriendsComponent } from './fitbit-friends.component';

describe('Component: FitbitFriends', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FitbitFriendsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FitbitFriendsComponent],
      (component: FitbitFriendsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FitbitFriendsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FitbitFriendsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-fitbit-friends></app-fitbit-friends>
  `,
  directives: [FitbitFriendsComponent]
})
class FitbitFriendsComponentTestController {
}

