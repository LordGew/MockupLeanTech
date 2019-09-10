import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
imports: [  
    MatFormFieldModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatIconModule,
    
 ],
declarations: [ ],

exports:[
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatIconModule,
    
]  
})
export class MaterialImports{}