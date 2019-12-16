import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { EmpFirstChildComponent } from './emp-first-child/emp-first-child.component';
import { EmpSecondChildComponent } from './emp-second-child/emp-second-child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpParamDataComponent } from './emp-param-data/emp-param-data.component';

const routes: Routes = [
    // {path: '', redirectTo: 'employee', pathMatch: 'full'},
    { path: 'employee', component: EmployeeDataComponent,
  
    children: [
      {path: 'firstChild', component:  EmpFirstChildComponent}, 
      {path: 'secondChild', component: EmpSecondChildComponent}, 
    ]  	
	},
	{ path: 'employee/:id',  component: EmpParamDataComponent },
  { path: 'product',  component: ProductDataComponent },
   {path: 'lazyLoading', loadChildren: './lazyloading/lazyloading.module#LazyloadingModule'},
  {path: '**', component: PagenotfoundComponent}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
