import { ElementRef,DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
/**
 *  import source is our own file, for which I need to write test case
 */
import { MainBoxComponent } from './main-box.component';
import { LeftBoxComponent } from '../left-box/left-box.component';
import { RightBoxComponent } from '../right-box/right-box.component';
import { StudentService } from '../service/student.service';
import { StudentServiceMock } from '../service/student.service.mock';
import { SharedServiceService } from '../service/shared-service.service';
import { MockElementRef } from '../mocks/mock-element-ref';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
describe('MainBoxComponent', () => {
    let component: MainBoxComponent;
    let fixture: ComponentFixture<MainBoxComponent>;
    let de: DebugElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MainBoxComponent, LeftBoxComponent, RightBoxComponent],
            providers: [
                { provide: StudentService, useClass: StudentServiceMock },
                { provide: ElementRef, useClass: MockElementRef },
                SharedServiceService
            ],
            imports: [RouterTestingModule, FormsModule]
        })
            .compileComponents();
        console.log('test bed configuration for MainBoxComponent complete.');
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MainBoxComponent);
        component = fixture.componentInstance;
        console.log(fixture);
        fixture.detectChanges();
        console.log('Fixture configuration for MainBoxComponent complete.');
    });

    it('should create MainBoxComponent', () => {
        console.log('Available component is', component);
        expect(component).toBeTruthy();
    });
    /**it('should be called with whatever the user clck on btn event emits', () => {
        const counter = de.query(By.directive(LeftBoxComponent));
        const cmp = counter.componentInstance;
        de = fixture.debugElement;
        cmp.sendProductId.emit('CF00D');
        spyOn(component, 'getProductId');
        expect(component.getProductId).toHaveBeenCalledWith('CF00D');
      });*/
    
});
