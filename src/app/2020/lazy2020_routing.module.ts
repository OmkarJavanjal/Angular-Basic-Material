import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorComponent } from '../indicator/indicator.component';
const routes: Routes = [
    { 
        path: '2020',
            children: [ 
                { path: 'primary', component: IndicatorComponent },
                { path: 'secondary', component: IndicatorComponent }
            ]
       }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
export class PersonRoutingModule{ } 
