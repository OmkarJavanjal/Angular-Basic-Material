import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftBoxComponent } from './left-box.component';
import { SharedServiceService } from '../service/shared-service.service';
import { StudentServiceMock } from '../service/student.service.mock';
import { StudentService } from '../service/student.service';
describe('LeftBoxComponent', () => {
  let component: LeftBoxComponent;
  let fixture: ComponentFixture<LeftBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBoxComponent ],
      providers: [
        {provide: StudentService, useClass: StudentServiceMock},
        SharedServiceService
      ]
    })
    .compileComponents();
  }));
 beforeEach(() => {
    fixture = TestBed.createComponent(LeftBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call ngOnChanges()', () => {
    var changes={getProductDatas:{currentValue:{"price": 10,"id": "CF00D","incrementBy": 4,"minQuantity": 22,"maxQuantity": 9,"productCode": "CF00DD","totalPrice": 20,"ismaxQuantity": false}}};
    component.ngOnChanges(changes);
  });

  it('should call ngOnChanges() and minQuantity < incrementBy', () => {
    var changes={getProductDatas:{currentValue:{"price": 10,"id": "CF00D","incrementBy": 2,"minQuantity": 22,"maxQuantity": 9,"productCode": "CF00DD","totalPrice": 20,"ismaxQuantity": false}}};
    component.getProductDatas={"price": 10,"id": "CF00D","incrementBy": 4,"minQuantity": 22,"maxQuantity": 9,"productCode": "CF00DD"};
    component.ngOnChanges(changes);
  });

  it('should call ngOnChanges() and minQuantity is not < incrementBy', () => {
    var changes={getProductDatas:{currentValue:{"price": 10,"id": "CF00D","incrementBy": 2,"minQuantity": 22,"maxQuantity": 9,"productCode": "CF00DD","totalPrice": 20,"ismaxQuantity": false}}};
    component.getProductDatas={"price": 10,"id": "CF00D","incrementBy": 1,"minQuantity": 22,"maxQuantity": 9,"productCode": "CF00DD"};
    component.ngOnChanges(changes);
  });

  it('should call if changeQty', () => {
    var studentinfoData={"price": 10,"id": "CF00D","incrementBy": 2,"minQuantity": 22,"maxQuantity": 9,"productCode": "CF00DD","totalPrice": 20,"ismaxQuantity": false};
    var productCode= 'CF00D';
    component.changeQty(studentinfoData,productCode);
  });

  it('should call  increment() method', (done) => {
    component.productId = 'CF00D';
    component.sendProductId.subscribe(g => {
      expect(g).toEqual('CF00D');
      done();
   });
    component.increment();
  });

  it('should call  callParentMethod() method', () => {
    component.productId = 'CF00D';
    component.callParentMethod();
  });

  it('should call  deleteStudentDetails() method', (done) => {
    var studentinfoId= 10;
    component.myEventData.subscribe(g => {
      expect(g).toEqual(10);
      done();
   });
   component.deleteStudentDetails(studentinfoId); 
  });
  it('should call  newMessage() method', () => {
    component.newMessage();
  });

});