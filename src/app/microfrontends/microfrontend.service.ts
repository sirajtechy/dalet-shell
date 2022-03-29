import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../../utils/route-utils';
import { Microfrontend } from './microfrontend.module';

@Injectable({ providedIn: 'root' })
export class MicrofrontendService {
  microfrontends: Microfrontend[] | undefined;

  constructor(private router: Router) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  /*
   * This is just an hardcoded list of remote microfrontends, but could easily be updated
   * to load the config from a database or external file
   */
  loadConfig(): Microfrontend[] {
    return [
      {
        // For Loading
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'daletshared',
        exposedModule: 'DaletHeaderModule',

        // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
        displayName: 'daledshared',
        routePath: 'daletshared',
        ngModuleName: 'DaletHeaderModule',
      },
    ];
  }
}
