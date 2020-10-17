import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteDetailsComponent} from './feature/site-details/site-details.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'details' },
  { path: 'details', component: SiteDetailsComponent },
  { path: '**', redirectTo: 'details' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}