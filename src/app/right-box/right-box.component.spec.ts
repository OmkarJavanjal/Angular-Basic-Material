import { ParentComponent } from '../parent/parent.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RightBoxComponent } from './right-box.component';
import {Component,OnInit,TemplateRef,ViewContainerRef,ElementRef,AfterViewChecked,ViewChild,Directive,Input,Output,EventEmitter,CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../routing/app-routing.module';
import { StudentRegistrationComponent } from '../student-registration/student-registration.component';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { SearchProductDetailsComponent } from '../search-product-details/search-product-details.component';
import { LogdinUserDetailComponent } from '../logdin-user-detail/logdin-user-detail.component';
import { LogoutComponent } from '../logout/logout.component';
import { CountryComponent } from '../country/country.component';
import { TimerCountComponent } from '../timer-count/timer-count.component';
import { ControlMessagesComponent } from '../control-messages/control-messages.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { ModalcomponentComponent } from '../modalcomponent/modalcomponent.component';
import { TypeaheadComponent } from '../typeahead/typeahead.component';
import { SetframeComponent } from '../setframe/setframe.component';
import { FrameInfoComponent } from '../frame-info/frame-info.component';
import { LeftBoxComponent } from '../left-box/left-box.component';
import { MainBoxComponent } from '../main-box/main-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead/typeahead.module';
import { DelydirectiveDirective } from '../directive/delydirective.directive';
import { IfdirectiveDirective } from '../directive/ifdirective.directive';
import { LoopdirectiveDirective } from '../directive/loopdirective.directive';
import { StructuraldirectiveDirective } from '../directive/structuraldirective.directive';
import { StudentService } from '../service/student.service';
import { StudentServiceMock } from '../service/student.service.mock';
import { JavascriptComponent } from '../javascript/javascript.component';
import { StockshareComponent } from '../stockshare/stockshare.component';
import { User } from '../service/user';
import { countryDataType } from '../service/user';
import { incrementDetails } from '../service/user';
import { prodDetails } from '../service/user';
import { StockchangeComponent } from '../stockchange/stockchange.component';
import { DebugElement } from '@angular/core';
fdescribe('RightBoxComponent', () => {
    let component: RightBoxComponent;
    let fixture: ComponentFixture<RightBoxComponent>;
    let location: Location;
    let router: Router;
    let debugElement:DebugElement;
    let dataService;
  //  let studentService = debugElement.injector.get(StudentService);
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                RouterTestingModule.withRoutes(routes),
                FormsModule,
                ReactiveFormsModule,
                TypeaheadModule.forRoot(),
            ],
            declarations: [
                StudentLoginComponent,
                StudentRegistrationComponent,
                StudentDetailsComponent,
                StudentUpdateComponent,
                PagenotfoundComponent,
                SearchStudentComponent,
                ControlMessagesComponent,
                SearchProductDetailsComponent,
                LogdinUserDetailComponent,
                LogoutComponent,
                TimerCountComponent,
                CountryComponent,
                TypeaheadComponent,
                ModalcomponentComponent,
                SetframeComponent,
                FrameInfoComponent,
                LeftBoxComponent,
                RightBoxComponent,
                MainBoxComponent,
                DelydirectiveDirective,
                IfdirectiveDirective,
                LoopdirectiveDirective,
                StructuraldirectiveDirective,
                JavascriptComponent,
                StockshareComponent,
                StockchangeComponent,
                ParentComponent

            ],
            providers: [
                { provide: StudentService, useClass: StudentServiceMock }
            ]
        })
            .compileComponents();
    }));
    beforeEach(() => {
         fixture = TestBed.createComponent(RightBoxComponent);
         component = fixture.componentInstance
         fixture.detectChanges();
        
     });
    it('should create', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/


        expect(component).toBeTruthy();
    });
    it('should call : onFilterDepthChange()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        var selectedFilterDepth={name: "depth2"};
        component.onFilterDepthChange(selectedFilterDepth);       
        expect(component.filterData[0].name).toBe('depth2');
    });
    it('should call : onFilterAllowanceChange()', () => {
       /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/


        var selectedAllowance={name: "Allowance2"};
        component.onFilterAllowanceChange(selectedAllowance);      
        expect(component.filterData[1].name).toBe('Allowance2');
    });
    it('should call : onVelocityChange()', () => {
         /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        var selectedAllowance={name: "Velocity2"};
        component.onVelocityChange(selectedAllowance);      
        expect(component.filterData[2].name).toBe('Velocity2');
    });
    it('should call : canCounterIncrement()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/


        component.canIncrement = true;
        component.maxValue=10;
        component.canCounterIncrement();       
        expect(component.maxValue).toBe(10);
    });
    it('should call : canCounterDecrement()', () => {
         /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        component.canIncrement = true;
        component.minValue=10;
        component.canCounterDecrement();       
        expect(component.maxValue).toBe(20);
    });
    it('should call if invoiceNo  present: increment()  and quantity < incrementBy', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/


        component.canIncrement = true;
        component.counterValue = new prodDetails("CPL PREMIER SUB PKG","CPL - Premier Subscription Package","PREW",300,1,300,20,10,"Good","XSAE",500,2000, 0,0,100,16546798,"NA",false);
        component.increment();
        expect(component['counterValue'].hasOwnProperty('invoiceNo')).toBeTruthy();
        expect(component.counterValue.quantity).toBe(5);
    });
    it('should call if invoiceNo  present: increment()  and quantity >= incrementBy', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        component.canIncrement = true;
        component.counterValue = new prodDetails("CPL PREMIER SUB PKG","CPL - Premier Subscription Package","PREW",300,5,300,20,10,"Good","XSAE",500,2000,0,0,100,16546798,"NA",false);
        component.increment();
        expect(component['counterValue'].hasOwnProperty('invoiceNo')).toBeTruthy();
        expect(component.counterValue.quantity).toBe(10);
    });
    it('should call if invoiceNo not present : increment() ', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        component.canIncrement = true;
        component.counterValue = new prodDetails("CPL PREMIER SUB PKG", "CPL - Premier Subscription Package", "PREW", 300, 2, 300, 20, 10, "Good", "XSAE", 500, 2000, 0, 0, 100);
        component.increment();
        expect(component['counterValue'].hasOwnProperty('invoiceNo')).toBeTruthy();
        expect(component.counterValue.quantity).toBe(3);
    });
    it('should call if invoiceNo  present: decrement() if counterValue quantity === res incrementBy', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        component.canIncrement = true;
        component.counterValue = new prodDetails("CPL PREMIER SUB PKG","CPL - Premier Subscription Package","PREW",300,5,300,20,10,"Good","XSAE",500,2000,0,0,100,16546798,"NA",false);
        component.decrement();

        expect(component['counterValue'].hasOwnProperty('invoiceNo')).toBeTruthy();
        expect(component.counterValue.quantity).toBe(1);
    });
    it('should call if invoiceNo present : decrement() if counterValue quantity is not equal res incrementBy', () => {
       /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/

        component.canIncrement = true;
        component.counterValue = new prodDetails("CPL PREMIER SUB PKG","CPL - Premier Subscription Package","PREW",300,8,300,20,10,"Good","XSAE",500,2000,0,0,100,16546798,"NA",false);
        component.decrement();
        expect(component['counterValue'].hasOwnProperty('invoiceNo')).toBeTruthy();
        expect(component.counterValue.quantity).toBe(3);
    });
    it('should call if invoiceNo not present : decrement()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/
        component.canIncrement = true;
        component.counterValue = new prodDetails("CPL PREMIER SUB PKG","CPL - Premier Subscription Package","PREW",300,8,300,20,10,"Good","XSAE",500,2000,0,0,100);
        component.decrement();
        expect(component['counterValue'].hasOwnProperty('invoiceNo')).toBeTruthy();
        expect(component.counterValue.quantity).toBe(7);
    });

    it('should call with toBeFalsy: getConfirmationData()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/  
      expect(component.checkConfirmationData.hasOwnProperty('name')).toBeFalsy();
      expect(component.checkConfirmationData['name']).toBe(undefined);
    });

    it('should call with toBeTruthy: getConfirmationData()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/  
         expect(component.productFamilies.hasOwnProperty('UltraTax CS')).toBeTruthy();
         expect(component.productFamilies['UltraTax CS'].length).toBeGreaterThan(1); //true
        });
    
    it('should call toBeTruthy: parseConfirmationArray()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/
      let input= {
        "Fixed Assets CS": [
          {
            "name": "Fixed Assets CS - Perpetual - through 11/01/19",
            "price": 245,
            "parent": false
          },
          {
            "name": "Fixed Assets CS Local Area Network",
            "price": 80,
            "parent": false
          }
        ]
      };
      component.parseConfirmationArray(input);
     expect(input.hasOwnProperty('Fixed Assets CS')).toBeTruthy();
     // expect(component.checkConfirmationData['name']).toBe("Fixed Assets CS");
     // expect(component.checkConfirmationData['children'][0]['name']).toBe("Fixed Assets CS - Perpetual - through 11/01/19");
    });
    it('should call toBeFalsy(): parseConfirmationArray()', () => {
        /**fixture = TestBed.createComponent(RightBoxComponent);
        component = fixture.componentInstance
        fixture.detectChanges();*/
      let input= {
        "Fixed Assets CS": [
          {
            "name": "Fixed Assets CS - Perpetual - through 11/01/19",
            "price": 245,
            "parent": false
          },
          {
            "name": "Fixed Assets CS Local Area Network",
            "price": 80,
            "parent": false
          }
        ]
      };
      component.parseConfirmationArray(input);
      expect(input.hasOwnProperty('Fixed Assets')).toBeFalsy();
     // expect(component.checkConfirmationData['name']).toBe("Fixed Assets CS");
     // expect(component.checkConfirmationData['children'][0]['name']).toBe("Fixed Assets CS - Perpetual - through 11/01/19");
    });




});
