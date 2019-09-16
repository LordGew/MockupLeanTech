//angular imports 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



// components necesary to get ours routes
import { LeanTechMockupComponent } from '../views/lean-tech-mockup/lean-tech-mockup.component';
import { Page404Component } from '../views/page404/page404.component';
import { HomeDateComponent } from '../views/home-date/home-date.component';

//material component
import {MaterialImports} from '../Imports/material-Imports';



//instruction to declared our routes 
const routing: Routes =
    [
        { path: '', component: LeanTechMockupComponent },
        { path: 'home', component: LeanTechMockupComponent },
        { path: 'delivery', component: HomeDateComponent },
        {path: '**', component: Page404Component},
        
      
        
       
        
    ];
@NgModule({
    imports:
        [
            CommonModule,
            RouterModule.forRoot(routing),
            MaterialImports
        ],
    declarations: [ ],

    exports:
        [
            RouterModule
        ]
})
export class LeanTechModule { }
