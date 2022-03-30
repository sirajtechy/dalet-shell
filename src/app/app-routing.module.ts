import { loadRemoteModule } from 'src/utils/federation-utils';
import { HomeComponent } from './shell/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'daletshared',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'daletshared',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: 'DaletHeaderModule',
      }).then(m => m.DaletHeaderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
