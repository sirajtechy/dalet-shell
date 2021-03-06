import { APP_ROUTES } from './app.routes';
import { FederatedComponent } from './shell/components/federated/federated.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicrofrontendService } from './microfrontends/microfrontend.service';
import { HomeComponent } from './shell/components/home/home.component'
import { RouterModule } from '@angular/router';

export function initializeApp(mfService: MicrofrontendService): () => Promise<void> {
  return () => mfService.initialise();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FederatedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AppRoutingModule
  ],
  providers: [MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService]

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
