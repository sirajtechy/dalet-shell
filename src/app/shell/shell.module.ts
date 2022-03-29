
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './../app-routing.module';
import { FederatedComponent } from './components/federated/federated.component';

@NgModule({
  declarations: [HomeComponent, FederatedComponent],
  imports: [CommonModule, AppRoutingModule]

})
export class ShellModule { }
