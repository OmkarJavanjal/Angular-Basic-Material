import { HelperComponent } from './../helper/helper.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';   
const routes: Routes = [  
    { path: 'loginModule', component: LoginComponent },  
]; 
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [LoginComponent, HelperComponent]
})
export class LoginModuleModule { }
