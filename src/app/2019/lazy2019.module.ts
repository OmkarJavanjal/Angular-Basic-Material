import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Primary2019Component } from '../2019/primary/primary.component';
import { Secondary2019Component } from '../2019/secondary/secondary.component';
import { IndicatorComponent } from '../indicator/indicator.component';
const routes: Routes = [  
                    { 
                      path: '2019',
                          children: [ 
                              { path: 'primary', component: IndicatorComponent },
                              { path: 'secondary', component: IndicatorComponent }
                          ]
                    }
                  ];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    Primary2019Component,
    Secondary2019Component
  ],
  exports: [
    Primary2019Component,
    Secondary2019Component
  ]
})
export class lazy2019Module {}