import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FitBitApiIntegrationAppComponent } from '../app/fit-bit-api-integration.component';

beforeEachProviders(() => [FitBitApiIntegrationAppComponent]);

describe('App: FitBitApiIntegration', () => {
  it('should create the app',
      inject([FitBitApiIntegrationAppComponent], (app: FitBitApiIntegrationAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fit-bit-api-integration works!\'',
      inject([FitBitApiIntegrationAppComponent], (app: FitBitApiIntegrationAppComponent) => {
    expect(app.title).toEqual('fit-bit-api-integration works!');
  }));
});
