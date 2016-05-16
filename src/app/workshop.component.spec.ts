import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WorkshopAppComponent } from '../app/workshop.component';

beforeEachProviders(() => [WorkshopAppComponent]);

describe('App: Workshop', () => {
  it('should create the app',
      inject([WorkshopAppComponent], (app: WorkshopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'workshop works!\'',
      inject([WorkshopAppComponent], (app: WorkshopAppComponent) => {
    expect(app.title).toEqual('workshop works!');
  }));
});
