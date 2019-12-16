import {
    Component,
    OnInit,
    TemplateRef,
    ViewContainerRef,
    ElementRef,
    AfterViewChecked,
    ViewChild,
    Directive,
    Input,
    Output,
    EventEmitter,
    OnChanges
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {
    Router,
    NavigationEnd,
    ActivatedRoute
} from '@angular/router';
import {
    Title
} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {
    User
} from '../service/user';
import {
    StudentService
} from '../service/student.service';
import {
    CarouselserviceService
} from '../service/carouselservice.service';
import {
    HeightserviceService
} from '../service/heightservice.service';
import {
    CarouseldirectiveDirective
} from '../directive/carouseldirective.directive';
import 'rxjs/add/observable/throw';
import {
    Observable
} from 'rxjs/Observable';
import {
    BsModalService
} from 'ngx-bootstrap/modal';
import {
    BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {
    Subject
} from 'rxjs/Subject';
import { NumberSymbol } from '@angular/common/src/i18n/locale_data_api';
/** confirm method is call when we click on 'no' 
 */
@Component({
        selector: 'app-right-box',
        templateUrl: './right-box.component.html',
        styleUrls: ['./right-box.component.css']

    })
    /**
     * A class representing a StudentDetailsComponent
     * @class  StudentDetailsComponent
     */
export class RightBoxComponent implements OnInit {
    public checkConfirmationData: {} = {};
    public checkConfirmationDataArray = [];
    public UltraTaxArrayData = [];
    public FixedArrayData = [];
    public FixeArrayData = [];
    public checkConfirmation: any
    public productFamilies = {};
    /*** Cod for Another */
    counterValue: any;
    selectedFilterDepth: object;
    selectedAllowanceDepth: object;
    selectedfilterVelocity: object;
    filterData: Array < any > ;
    selectedfilterDepthData;
    selectedVelocityName;
    selectedfilterAllowance;
    studentData;
    paramRoute: any;
    studentDataLength: number;
    disableFlag: boolean = false;
    filterDepthData = [{
        name: "depth1"
    }, {
        name: "depth2"
    }, {
        name: "depth3"
    }, {
        name: "depth4"
    }];
    filterAllowance = [{
        name: "Allowance1"
    }, {
        name: "Allowance2"
    }, {
        name: "Allowance3"
    }, {
        name: "Allowance4"
    }];
    filterVelocity = [{
        name: "Velocity1",
        age: "12"
    }, {
        name: "Velocity2",
        age: "12"
    }, {
        name: "Velocity3",
        age: "12"
    }, {
        name: "Velocity4",
        age: "12"
    }];
    items = [{
        name: 'Edward',
        value: 21
    }, {
        name: 'Sharpe',
        value: 37
    }, {
        name: 'And',
        value: 45
    }, {
        name: 'The',
        value: -12
    }, {
        name: 'Magnetic',
        value: 13
    }, {
        name: 'Zeros',
        value: 37
    }];
    grouperArray = [{
        name: 'Jean',
        lastname: 'Rodrigues',
        points: 30
    }, {
        name: 'Sara',
        lastname: 'Hope',
        points: 30
    }, {
        name: 'Igor',
        lastname: 'Leroy',
        points: 25
    }, {
        name: 'Foo',
        lastname: 'Bar',
        points: 55
    }];
    nestedArray: any;
    finalNestedData: any;
    public canIncrement: boolean = false;
    public canDecrement: boolean = false;
    public maxValue: number = 20;
    @Input() minValue: number = 4;
    public maxQuantity: number = 4;
    public minQuantity: number = 1;
    @Output() update = new EventEmitter();
    validName: boolean = true;
    private factArray:Array<number>=[];
    private fibonacciArray=[0,1];
    /** paramRoute variable is use to find the param of URL */
    /** studentDataLength variable is use to store the length student data length */
    /**
     ** Create a point.
     ** @param router - this create instance of Router.
     ** @param activatedRoute - this create instance of ActivatedRoute.
     ** @param titleService - this create instance of Title.
     ** @param studentService - this create instance of studentService.
     */
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private studentService: StudentService
    ) {
        this.titleService.setTitle(activatedRoute.snapshot.routeConfig ? activatedRoute.snapshot.routeConfig.path : 'NA');
        this.selectedfilterDepthData = this.filterDepthData[0];
        this.selectedfilterAllowance = this.filterAllowance[0];
        this.selectedVelocityName = this.filterVelocity[0];
        this.filterData = [
            this.selectedfilterDepthData,
            this.selectedfilterAllowance,
            this.selectedVelocityName
        ];
        this.studentService.prodDetails().subscribe(res => {
            this.counterValue = res;
        });
    }
    ngOnInit() {
            this.nestedData();
            this.getStudentsDetalis();
            this.singleSortingArrayData();
            this.multiSortingData();
            this.getConfirmation();
            console.log('this.FactorialMethod(6)', this.FactorialMethod(6));
          //  console.log('this.Fibonaccimethod(6)', this.Fibonaccimethod(5));
            this.Fibonaccimethod(5);
            this.parentNestedData();
        }
        /**
         * Fibonacci: method
         * Fibonacci numbers using recursion 0 1 1 2 3 5 8 13 21
         */
        Fibonaccimethod(num){        
            for (let i = 2; i <= num; i++) {
                this.fibonacciArray[i]=this.fibonacciArray[i-2]+this.fibonacciArray[i-1];                        
              }          
              console.log('s--', this.fibonacciArray);
             }
        /**
         * FactorialMethod: method
         * Factorial using recursion 6! = 720; 6*5*4*3*2*1
         */
        FactorialMethod(num){
          //  console.log('num', num);
            if(num<0){
                return 0;
            } else if(num === 0){
                return 1;
            }else{
               return num*this.FactorialMethod(num-1); // this is concept of Recursion means call same function;
            }
        }
        /**
         * Below Code using recursive method concept to filter nested array method
         * @param arr :It include all array data
         */  
   /** arrayIsIncluded(arr: any[]) {
        const filteredArray = arr.filter(item => {
            if (!item.hasOwnProperty('isInclude')) {
                return false;
            } else if (item.isInclude) {
                return true;
            } else {
                return false;
            }
        });
        return filteredArray;
    } */
    /** arrayIsIncluded(arr: any[]) {
        const filteredArray = arr.filter(item => {
            if (item.isInclude) {
                return true;
            }
        });
        return filteredArray;
    }*/

    arrayIsIncluded(arr: any[]) {
        const filteredArray = arr.filter((item) => {
            if (item.isInclude) {
                return true;
            }
        });
        return filteredArray;
    }
    recursionIncluded(arr: any[]) {
            arr.forEach(item => {
                if (item.hasOwnProperty('subProduct') && item.subProduct.length > 0) {
                    item.subProduct = this.arrayIsIncluded(item.subProduct);
                    this.recursionIncluded(item.subProduct);        
                }
            });
            return arr;
        }

        /**
         * below code use to generate data into parent-child
         */
        public checkConfirmationDataa: {} = {};
        public checkConfirmationDataArraya = [];

        recursionIncludedd(arr: any[]) {
           
            arr.forEach(item => {
                console.log('item--', item);
                 if(item.isInclude ==true){
                    this.checkConfirmationDataArraya.push(item);              
                 }
                if (item.hasOwnProperty('subProduct') && item.subProduct.length > 0) {
                    item.subProduct = this.arrayIsIncluded(item.subProduct);             
                    this.recursionIncludedd(item.subProduct);        
                }
            });
           return arr;
        }
        public daaaa=[];
        parentNestedData() {
            this.studentService.getNestedArray().subscribe(data => {
                this.nestedArray = data.renewedItems;
                let ddd =this.recursionIncludedd(this.nestedArray);
                this.checkConfirmationDataArray.push(this.checkConfirmationDataa);
                  let dd= this.checkConfirmationDataArraya;
                  console.log('ddd',ddd);   
                  console.log('dd',dd);            
                //this.checkConfirmationDataa['name'] = dd[0].productName; 

                for(let j = 0; j < ddd.length; j++){
                    this.checkConfirmationDataa['name'] = ddd[j].productName;
                    let sub= ddd[j].subProduct;
                    for(let i = 0; i < sub.length; i++){
                        if (!this.checkConfirmationDataa['children']) {
                            this.checkConfirmationDataa['children'] = [];
                        }
                        this.checkConfirmationDataa['children'][i] = {};
                        this.checkConfirmationDataa['children'][i].productId = sub[i].subProduct.productId;
                        this.checkConfirmationDataa['children'][i].productName = sub[i].subProduct.productName;                 
                    }; 
                    this.daaaa.push(this.checkConfirmationDataa);
                    this.checkConfirmationDataa={};           
                };

                  /** for(let i = 1; i < dd.length; i++){
                      if (!this.checkConfirmationDataa['children']) {
                          this.checkConfirmationDataa['children'] = [];
                      }
                      this.checkConfirmationDataa['children'][i-1] = {};
                      this.checkConfirmationDataa['children'][i-1].productId = dd[i].productId;
                      this.checkConfirmationDataa['children'][i-1].productName = dd[i].productName;                 
                  };   */

            });
        }


















        /**
         * Below code call service to get getNestedArray Data
         */
    nestedData() {
            this.studentService.getNestedArray().subscribe(data => {
                this.nestedArray = data.renewedItems;
                this.finalNestedData = this.recursionIncluded(this.nestedArray);
                /** this.finalNestedData.forEach(item => {
                    if(item.productName === 'UltraTax CS Local Area Network'){
                        item.productName ='';
                    }
                });*/
               // console.log('this.finalNestedData', this.finalNestedData);
                let newArr = this.finalNestedData.map((val, index, arr) => {
                    // Write logic here                
                  });
                //  console.log('this.newArr', newArr);

                  var reformattedArray = this.finalNestedData.map(obj =>{ 
                   /** if(typeof obj.productName === 'undefined'){
                        delete obj.productName;
                    }*/
                    if(obj.productName == 'UltraTax CS Local Area Network'){
                        //obj.productName ='';
                        delete obj.productName;
                    }
                    return obj;
                 });
                 console.log('this.reformattedArray', reformattedArray);            
                  /** below code is to check parent flage */
                   // this.nestedArray = this.arrayIsIncluded(data.renewedItems);
                   //this.finalNestedData = this.recursionIncluded(this.nestedArray);
              //  console.log(this.finalNestedData);
            });
        }
        /**
         * Below code is  Single Sorting Array Data
         */
    singleSortingArrayData() {
        // sort by value  Sorting objects by number property
        this.items.sort(function(a, b) {
            return a.value - b.value;
        });
        // sort by name  Sorting objects by string property
        this.items.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }
    multiSortingData() {
        this.grouperArray.sort(function(a, b) {
            var aSize = a.name;
            var bSize = b.name;
            var aLow = a.points;
            var bLow = b.points;
            // console.log(aLow + " | " + bLow);
            if (aSize == bSize) {
                return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
            } else {
                return (aSize < bSize) ? -1 : 1;
            }
        });
    }
    getConfirmation() {
        /** Method-1 */
        this.studentService.getConfirmationData().subscribe(data => {
            this.checkConfirmation = data.confirmations;
            const result = this.checkConfirmation.filter(word => word.refType === 1);
            result.forEach(item => {
                item.renewedItems.forEach(item => {
                    if (this.productFamilies.hasOwnProperty(item.productFamily)) {
                        this.productFamilies[item.productFamily].push(item);
                    } else {
                        this.productFamilies[item.productFamily] = [];
                        this.productFamilies[item.productFamily].push(item);
                    }
                });
            });
            this.parseConfirmationArray(this.productFamilies);
        });
        /** Method-2 */
        /**this.studentService.getConfirmationData().subscribe(data => {
            let productFamilies = {};
            this.checkConfirmation = data.confirmations;          
            this.checkConfirmation.filter(elem =>{
                if (elem.refType == 1) {
                    elem.renewedItems.forEach(item =>{
                        if (productFamilies.hasOwnProperty(item.productFamily)) {
                            productFamilies[item.productFamily].push(item);
                        } else {
                            productFamilies[item.productFamily] = [];
                            productFamilies[item.productFamily].push(item);
                        }
                    });
                    this.parseConfirmationArray(productFamilies);
                    }
                })           
            });**/
        /** Method-3 */
        /** this.studentService.getConfirmationData().subscribe(data => {
            let productFamilies = {};
            this.checkConfirmation = data.confirmations; 
            this.checkConfirmation .forEach(item =>{            
                if (item.refType == 1) {
                    let renewedItemsArray = item.renewedItems;
                    item.renewedItems.forEach(item =>{
                        if (productFamilies.hasOwnProperty(item.productFamily)) {
                            productFamilies[item.productFamily].push(item);
                        } else {
                            productFamilies[item.productFamily] = [];
                            productFamilies[item.productFamily].push(item);
                        }
                    });
                    this.parseConfirmationArray(productFamilies);
                }
            })
        });*/
        /** Method-4 */
        /**this.studentService.getConfirmationData().subscribe(data => {
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
                    console.log('productFamilies',productFamilies);
                    this.parseConfirmationArray(productFamilies);
                }
            }
        });**/
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

    convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }
    exportCSVFile(headers, items, fileTitle) {
        if (headers) {
            items.unshift(headers);
        }
        var jsonObject = JSON.stringify(items);
        var csv = this.convertToCSV(jsonObject);
        var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    downLoad() {
            if (this.filterVelocity.length > 0) {
                var headers = {
                    name: 'User Name',
                    age: 'User Age'
                };
                var itemsFormatted = [];
                this.filterVelocity.forEach((item) => {
                    itemsFormatted.push({
                        name: item.name,
                        age: item.age
                    });
                });
                var fileTitle = 'orders';
                this.exportCSVFile(headers, itemsFormatted, fileTitle);
            }
        }
        /**
         ** getStudentsDetalis method
         */
    getStudentsDetalis() {
            this.studentService.getStudentData()
                .subscribe(data => {
                    this.studentData = data;
                    //  this.studentData = JSON.parse('[' + data + ']');
                    this.studentDataLength = this.studentData.length;
                }); // no need to define error here because error already handle inside service file
        }
        /**
         * 
         * @param selectedFilterDepth : select selected option fron select box and push into array.
         */
    onFilterDepthChange(selectedFilterDepth) {
            //console.log(selectedFilterDepth);
            this.selectedFilterDepth = selectedFilterDepth;
            // splice(position, numberOfItemsToRemove, item)
            this.filterData.splice(0, 1, this.selectedFilterDepth);
        }
        /**
         * 
         * @param selectedAllowance :  select selected option fron select box and push into array.
         */
    onFilterAllowanceChange(selectedAllowance) {
            this.selectedAllowanceDepth = selectedAllowance;
            // splice(position, numberOfItemsToRemove, item)
            this.filterData.splice(1, 1, this.selectedAllowanceDepth);
            // console.log(this.filterData);
        }
        /**
         * 
         * @param selectedfilterVelocity :  select selected option fron select box and push into array.
         */
    onVelocityChange(selectedfilterVelocity) {
            this.selectedfilterVelocity = selectedfilterVelocity;
            // splice(position, numberOfItemsToRemove, item)
            this.filterData.splice(2, 1, this.selectedfilterVelocity);
            // console.log(this.filterData);
        }
        /**
         * 
         * 
         * 
         */
    canCounterIncrement() {
        if (typeof(this.maxValue) !== 'undefined' && typeof(this.maxValue) === 'number') {
            this.canIncrement = this.counterValue.quantity < this.maxQuantity;
        }
    }
    canCounterDecrement() {
        if (typeof(this.minValue) !== 'undefined' && typeof(this.minValue) === 'number') {
            this.canDecrement = this.counterValue.quantity > this.minQuantity;
        }
    }
    increment() {
            if (this.canIncrement) {
                if (this.counterValue['invoiceNo']) {
                    this.studentService.getPriceList(this.counterValue['productId']).subscribe(res => {
                        if (this.counterValue['quantity'] < res['incrementBy']) {
                            this.counterValue['quantity'] += res['incrementBy'] - 1;
                        } else {
                            this.counterValue['quantity'] += res['incrementBy'];
                        }
                    });
                } else {
                    this.counterValue.quantity += 1;
                }
            }
        }
        /**
         * 
         * 
         */
    decrement() {
        if (this.canIncrement) {
            if (this.counterValue['invoiceNo']) {
                this.studentService.getPriceList(this.counterValue['productId']).subscribe(res => {
                    if (this.counterValue['quantity'] === res['incrementBy']) {
                        this.counterValue['quantity'] -= res['incrementBy'] - 1;
                    } else {
                        this.counterValue['quantity'] -= res['incrementBy'];
                    }
                });
            } else {
                this.counterValue.quantity--;
            }
        }
    }
}