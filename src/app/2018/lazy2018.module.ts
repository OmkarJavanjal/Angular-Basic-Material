import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Primary2018Component } from '../2018/primary/primary.component';
import { Secondary2018Component } from '../2018/secondary/secondary.component';
import { IndicatorComponent } from '../indicator/indicator.component';
const routes: Routes = [  
  { path: '2018/primary', component: IndicatorComponent },
  { path: '2018/secondary', component: IndicatorComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    Primary2018Component,
    Secondary2018Component
  ],
  exports: [
    Primary2018Component,
    Secondary2018Component
  ]
})
export class lazy2018Module {}