import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { StudentRegistrationComponent } from '../student-registration/student-registration.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { SearchProductDetailsComponent } from '../search-product-details/search-product-details.component';
import { LogdinUserDetailComponent } from '../logdin-user-detail/logdin-user-detail.component';
import { LogoutComponent } from '../logout/logout.component';
import { RoutingGuardGuard } from './routing-guard.guard';
import { CountryComponent } from '../country/country.component';
import { TypeaheadComponent } from '../typeahead/typeahead.component';
import { SetframeComponent } from '../setframe/setframe.component';
import { FrameInfoComponent } from '../frame-info/frame-info.component';
import { LeftBoxComponent } from '../left-box/left-box.component';
import { RightBoxComponent } from '../right-box/right-box.component';
import { MainBoxComponent } from '../main-box/main-box.component';
import { StockshareComponent } from '../stockshare/stockshare.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { StockchangeComponent } from '../stockchange/stockchange.component';
import { MyGridApplicationngComponent } from '../my-grid-applicationng/my-grid-applicationng.component';
import { ParentComponent } from '../parent/parent.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { TrackComponent } from '../track/track.component';
import { AlbumComponent } from '../album/album.component';
import { StepIndicatorFormComponent } from '../step-indicator-form/step-indicator-form.component';
import { TokenComponent } from '../token/token.component';
import { D3ChartComponent } from '../d3-chart/d3-chart.component';
import { FaqComponent } from '../faq/faq.component';
import { SubmitterComponent } from '../submitter/submitter.component';
import { ReviewerComponent } from '../reviewer/reviewer.component';
export const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'registration', component: StudentRegistrationComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'update/:id', component: StudentUpdateComponent },
	//{ path: 'detail', component: StudentDetailsComponent },
	{
		path: 'detail',
		component: StudentDetailsComponent,
		children: [
			{ path: '', redirectTo: 'tracks', pathMatch: 'full' },
		  {path: 'tracks', component: TrackComponent}, 
		  {path: 'albums', component: AlbumComponent}, 
		]
	  },
	{ path: 'detailLeft', component: StudentDetailsComponent },
	{ path: '', component: StudentLoginComponent },
	{ path: 'search', component: SearchStudentComponent },
	{ path: 'indicator', component: IndicatorComponent },
	{ path: 'searchProduct', component: SearchProductDetailsComponent },
	{
		path: 'loggedin', component: LogdinUserDetailComponent,
		children: [
			{ path: 'searchChild', component: SearchStudentComponent }
		]
		// canActivate: [RoutingGuardGuard],
		// canActivateChild: [RoutingGuardGuard]
	},
	{ path: 'logout', component: LogoutComponent },
	{ path: 'country', component: CountryComponent },
	{ path: 'typeahead', component: TypeaheadComponent },
	{ path: 'setframe', component: SetframeComponent },
	{ path: 'frameInfo', component: FrameInfoComponent },
	{ path: 'script', component: JavascriptComponent },
	{ path: 'exchange', component: StockchangeComponent },
	{ path: 'mainBox', component: MainBoxComponent },
	{ path: 'parent', component: ParentComponent },
	{ path: 'stepForm', component: StepIndicatorFormComponent },
	{ path: 'token', component: TokenComponent },
	{ path: 'chart', component: D3ChartComponent },
	{ path: 'submitter', component: SubmitterComponent },
	{ path: 'reviewer', component: ReviewerComponent },
	//{path: 'lazyLoading', loadChildren: './lazyloading/lazyloading.module#LazyloadingModule'},
	{ path: '**', component: PagenotfoundComponent }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }

