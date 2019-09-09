import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeanTechMockupComponent } from './views/lean-tech-mockup/lean-tech-mockup.component';


@NgModule({
  declarations: [
    AppComponent,
    LeanTechMockupComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
