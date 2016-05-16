import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WorkshopAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(WorkshopAppComponent);
