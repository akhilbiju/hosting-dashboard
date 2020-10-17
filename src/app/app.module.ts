import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './layout/main/main.component';
import { SiteDetailsComponent } from './feature/site-details/site-details.component';
import {AppRoutingModule} from './app-routing.module';
import { AddSiteComponent } from './feature/add-site/add-site.component';
import { CardComponent } from './shared/components/card/card.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { DonutChartComponent } from './shared/components/donut-chart/donut-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    SiteDetailsComponent,
    AddSiteComponent,
    CardComponent,
    ProgressBarComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
