import { environment } from './../environments/environment';
import { Component, ViewChild, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized  } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { filter, pairwise } from 'rxjs/operators';
//import { environment } from '../environments';
/**C:\Abhinav Accenture\angularPocFinal\student-data\angular2pocproject\student-data\src\environments
	** getValidatorErrorMessage method
	*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
	** getValidatorErrorMessage method
	*/
export class AppComponent {
  /**
	** getValidatorErrorMessage method
	*/
	public evv;
	public isCheck;
	title = 'app';
	environmentName = environment.env;
	constructor(private router: Router, 
		private activatedRoute: ActivatedRoute) {
		 }
		 ngOnInit() {
			var referrer =  document.referrer;
			console.log('Response 3 - ');
		 }
		 @Output() myEventData2 = new EventEmitter<any>();
			@ViewChild(HeaderComponent) headerComponent:HeaderComponent;
			ngAfterViewInit() {
				// child is set
			//	this.headerComponent.callMethod(this.activatedRoute.snapshot['_routerState'].url);
			}			

			
			changeOfRoutes(){
				this.headerComponent.callMethod(this.activatedRoute.snapshot['_routerState'].url);
				console.log('activatedRoute.snapshot.routeConfig.aaaaa', this.activatedRoute.snapshot['_routerState'].url);
				sessionStorage.setItem('foo', this.activatedRoute.snapshot['_routerState'].url);
				}


				getStudentsId(event) {
					alert('g');
					console.log('messageoioiopoo', event);
					this.evv =event;

				  }
}
