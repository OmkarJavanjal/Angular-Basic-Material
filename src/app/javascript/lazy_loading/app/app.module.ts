
/** 
 ** First, we need to: 
 **  import the Component, OnInit class from '@angular/core' library
 **  import the FormBuilder, FormGroup, Validators from '@angular/forms' to load our web app
 **  import the Router, NavigationEnd, ActivatedRoute from '@angular/router'
 **  import the AppRoutingModule from './app-routing.module'
 **  import the all service and component
 */ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { EmpFirstChildComponent } from './emp-first-child/emp-first-child.component';
import { EmpSecondChildComponent } from './emp-second-child/emp-second-child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmpParamDataComponent } from './emp-param-data/emp-param-data.component';


	/**
	Use @NgModule() and include 'declarations','imports', providers, bootstrap
	*
	Inside the 'declarations' define all name of components as a dependency
	
	*
	Inside the 'imports' define all name of module as a dependency
	*
	Inside the 'providers' define all name of service which are required as a dependency
	*
	Inside the 'bootstrap' define  name of component which are required for bootstraping process this com is called root component
	
	*/
	 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    ProductDataComponent,
    EmpFirstChildComponent,
    EmpSecondChildComponent,
    PagenotfoundComponent,
    EmpParamDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/** 
 ** export our component so that it can be imported to othr files
 **
 **/
 
export class AppModule { }
