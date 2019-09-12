import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
//Components html
import { AppComponent } from './app.component';
import { LeanTechMockupComponent } from './views/lean-tech-mockup/lean-tech-mockup.component';
import { Page404Component } from './views/page404/page404.component';

// routes component
import { LeanTechModule } from './Routes/lean-tech-routes';

// angular material imports / hammerjs
import {MaterialImports} from '../../src/app/Imports/material-Imports';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeDateComponent } from './views/home-date/home-date.component';
import { NavigationComponent } from './views/navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LeanTechMockupComponent,
    HomeDateComponent,
    NavigationComponent,
   
    
  ],
  imports: [
    BrowserModule,
    LeanTechModule,  //routes component
    FormsModule, 
    BrowserAnimationsModule, //angular material 
    MaterialImports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
