import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 

@NgModule({
imports: [  
    MatFormFieldModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
 ],
declarations: [ ],

exports:[
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
]  
})
export class MaterialImports{}