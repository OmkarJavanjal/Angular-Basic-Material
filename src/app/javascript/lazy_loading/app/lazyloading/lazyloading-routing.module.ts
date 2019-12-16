import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadingComponent } from './lazyloading.component';
import { LazyloadingfirstchildComponent } from '../lazyloadingfirstchild/lazyloadingfirstchild.component';
import { LazyloadingsecondchildComponent } from '../lazyloadingsecondchild/lazyloadingsecondchild.component';

const routes: Routes = [
  { path: '',  component: LazyloadingComponent,
    children: [
      {path: 'lazyloadingfirstChild', component:  LazyloadingfirstchildComponent}, 
      {path: 'lazyloadingsecondChild', component: LazyloadingsecondchildComponent}, 
    ]   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
