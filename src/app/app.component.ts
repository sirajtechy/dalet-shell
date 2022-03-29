import { Component } from '@angular/core';
import { MicrofrontendService } from './microfrontends/microfrontend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dalet Shell';
  constructor(public mfService :MicrofrontendService){}
}
