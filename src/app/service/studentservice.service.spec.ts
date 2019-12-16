import { TestBed, inject } from '@angular/core/testing';
import { StudentService } from './student.service';
import { HttpMethodService } from './http-method.service';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { User } from './user';
fdescribe('StudentService', () => {
    let subject: StudentService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: ConnectionBackend, useClass: MockBackend},
                {provide: RequestOptions, useClass: BaseRequestOptions},
                StudentService,
                HttpMethodService,
                Http
            ]
        });
    });
    beforeEach(inject([StudentService], (studentserviceService: StudentService) => {
        subject = studentserviceService;
    }));
    it('should be created', () => {
        expect(subject).toBeTruthy();
    });
    it('should return it\'s horsepower', () => {
        expect(subject.getHorsepower()).toEqual(150);
    });
    it('should return it\'s name', () => {
        expect(subject.getName()).toEqual('Basic engine');
    });
    it('should getStudentData call', () => {
        subject.getStudentData();
    });
    it('should getStudentData call', () => {
        subject.getCountryData();
    });
    it('should getColorData call', () => {
        subject.getColorData();
    });
    it('should getBorderData call', () => {
        subject.getBorderData();
    });
    it('should getBackgroundData call', () => {
        subject.getBackgroundData();
    });
    it('should getFrameData call', () => {
        subject.getFrameData();
    });
    it('should postFrameData call', () => {
        let frameDataObj={
            "colorCode": "#f0f8ff",
            "ColorName": "aliceblue",
            "colorPrice": "50",
            "borderImage": "url(https://www.w3schools.com/cssref/border.png)",
            "borederName": "border1",
            "borderPrice": "100",
            "backgroundImage": "url(https://i.pinimg.com/564x/80/0b/99/800b9931e9e5869aa84baf7d7a73d481.jpg)",
            "backgroundName": "backgroundName1",
            "backgroundPrice": "100",
            "totalAmounts": 0,
            "id": 1
          };
        subject.postFrameData(frameDataObj);
    });
    it('should searchCountryDetail call', () => {
        subject.searchCountryDetail('India');
    });
    it('should getStateData call', () => {
        subject.getStateData('India');
    });
    it('should getCityData call', () => {
        subject.getCityData('India','Varanasi');
    });
    it('should getCountryDataByLimit call', () => {
        subject.getCountryDataByLimit(10,20);
    });
    it('should sendLoginStudentdData call', () => {
        subject.sendLoginStudentdData('Abhinav','abhinavsingh34');
    });
    it('should getSingleStudentDetail call', () => {
        subject.getSingleStudentDetail(2);
    });
    it('should deleteStudentData call', () => {
        subject.deleteStudentData(2);
    });
    it('should updateStudentdData call', () => {
          let userInfo:User;
           this.userInfo={
            "firstName": "asasasa",
            "lastName": "kumar singh",
            "userName": "ll",
            "email": "abhinavsingh34@gmail.com",
            "mobile": "9654132611",
            "gender": "Male",
            "password": {
              "pwd": "123456789",
              "confirmPwd": "123456789"
            },
            "id": 9
          };

        subject.updateStudentdData(this.userInfo,this.userInfo.id);
    });
    it('should sendStudentdData call', () => {
        let userInfo:User;
         this.userInfo={
          "firstName": "asasasa",
          "lastName": "kumar singh",
          "userName": "ll",
          "email": "abhinavsingh34@gmail.com",
          "mobile": "9654132611",
          "gender": "Male",
          "password": {
            "pwd": "123456789",
            "confirmPwd": "123456789"
          },
          "id": 9
        };

      subject.sendStudentdData(this.userInfo);
  });
   it('should searchProductDetail call', () => {
        subject.searchProductDetail('India');
    });
    it('should searchStudentDetail call', () => {
        subject.searchStudentDetail('India');
    });
    it('should getFinalCSCData call', () => {
        subject.getFinalCSCData('India','UP','Chandauli');
    });
});
