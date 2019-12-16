import {
  NgModule, Component, OnInit, ViewChild, ViewChildren,AfterViewInit, OnDestroy, ElementRef, Renderer, AfterViewChecked,
  QueryList, AfterContentInit, AfterContentChecked,OnChanges
} from '@angular/core';
import { LeftBoxComponent } from '../left-box/left-box.component';
import { RightBoxComponent } from '../right-box/right-box.component';
import { SharedServiceService } from '../service/shared-service.service';
import { Subscription } from 'rxjs/Subscription';
import { StudentService } from '../service/student.service';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
//import { HeaderComponent } from '../header/header.component';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css']

})
export class MainBoxComponent implements OnInit, OnDestroy {
   inputTypeText="text";
   inputTypePass="password";
   placeHolder="Enter First Name";
   maxlength="10";
   minLength="3";
   inputId="id1";
  childTitle: string = 'This text is passed to child';
  studentData;
  studentDataLength: number;
  studentId: number;
  isDelete: boolean = false;
  message: string;
  shardeDatamessage: string;
  subscription: Subscription;
  shardeDataValue: any;
  integerValueChange:any;
  public userProductData;
  loading: boolean = false;

  public childTitleData: any;
  public ffdww:any;
  public searchResult:any;
  public view:string;
public abx;
  constructor(
    public elementRef:ElementRef,
    public sharedServiceService: SharedServiceService,
    public studentserviceService: StudentService
  ) {
    this.sharedServiceService.listen().subscribe((k:any) => {    
      if(k=='default message'){
        // write logic here at the time of page load which return 50 data first time
       // this.searchResult = await this._apiEndPoint code;
      }else{
       // write logic here which return data based on search data
       this.loading = true;
       this.studentserviceService.getselectArray4(k)
           .subscribe(
           data => {  
          //  this.searchResult = mm;       
             setTimeout(() => {
               //console.log(formModel);
              // alert('done!');
               this.loading = false;
               this.ffdww = k;
             }, 3000);
           });
         }  
     });

   }

   @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown: boolean = false;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }
   ngOnInit() {

    this.sharedServiceService.listenTitle().subscribe(shareTitle => this.view = shareTitle);

     this.getStudentsDetalisOnMainBox();
     this.subscription = this.sharedServiceService.currentMessage.subscribe(message => this.shardeDatamessage = message);
     this.sharedServiceService.getShareData.subscribe(shareData => this.shardeDataValue = shareData);
     // this.sharedServiceService.getMessage().subscribe(shareData => this.shardeDataValue = shareData);
     this.sharedServiceService.listen().subscribe((m:any) => {    
      if(m=='default message'){
        // write logic here at the time of page load which return 50 data first time
       // this.searchResult = await this._apiEndPoint code;
      }else{
       // write logic here which return data based on search data
       this.loading = true;
       this.studentserviceService.getselectArray4(m)
           .subscribe(
           data => {         
             setTimeout(() => {
               //console.log(formModel);
              // alert('done!');
               this.loading = false;
               this.searchResult = m;
             }, 3000);
           });
         }  
     });

  
     
   }
  onBlurMethod(isBlur){
   // alert(isBlur); 
   }
  /**
   * To access method and property and data from child component : LeftBoxComponent;
   */
  @ViewChild(LeftBoxComponent) childComponent;
  //@ViewChild(HeaderComponent) headerComponent;
  /**
   * CalCulate Height of box
   */
  @ViewChild('mainBox') elementView: ElementRef;
  viewHeight: number;
  viewHeightArray = [];
  //@ViewChild('title') title: ElementRef; 
//or below is second methoed
  @ViewChild('title', {read: ElementRef}) 
  title: ElementRef;
  @ViewChild('myButton') button: ElementRef;
  @ViewChildren('myButtonChild') myButtonChild: QueryList<ElementRef>;
  /**
   * All method and data define inside ngAfterViewInit if we use @ViewChild
   * call ngAfterViewInit lifecycle hook for all child components/directives
   * https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
   * 
   */
  ngAfterViewInit() {
    //below is another method to solve Undefined proble
    this.myButtonChild.changes.subscribe((comps: QueryList<ElementRef>) =>
    {
      console.log('this.myButtonChild',this.myButtonChild);
    })
    setTimeout(function () {
      if (this.childComponent && this.childComponent.Childmessage) {
        this.message = this.childComponent.Childmessage;  // THis message come from child component
      }
     
    },0) 
  }
  onClick(event) {
    console.log(event);
  }
  public ffd;
 
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }
  /**
   * @param message: In the parent, we create a function getStudentsId() to receive the data from child component 
   * 
   */
  getStudentsId(message: number) {
    console.log(message, message);
    this.studentId = message; // data comes from child component
    this.deleteStudentDetails(this.studentId);
  }
  /**
   * get student details data and display into table
   */
  getStudentsDetalisOnMainBox() {
    this.studentserviceService.getStudentData()
      .subscribe(
      data => {
        this.studentData = data;
        this.studentDataLength = this.studentData.length;
      }
      );
  }
  /**
   ** deleteStudentDetails method it is use to delete student details based on id
   */
  
  
   deleteStudentDetails(studentDataId: number) {
    if (confirm("Are you sure you want to delete " + studentDataId + "?")) {
      this.studentserviceService.deleteStudentData(studentDataId)
        .subscribe(response => {
          this.getStudentsDetalisOnMainBox();
          return true;
        }
        );
      setTimeout(() => {
        this.isDelete = true;
      }, 2000);
    }
  }
  /**
   * Below methos call by Child componet
   */
  anyParentMehtod(event) {
    alert('Good parent Methos call');
  }
  /**
   * Method to check only number inter in input text box and allow integer value not allow text
   * regexStr = '^[0-9]*$';  Only allow number
   */
  regexInt = '^[0-9]*$';
  integerValue: number;
  onlyNumber(event) {
    let e = <KeyboardEvent>event;
    let ch = String.fromCharCode(e.keyCode);
    let regEx = new RegExp(this.regexInt);
    if (regEx.test(ch)) {
      this.integerValue = event.target.value;
      return this.integerValue;
    } else {
      e.preventDefault();
    }
  }
  /**
     * 
     * 
     */
  getSingleUserDetailsData(productCode) {
    this.studentserviceService.get_Data(productCode)
      .subscribe(
      data => {
        this.userProductData = data;
      }
      );
  }
  /**
   * 
   * @param productId :We will het productId from child component left-box-component
   * Below code is share data using Service
   */
  /** getProductId(productId){
    console.log('productId', productId);
      this.studentserviceService.get_Data(productId)
      .subscribe(
      data => {
        this.userProductData = data;
        this.sharedServiceService.setShareProductData(this.userProductData);
        console.log('this.userProductData', this.userProductData);
      }
      );
   }

*/
  /**
       * 
       * 
       */
  changeIncrementQty(studentinfoData, productCode) {
    this.studentserviceService.update_user_data(studentinfoData, productCode)
      .subscribe(
      data => {
      }
      );
  }

  /**
   * below code is using @Iput and Output */

  getProductId(productId) {
    console.log('productId', productId); // receive from child component
    this.getSingleUserDetailsData(productId);

  }

  /**
   * send data to parent component -- main-box component
   * @param productId  
   */
  sendDataSibLing(productId) {
    console.log('productId---->>', productId); // receive from child component
    this.childTitleData = productId;

  }

  myCount: any;
  countChange(event) {
    console.log('event----', event);
    this.myCount = event;
    console.log('event.getChange', event.getChange);
    console.log('event.getId', event.getId);
    this.changeIncrementQty(event.getChange, event.getId);
  }

  abc(){
    alert('sdfdfd');
  }




/***
 * 
 * Final Concept for ngOnchange with @Input and @Output
 */






















}
