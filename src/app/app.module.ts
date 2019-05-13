import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepositoryService } from "./repository.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelpageComponent } from './travelpage/travelpage.component';
import { MainnavbarComponent } from './Common/mainnavbar/mainnavbar.component';
import { FooterbarComponent } from './Common/footerbar/footerbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddtravelpageComponent } from './addtravelpage/addtravelpage.component';
import { UpdatetravelpageComponent } from './updatetravelpage/updatetravelpage.component';
import { AddservicepageComponent } from './addservicepage/addservicepage.component';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { UpdateservicepageComponent } from './updateservicepage/updateservicepage.component';
import { HomeservicepagesComponent } from './homeservicepages/homeservicepages.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TravelpageComponent,
    MainnavbarComponent,
    FooterbarComponent,
    HomepageComponent,
    AddtravelpageComponent,
    UpdatetravelpageComponent,
    AddservicepageComponent,
    ServicepageComponent,
    UpdateservicepageComponent,
    HomeservicepagesComponent,
    FilterPipe
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
