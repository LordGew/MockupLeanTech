import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
//Components html
import { AppComponent } from './app.component';
import { LeanTechMockupComponent } from './views/lean-tech-mockup/lean-tech-mockup.component';
import { Page404Component } from './views/page404/page404.component';

// routes component
import { LeanTechModule } from './Routes/lean-tech-routes';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LeanTechMockupComponent,
   
    
  ],
  imports: [
    BrowserModule,
    LeanTechModule,  //routes component
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
