import {
  Component, OnInit, Input, Output, EventEmitter, OnChanges
}
from '@angular/core';
import {
  SharedServiceService
}
from '../service/shared-service.service';
import {
  StudentService
}
from '../service/student.service';
@Component({
  selector: 'app-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})
export class LeftBoxComponent implements OnInit, OnChanges {
  Childmessage = 'Hola Mundo!';
  shardeData: string; // it means we can assign only string
  public getData: any; // it means we can assign any type of value
  public num: number = 45; // it means we can assign only number type value
  public productId = "CF00D";
  /**
   * @ title: take string data from parent componet
   * When we want to send data from parent to child then we use @input properties.
   * here mainBox is parent component and left-box is child component and we send data from mainBox component to child component
   */
  @Input() title: string;
  /**
   * @ studentDetails: take json data from parent componet
   * When we want to send data from parent to child then we use @input properties.
   * here mainBox is parent component and left-box is child component and we send data from mainBox component to child component
   */
  @Input() studentDetails;

  /** Call method from parent component */
  @Output() myEvent = new EventEmitter < string > ();
  callParentMethod() {
          this.myEvent.emit();
      }
      /** send data with method name method from child to parent component
       * myEventData: is a method name use to send data into parent component from child component.
       */
  @Output() myEventData = new EventEmitter < string > ();
  /**
   * If we want to send data from child component to parent component then use @Output:
   * @param studentinfoId : this is id data of child component and send from child component and send it to parent component
   */
  public checkConfirmationData: {} = {};
  public checkConfirmationDataArray = [];
  public UltraTaxArrayData = [];
  public FixedArrayData = [];
  public FixeArrayData = [];
  public checkConfirmation: any;
  public id = 1;
  @Output('update') change: EventEmitter < any > = new EventEmitter < any > (); // this is use to send data to parent to update responce
  @Output() sendProductId = new EventEmitter < string > ();
  @Input() getProductDatas; // receive data from parent component
  @Output() sendData = new EventEmitter < any > ();
  deleteStudentDetails(studentinfoId) {
      this.myEventData.emit(studentinfoId);
  }
  constructor(
      private sharedServiceService: SharedServiceService,
      private studentserviceService: StudentService
  ) {}
  ngOnInit() {
      this.sharedServiceService.currentMessage.subscribe(message => this.shardeData = message);
      this.getSingleUserDetailsData("CF00D");
      this.dataService();
  }

  sibling(name) {
      this.id = this.id + 1;
      console.log('this.id---', this.id);
      // console.log('name---', name);
      this.sendData.emit(this.id);
  }

  dataService() {
      this.studentserviceService.getConfirmationData().subscribe(data => {
          let productFamilies = {};
          this.checkConfirmation = data.confirmations;
          for (let i = 0; i < this.checkConfirmation.length; i++) {
              if (this.checkConfirmation[i].refType == 1) {
                  let renewedItemsArray = this.checkConfirmation[i].renewedItems;
                  for (let j = 0; j < renewedItemsArray.length; j++) {
                      if (productFamilies.hasOwnProperty(renewedItemsArray[j].productFamily)) {
                          productFamilies[renewedItemsArray[j].productFamily].push(renewedItemsArray[j]);
                      } else {
                          productFamilies[renewedItemsArray[j].productFamily] = [];
                          productFamilies[renewedItemsArray[j].productFamily].push(renewedItemsArray[j]);
                      }
                  }
                  this.parseConfirmationArray(productFamilies);
              }
          }
      });
  }
  parseConfirmationArray(input: object) {
          for (let key in input) {
              if (input.hasOwnProperty(key)) {
                  let indexTracker = 0;
                  this.checkConfirmationData['name'] = key;
                  this.checkConfirmationData['price'] = 0;
                  this.checkConfirmationData['parent'] = true;
                  input[key].forEach(item => {
                      if (!this.checkConfirmationData['children']) {
                          this.checkConfirmationData['children'] = [];
                      }
                      this.checkConfirmationData['children'][indexTracker] = {};
                      this.checkConfirmationData['children'][indexTracker].name = item.productName;
                      this.checkConfirmationData['children'][indexTracker].price = item.price;
                      this.checkConfirmationData['price'] += item.price;
                      this.checkConfirmationData['children'][indexTracker].parent = false;
                      indexTracker += 1;
                  });
              }
              this.checkConfirmationDataArray.push(this.checkConfirmationData);
              this.checkConfirmationData = {};
          }
      }
      /**
       * 
       * @param changes :It is use to find changes data
       */
  ngOnChanges(changes) {
      console.log('changes-----', changes);
      if (changes.getProductDatas.currentValue && changes.getProductDatas.currentValue.hasOwnProperty('incrementBy')) {
          if (this.getProductDatas && this.getData) {
              if (this.getData['minQuantity'] < this.getProductDatas['incrementBy']) {
                  this.getData['minQuantity'] += this.getProductDatas['incrementBy'] - 1;
              } else {
                  this.getData['minQuantity'] += this.getProductDatas['incrementBy'];
              }
              let bodyObj = {
                  "getChange": this.getData,
                  "getId": this.getProductDatas['id']
              };
              // console.log('bodyObj', bodyObj);
              // let bodyObj = this.getData;
              this.changeQty(bodyObj, this.getProductDatas['id']); //Update data based on responce
              this.change.emit(bodyObj);
          }
      }
  }
  newMessage() {
          this.sharedServiceService.changeMessage("Hello from Sibling")
      }
      /**
       * 
      @Output() sendProductId = new EventEmitter<string>();
      public productId="BM00D";
      public getProductData:any;
      increment(){
        this.sendProductId.emit(this.productId);    
          this.sharedServiceService.getProductDatas.subscribe(
            data => {
            this.getProductData = data;
            console.log('this.getProductData', this.getProductData);
          });    
        }
      */
      /**
       * @Output(): it is use to send data from child to parents
       * @Input(): it is use to send data from parent to child
       */
      //@Output() sendProductId = new EventEmitter<string>();
      //@Input() getProductDatas;
      /** 
      increment(){
      this.sendProductId.emit(this.productId); 
      if(this.getProductDatas['minQuantity']<this.getProductDatas['incrementBy']){
        this.getProductDatas['minQuantity'] += this.getProductDatas['incrementBy']-1;
        }else{
          this.getProductDatas['minQuantity'] += this.getProductDatas['incrementBy'];
        }
        let bodyObj = this.getProductDatas;
          this.changeQty(bodyObj, this.getProductDatas['id']);

      }*/

  /**
   * 
    @Output() sendProductId = new EventEmitter<string>();
    public productId="BM00D";
    public getProductData:any;
    increment(){
      this.sendProductId.emit(this.productId);    
        this.sharedServiceService.getProductDatas.subscribe(
          data => {
          this.getProductData = data;
          console.log('this.getProductData', this.getProductData);
        });    
      }
  */
  /**
   * @Output(): it is use to send data from child to parents
   * @Input(): it is use to send data from parent to child
   */
  getSingleUserDetailsData(productCode) {
      this.studentserviceService.get_Data(productCode)
          .subscribe(
              data => {
                  this.getData = data;
              }
          );
  }
  increment() {
          this.sendProductId.emit(this.productId); // send to Parent Component  
      }
      /**
       * 
       * 
       */
  changeQty(studentinfoData: object, productCode) {
      this.studentserviceService.update_user_data(studentinfoData, productCode)
          .subscribe(
              data => {}
          );
  }
}