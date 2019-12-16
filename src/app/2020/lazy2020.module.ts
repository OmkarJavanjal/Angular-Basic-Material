import { PersonRoutingModule } from './lazy2020_routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Primary2020Component } from '../2020/primary/primary.component';
import { Secondary2020Component } from '../2020/secondary/secondary.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PersonRoutingModule
  ],
  declarations: [
    Primary2020Component,
    Secondary2020Component
  ],
  exports: [
    Primary2020Component,
    Secondary2020Component
  ]
})
export class lazy2020Module {}