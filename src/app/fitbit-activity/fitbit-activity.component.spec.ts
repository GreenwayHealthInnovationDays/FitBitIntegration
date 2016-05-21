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
import { FitbitActivityComponent } from './fitbit-activity.component';

describe('Component: FitbitActivity', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FitbitActivityComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FitbitActivityComponent],
      (component: FitbitActivityComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FitbitActivityComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FitbitActivityComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-fitbit-activity></app-fitbit-activity>
  `,
  directives: [FitbitActivityComponent]
})
class FitbitActivityComponentTestController {
}

