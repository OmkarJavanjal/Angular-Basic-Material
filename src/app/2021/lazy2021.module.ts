import { Person2021RoutingModule } from './lazy2021_routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Primary2021Component } from '../2021/primary/primary.component';
import { Secondary2021Component } from '../2021/secondary/secondary.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    Person2021RoutingModule
  ],
  declarations: [
    Primary2021Component,
    Secondary2021Component
  ],
  exports: [
    Primary2021Component,
    Secondary2021Component
  ]
})
export class lazy2021Module {}