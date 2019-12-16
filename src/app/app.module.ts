import { CryptoJSData } from './service/user';
import { Person2021RoutingModule } from './2021/lazy2021_routing.module';
import { PersonRoutingModule } from './2020/lazy2020_routing.module';
import { lazy2019Module } from './2019/lazy2019.module';
import { lazy2018Module } from './2018/lazy2018.module';
import { lazy2020Module } from './2020/lazy2020.module';
import { lazy2021Module } from './2021/lazy2021.module';
import { IndicatorComponent } from './indicator/indicator.component';

import { LoginModuleModule } from './login-module/login.module';
import { NumberPipe } from './filter/number.pipe';
import { TextMaskModule } from 'angular2-text-mask';
/** 
 ** First, we need to: 
 **  import the Component, OnInit class from '@angular/core' library
 **  import the FormBuilder, FormGroup, Validators from '@angular/forms' to load our web app
 **  import the Router, NavigationEnd, ActivatedRoute from '@angular/router'
 **  import the AppRoutingModule from './app-routing.module'
 **  import the all service and component
 */
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentService } from './service/student.service';
import { MobileNumberFormatePipe } from './filter/mobile-number-formate.pipe';
import { SearchStudentComponent } from './search-student/search-student.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { SearchProductDetailsComponent } from './search-product-details/search-product-details.component';
import { HttpMethodService } from './service/http-method.service';
import { LogdinUserDetailComponent } from './logdin-user-detail/logdin-user-detail.component';
import { LocalStorageService } from './service/local-storage.service';
import { LogoutComponent } from './logout/logout.component';
import { TimerCountComponent } from './timer-count/timer-count.component';
import { RoutingGuardGuard } from './routing/routing-guard.guard';
import { CountryComponent } from './country/country.component';
import { PagerService } from './service/pager.service';
import { SharedServiceService } from './service/shared-service.service';
import { CarouselserviceService } from './service/carouselservice.service';
import { HeightserviceService } from './service/heightservice.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalModule, TypeaheadModule, TooltipModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ModaldirectiveDirective } from './directive/modaldirective.directive';
import { ModalcomponentComponent } from './modalcomponent/modalcomponent.component';
import { SetframeComponent } from './setframe/setframe.component';
import { ChangecolorDirective } from './directive/changecolor.directive';
import { MaxHeightDirective } from './directive/max-height.directive';
import { FrameInfoComponent } from './frame-info/frame-info.component';
import { SetHeightDirective } from './directive/set-height.directive';
import { CarouseldirectiveDirective } from './directive/carouseldirective.directive';
import { DirectiveEventEmitterDirective } from './directive/directive-event-emitter.directive';
import { StructuraldirectiveDirective } from './directive/structuraldirective.directive';
import { AttributedirectiveDirective } from './directive/attributedirective.directive';
import { LoopdirectiveDirective } from './directive/loopdirective.directive';
import { IfdirectiveDirective } from './directive/ifdirective.directive';
import { DelydirectiveDirective } from './directive/delydirective.directive';
import { ViewcolordirectiveDirective } from './directive/viewcolordirective.directive';
import { PanedirectiveDirective } from './directive/panedirective.directive';
import { BookdirectiveDirective } from './directive/bookdirective.directive';
import { LeftBoxComponent } from './left-box/left-box.component';
import { RightBoxComponent } from './right-box/right-box.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { OnlyStringDirective } from './directive/only-string.directive';
import { JavascriptComponent } from './javascript/javascript.component';
import { StockshareComponent } from './stockshare/stockshare.component';
import { StockchangeComponent } from './stockchange/stockchange.component';
import { MyGridApplicationngComponent } from './my-grid-applicationng/my-grid-applicationng.component';
import { DaterangeComponent } from './daterange/daterange.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { AccordionModule, InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {TreeNode} from 'primeng/api';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ButtonComponent } from './button/button.component';
import { LabelHeadingComponent } from './label-heading/label-heading.component';
import { LabelTextComponent } from './label-text/label-text.component';
import { TernaryTextComponent } from './ternary-text/ternary-text.component';
import { Gtd2Component } from './gtd2/gtd2.component';
import { PrintDocumentComponent } from './print-document/print-document.component';
import { MaskPipe } from './mask.pipe';
import { PhonePipe } from './phone.pipe';
import { MyCurrencyFormatterDirective } from './mask-input.directive';
import { LimitPipe } from './limit.pipe';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { StepIndicatorFormComponent } from './step-indicator-form/step-indicator-form.component';
import { BsModalComponent } from './bs-modal/bs-modal.component';
import { TabComponent } from './tab/tab.component';
import { ModalComponent } from './modal/modal.component';
import { RadioComponent } from './radio/radio.component';
import { NextComponent } from './next/next.component';
import { MycurrencyPipe } from './my-currency-pipe.pipe';
import { MycurrencyDirective } from './my-currency-formatter.directive';
import { DomChangeDirective } from './dom-change.directive';
import { TokenComponent } from './token/token.component';
import { TokenService } from './token.service';
import { IpAddressService } from './ip-address.service';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { FaqComponent } from './faq/faq.component';
import { SubmitterComponent } from './submitter/submitter.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { HttpRequestService } from './http-request.service';
import { delay } from 'rxjs/operators';
//import { LazyloadingModule } from './lazyloading/lazyloading.module';
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
  export function initApp(http: HttpClient) {
    return () => {
      return http.get('https://api.github.com/users/sagar-ganatra')
        .toPromise()
        .then((resp) => {
          console.log('Response 1 - ', resp);
        });
    };
  }

  export function initApp2(http: HttpClient) {
    return () => {
      return http.get('https://api.github.com/users/sagar-ganatra')
        .toPromise()
        .then((resp) => {
          console.log('Response 2 - ', resp);
        });
    };
  }

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentRegistrationComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
    PagenotfoundComponent,
    MobileNumberFormatePipe,
    SearchStudentComponent,
    ControlMessagesComponent,
    SearchProductDetailsComponent,
    LogdinUserDetailComponent,
    LogoutComponent,
    TimerCountComponent,
    CountryComponent,
    TypeaheadComponent,
    ModaldirectiveDirective,
    ModalcomponentComponent,
    SetframeComponent,
    ChangecolorDirective,
    MaxHeightDirective,
    FrameInfoComponent,
    SetHeightDirective,
    CarouseldirectiveDirective,
    DirectiveEventEmitterDirective,
    StructuraldirectiveDirective,
    AttributedirectiveDirective,
    LoopdirectiveDirective,
    IfdirectiveDirective,
    DelydirectiveDirective,
    ViewcolordirectiveDirective,
    PanedirectiveDirective,
    BookdirectiveDirective,
    LeftBoxComponent,
    RightBoxComponent,
    MainBoxComponent,
    OnlyNumberDirective,
    OnlyStringDirective,
    JavascriptComponent,
    StockshareComponent,
    StockchangeComponent,
    MyGridApplicationngComponent,
    DaterangeComponent,
    NumberPipe,
    DatePickerComponent,
    InputBoxComponent,
    ParentComponent,
    ChildComponent,
    IndicatorComponent,
    ButtonComponent,
    LabelHeadingComponent,
    LabelTextComponent,
    TernaryTextComponent,
    Gtd2Component,
    PrintDocumentComponent,
    MaskPipe,
    PhonePipe,
    MyCurrencyFormatterDirective,
    LimitPipe,
    TrackComponent,
    AlbumComponent,
    HeaderComponent,
    SearchInputComponent,
    StepIndicatorFormComponent,
    BsModalComponent,
    TabComponent,
    ModalComponent,
    RadioComponent,
    NextComponent,
    MycurrencyPipe,
    MycurrencyDirective,
    DomChangeDirective,
    TokenComponent,
    D3ChartComponent,
    FaqComponent,
    SubmitterComponent,
    ReviewerComponent

  ],
  entryComponents: [
    ModalComponent
],
  imports: [
    //LazyloadingModule,
    HttpClientModule,
    Person2021RoutingModule,
    PersonRoutingModule,
    lazy2021Module,
    lazy2020Module,
    lazy2018Module,
    lazy2019Module,
    TextMaskModule,

    LoginModuleModule,
    BrowserModule, AppRoutingModule, HttpModule, ReactiveFormsModule, FormsModule,
    ModalModule.forRoot(), TypeaheadModule.forRoot(), TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    OrganizationChartModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [HttpClient]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp2,
      multi: true,
      deps: [HttpClient]
    },
    BsModalRef, TokenService,IpAddressService, HttpRequestService,
    StudentService, HttpMethodService,MycurrencyPipe,CryptoJSData,
    LocalStorageService, RoutingGuardGuard, PagerService, SharedServiceService,
    BsModalService, CarouselserviceService, HeightserviceService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})

/** 
 ** export our component so that it can be imported to othr files
 **
 **/

export class AppModule { }
