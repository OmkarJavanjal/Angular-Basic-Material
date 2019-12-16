import { NgModule } from '@angular/core';
import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazyloadingComponent } from './lazyloading.component';
import { LazyloadingfirstchildComponent } from '../lazyloadingfirstchild/lazyloadingfirstchild.component';
import { LazyloadingsecondchildComponent } from '../lazyloadingsecondchild/lazyloadingsecondchild.component';

@NgModule({
  declarations: [
    LazyloadingComponent,
	LazyloadingfirstchildComponent,
	LazyloadingsecondchildComponent
  ],
  imports: [
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
