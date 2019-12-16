import { LeftBoxComponent } from './../left-box/left-box.component';
import {
    Component,
    OnInit,
    NgModule,
    CUSTOM_ELEMENTS_SCHEMA,
    TemplateRef,
    ViewChild,
    ElementRef,
    ViewChildren,
    QueryList
    } from '@angular/core';
    import {
    FormBuilder,
    FormGroup,
    Validators,
    ValidatorFn,
    FormArray,
    FormControl
    } from '@angular/forms';
    import {
    Router,
    NavigationEnd,
    ActivatedRoute
    } from '@angular/router';


    import {Title} from '@angular/platform-browser';



    import 'rxjs/add/operator/filter';
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/mergeMap';
    import {
    User,CryptoJSData
    } from '../service/user';
    import {
    StudentService
    } from '../service/student.service';
    import {
    ValidationService
    } from '../service/validation.service';
    import {
    Observable
    } from 'rxjs/Observable';
    import {
    BsModalService,BsModalRef
    } from 'ngx-bootstrap/modal';
    
    import {
    Subject
    } from 'rxjs/Subject';
    import 'rxjs/add/observable/of';
    import 'rxjs/add/observable/throw';
    import 'rxjs/add/operator/debounceTime';
    import 'rxjs/add/operator/distinctUntilChanged';
    import 'rxjs/add/operator/do';
    import 'rxjs/add/operator/switchMap';
    import * as CryptoJS from 'crypto-js';
    import { BsModalComponent } from '../bs-modal/bs-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { SharedServiceService } from '../service/shared-service.service';
import { IpAddressService } from '../ip-address.service';
import { conformToMask } from 'angular2-text-mask';
import { debug } from 'util';
   // import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

    //import CryptoJS from 'crypto-js';
    /**
    ** Pass in the name for the HTML class selector 
    <app-student-registration></app-student-registration>
    ** Set the styles of our component using the styles options
    ** Define our component's using the templateUrl option to access an external file. 
    **/
    @Component({
    selector: 'app-student-registration',
    templateUrl: './student-registration.component.html',
    styleUrls: ['./student-registration.component.css']
    })
    export class StudentRegistrationComponent extends BsModalComponent implements OnInit {
    showMask = true;
    value = '';
    public mask;
    //public masks = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    //public masks = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, 'Ext', /\d/, /\d/, /\d/, /\d/];
   
    filterDepthData: Array < object >= [{
    name: "depth1"
    }, {
    name: "depth2"
    }, {
    name: "depth3"
    }, {
    name: "depth4"
    }];
    selectedFilterDepth: string;
    modalRef: BsModalRef;
    bsModalRef: BsModalRef;
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    countryData = [];
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    stateData = [];
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    cityData = [];
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    finalCSCData = [];
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    selectedState: string;
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    selectedCountry: string;
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
    selectedCity: string;
    /**
    ** create genderList object and declare it as array string and Add genderList object to the ngOnInit function .In genderList array object set array data.	
    */
    genderList: string[];
    /**
    ** create departmentName object and declare it as array string and Add departmentName object to the ngOnInit function.In departmentName array object set array data.
    */
    departmentName: string[];
    /**
    **	Create signupForm and set this as a FormGroup and use this inside the onFormSubmit function .In signupForm function set all form data with validation.
    */
    signupForm: FormGroup;
    selectForm: FormGroup;
    myForm: FormGroup;
    formUpload: FormGroup;
    formCheckBox: FormGroup;
    loading: boolean = false;
    @ViewChild('fileInput') fileInput: ElementRef;
    public inputNumber:any = 9654132611;
    public mobile = 9654132611;
    /**
    **	create User interface and set type of all properties object.
    */
    private user: User;
    /**
    **	create isSuccess object and declare it as boolean  and Add isSuccess object to the onFormSubmit function
    */
    isSuccess: boolean = false;
    /**
    ** constructor method is use to create instance of the dependency service and moudle
    */
   private thousands_separator:string;
    public finalData;
    public finalData2;
    public finalData3;
    /**public orders = [
    { id: 100, name: 'Any', "isCheck": true },
    { id: 200, name: 'order 2',  "isCheck": false },
    { id: 300, name: 'order 3',  "isCheck": false },
    { id: 400, name: 'order 4',  "isCheck": false }
    ];*/
    public options = [
    {   key: 'p1',
    id: 100,
    name: 'Any',
    isCheck: true
    },
    {   key: 'p1',
    id: 200,
    name: 'order 23',
    isCheck: false
    },
    {   key: 'p1',
    id: 300,
    name: 'order 33',
    isCheck: false
    }
    ];
    public options2 = [
    {   key: 'p2',
    id: 100,
    name: 'Any',
    isCheck: true
    },
    {   key: 'p2',
    id: 200,
    name: 'order 232',
    isCheck: false
    },
    {   key: 'p2',
    id: 300,
    name: 'order 231',
    isCheck: false
    }
    ];
    public optionsRadio = [
    {
    key: 'p3',    
    id: 100,
    name: 'Any'
    },
    {   key: 'p3',
    id: 200,
    name: 'radio1'
    },
    {   key: 'p3',
    id: 300,
    name: 'radio2'
    }
    ];
    public ordersCheck3 = [{
    id: 100,
    name: 'Any',
    isCheck: true
    },
    {
    id: 200,
    name: 'order 23',
    isCheck: false
    }
    ];
    public ordersCheck = [{
    id: 100,
    name: 'Any',
    isCheck: true
    },
    {
    id: 200,
    name: 'order 2',
    isCheck: false
    }
    ];
    public ordersCheck2 = [{
    id: 100,
    name: 'Any',
    isCheck: true
    },
    {
    id: 200,
    name: 'book 2',
    isCheck: false
    }
    ];
    public key1: any;
    public iv1: any;
    public plain_text: string;
    public encrypted_text: string;
    public payment_var: string;
    public decrypted_text: string;
    constructor(
        private ipAddressService: IpAddressService,
        public sharedServiceService: SharedServiceService,
        private cryptoJSData: CryptoJSData,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,

    private titleService: Title,


    
    public  studentserviceService: StudentService) {
        super(studentserviceService);


    this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);


    this.key1 = CryptoJS.enc.Hex.parse("d13484fc2f28fd0426ffd201bbd2fe6ac213542d28a7ca421f17adc0cf234381");
    this.iv1  = CryptoJS.enc.Hex.parse("2811da22377d62fcfdb02f29aad77d9e");
    this.plain_text = '';
    this.payment_var = '';
    this.encrypted_text = '';
    this.decrypted_text = '';
    this.thousands_separator = ',';
    }
    public isOpenBox: boolean =false;
    openBox(){
    this.isOpenBox =!this.isOpenBox;
    }
    /** 
    ** Create ngOnInit() and define genderList and departmentName inside this to load array data on page load
    **/
    //public isChecked;
    public breadcrumbLocation:any;
    public defaultChoiceRadio;
    public myModel = '';
   public preValue={};
  
    selectionRadio(event){
    console.log('event--><><><', event.target);
    this.defaultChoiceRadio= event.target.id;
    }
    ngOnInit() {

        this.getDataArray();
        console.log ('daas',  this.borrowerList);
        let finalObj = {};
        let keyArray1 = [];
        let keyArray2 = [];     
      
        //let paramObject={SortByEndingSoonest: true, auctionProgram: "", propertyType: ""}; // 2
      let paramObject={SortByEndingSoonest: true, auctionProgram: "TPS", propertyType: "Single Family Home"}; //3
       // let paramObject={SortByEndingSoonest: true}; //--1
        let getListingSearchParams = { SortByEndingSoonest: "true", auctionProgram: "TPS", propertyType: "Single Family Home", saveSearch: "1" };
        let getListingSearch = getListingSearchParams;
       
        if (Object.keys(paramObject).length<=1) {
            for (let key1 in getListingSearchParams) {
                keyArray1.push(key1);
            }
            for (let key in paramObject) {
                console.log('key--->>>', key);
                keyArray2.push(key);
            }
            if (keyArray1.length > 0 && keyArray2.length>0) { 
                console.log('keyArray1', keyArray1);
                console.log('keyArray2', keyArray2);
                keyArray1.forEach((item)=>{
                    console.log('item', item);
                    let index = keyArray2.indexOf(item);
                    console.log('index',  index);
                    if (index === -1) {
                        if(item != 'saveSearch'){
                            delete getListingSearchParams[item];
                        }                      
                        console.log('getListingSearchParams', getListingSearchParams);
                    }
                    else{
                    }
                });                 
            }            
      //  const mergedPayload = Object.assign({}, getListingSearchParams, paramObject, urlEndPartParams);
        }else{
            for (let key3 in paramObject) {
                console.log('key--->>>', key3);
                if(paramObject[key3]===""){
                    delete getListingSearchParams[key3];
                    delete paramObject[key3];
                }
                if(paramObject[key3]!==""){
                    //const mergedPayload = Object.assign({}, getListingSearchParams, paramObject, urlEndPartParams);
                }
                console.log('getListingSearchParams', getListingSearchParams);
                console.log('paramObject', paramObject);
            }
             //  const mergedPayload = Object.assign({}, getListingSearchParams, paramObject, urlEndPartParams);
        }
       
       
        
        console.log('this.getListingSearchParams()', getListingSearch);
      //  const mergedPayload = Object.assign({}, getListingSearchParams, paramObject, urlEndPartParams);








     let completeData= {"city":"Dallas","state":"TX","lat":32.7766642,"long":-96.79698789999998,"auctionProgram":"CWCOT,Traditional,Total Debt,BULK","propertyType":"Multi Family,Duplex,Land","SortByEndingSoonest":true};
      this.preValue= {"city":"Dallas","state":"TX","lat":32.7766642,"long":-96.79698789999998,"auctionProgram":"CWCOT,Traditional,Total Debt,BULK","propertyType":"Multi Family,Duplex,Land","SortByEndingSoonest":true};      
      if (Object.keys(this.preValue).length != Object.keys(completeData).length) {
            this.preValue = completeData;
          //  return await this.searchListings(completeData);
        } else if (Object.keys(this.preValue).length == Object.keys(completeData).length) {           
                for (let key in this.preValue) {
                    for (let key1 in completeData) {
                        if(this.preValue !=undefined && completeData !=undefined){
                            let previousValue = (this.preValue[key].toString()).split(',');
                            let currentValue = (completeData[key1].toString()).split(',');
                            previousValue.forEach((item) => {
                                currentValue.forEach((item2) => {
                                if(item == item2){
                                    return;
                                }else{
                                    //return await this.searchListings(completeData);
                                }
                                });
                            });
                          }
                    }
                }          
        }
        else {
            this.preValue = completeData;
           //return await this.searchListings(completeData);
        }













this.GetFormattedFirstData();
        console.log("ip");
      /**  this.ipAddressService.getIpAddress().subscribe(data => {
          console.log(data);
        });**/



    this.steps ='step1';
    this.defaultChoiceRadio= "empid";
    /*******below code not working*****************************/     
    let text = '9654132611';
    var encrypted = CryptoJS.AES.encrypt(text, this.key1, {
    iv: this.iv1,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding
    });
    this.encrypted_text = CryptoJS.enc.Hex.stringify(encrypted.ciphertext);
    this.payment_var = "https://endpoint" + this.encrypted_text;
    console.log('this.encrypted_text-->>', this.encrypted_text);
    console.log('this.payment_var-->>', this.payment_var);
    let decrypted1 = CryptoJS.AES.decrypt(this.encrypted_text, this.key1, {
    iv: this.iv1,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding
    }).toString();
    this.decrypted_text = decrypted1;
    let descrString11 = decrypted1.toString(CryptoJS.enc.Utf8);
    console.log('descrString11=', descrString11);
    console.log('this.decrypted_text-->>', this.decrypted_text);
    /**************************************************** */
    this.getCountryData();
    this.genderList = ['Male', 'Female', 'Others'];
    this.departmentName = ['Department of Engineering', 'Department of Agriculture', 'Accounting Office', 'Tresurer Office'];
    this.studentFormData();
    this.getNewStudents();
    this.selectedData();
    this.createForm();
    this.createFormCheck();
    this.defaultChoice=this.optionsRadio[0].id;
    this.createStep1();
    // this.defaultChoiceRadio="1";
    /********Below code is woking******************************* */
    // let base64Key = CryptoJS.enc.Hex.parse("2b7e151628aed2a6abf7158809cf4f3c");
    // let iv = CryptoJS.enc.Hex.parse("3ad77bb40d7a3660a89ecaf32466ef97");
    // this.key1 = CryptoJS.enc.Hex.parse("d13484fc2f28fd0426ffd201bbd2fe6ac213542d28a7ca421f17adc0cf234381");
    // this.iv1  = CryptoJS.enc.Hex.parse("2811da22377d62fcfdb02f29aad77d9e");
    console.log('uiui', this.cryptoJSData.base64Key);
    
    let base64Key = CryptoJS.enc.Hex.parse(this.cryptoJSData.base64Key);
    let iv = CryptoJS.enc.Hex.parse(this.cryptoJSData.iv);
    let source_string = '9654132611';
    console.log('source String = ' + source_string);
    var encrypted = CryptoJS.AES.encrypt(source_string, base64Key,{ iv: iv });
    console.log('encrypted = ' + encrypted);
    let ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
    console.log('ciphertext =>>>' + ciphertext);

    let cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    });
    let decrypted = CryptoJS.AES.decrypt(
    cipherParams,
    base64Key,
    { iv: iv });
    let descrString = decrypted.toString(CryptoJS.enc.Utf8);
    console.log('decrypted=>>>>'+ descrString);

    this.sharedServiceService.listenTitle1().subscribe(shareTitle => {
        this.breadcrumbLocation = shareTitle;
       //
    });
    }
   /**
    update bredcrum linkk
   
   */ 
    public breadcrumbLocation1 = {city: "Moon", state: "UP",
    postalCode:'12345',county:'India', text:'abhinav'};
    getSomeClass1(){
        this.sharedServiceService.filterTitle1(this.breadcrumbLocation1); 
      }
      onBreadcrumbClick(event){
        if(event.target.className =='activeLink'){
            alert(event.target.className);
        }
    }
    ngAfterViewChecked(): void {
            this.childCount();
        } 
        
        childCount() {
        let childlen = document.getElementById("breadcrum").childElementCount;           
        let children = document.getElementById("breadcrum").children;
        if(childlen>2){
            for (let i = 1; i < childlen-1; i++) {
                children[i].className ="activeLink"
            }
          }
        }

/**
 * Below methos use to get DOM changes update  best method
 * https://stackblitz.com/edit/angular-mutationobserver-example?file=app%2Fapp.component.html
 * https://nitayneeman.com/posts/listening-to-dom-changes-using-mutationobserver-in-angular/
 */
        onDomChange(event): void {
            console.log(event);
             console.log(event.target.childElementCount);
                if(event.target.childElementCount>2){
                    for (let i = 1; i < event.target.childElementCount-1; i++) {
                        event.target.children[i].className ="activeLink"
                    }
                  } 
             }   
     /******activeLink****className*****length******innerText****************************************************** */
    getSomeClass(item){
    this.view= item;
    }
    public view;
   
    public optionsChecked = [];  
    public optionsChecked2 = []; 
    currentMessage: any;
    results: any;
    public defaultChoice: any;
    public optionsRadioChecked:any;
    public objData:{}={};
    public filteredData:any;
    onSelectionRadio(option, event){
    let elementValue = event.target.value;  
    if(option.name == 'Any'){
    this.optionsRadioChecked='';
    }else{
    this.optionsRadioChecked=option.name;
    }
    this.checkAny(option.key, this.optionsRadioChecked);
    }
    updateCheckedOptions(option, event) {
    let index = this.optionsChecked.indexOf(event.target.value);
    let elementValue = event.target.value;  
    if(elementValue == 'Any'){
    this.filteredMethod(this.options);       
    if (this.filteredData != undefined) {
    this.options =  this.filteredData;
    this.optionsChecked = [];
    }
    }else{
    // below is second methd
    if (index === -1) {
    // val not found, pushing onto array
    this.optionsChecked.push(elementValue);
    if (this.optionsChecked.length > 0) {
    this.options[0].isCheck = false;
    }
    } else {
    // val is found, removing from array
    this.optionsChecked.splice(index, 1);
    if (this.optionsChecked.length > 0) {
    this.options[0].isCheck = false;
    } else {
    this.options[0].isCheck = true;
    }                       
    }  
    }
    this.checkAny(option.key, this.optionsChecked);
    }  
    updateCheckedOptions2(option, event) {
    let index = this.optionsChecked2.indexOf(event.target.value);
    let elementValue = event.target.value;  
    if(elementValue == 'Any'){
    this.filteredMethod(this.options2);       
    if (this.filteredData != undefined) {
    this.options2 =  this.filteredData;
    this.optionsChecked2 = [];
    }
    }else{
    if (index === -1) {
    // val not found, pushing onto array
    this.optionsChecked2.push(elementValue);
    if (this.optionsChecked2.length > 0) {
    this.options2[0].isCheck = false;
    }
    } else {
    // val is found, removing from array
    this.optionsChecked2.splice(index, 1);
    if (this.optionsChecked2.length > 0) {
    this.options2[0].isCheck = false;
    } else {
    this.options2[0].isCheck = true;
    }
    } 
    } 
    this.checkAny(option.key, this.optionsChecked2);
    } 
    filteredMethod(checkValue){
    this.filteredData = checkValue;
    if (this.filteredData != undefined) {
    this.filteredData[0].isCheck = true;
    this.filteredData.forEach((element, index) => {
    if (this.filteredData[index + 1] != undefined) {
    this.filteredData[index + 1]['isCheck'] = false;
    }
    })				
    }
    }
    checkAny(key,optionsChecked) {  
    let checkedData;  
    if(Array.isArray(optionsChecked)){
    checkedData = optionsChecked.join(',');
    }else{
    checkedData = optionsChecked;
    }
    this.objData[key]= checkedData;
    console.log('checkedData---', this.objData );                
    this.applyFilterData( this.objData);
    }
    applyFilterData(optionsChecked) {     
    this.studentserviceService.searchProductDetail(optionsChecked);
    }
    checkReset() {
    for (let key in this.objData) {
    this.objData[key] ="";
    }
    console.log('this.objData====>>>', this.objData);
    this.filteredMethod( this.options2);
    this.filteredMethod( this.options);
    this.filteredMethod( this.options);
    this.applyFilterData(this.objData);
    }
    applyRadioFilterData(optionsRadio) {
    this.studentserviceService.searchProductDetail(optionsRadio);
    }
    applyData() {
    this.applyRadioFilterData(this.optionsRadioChecked);
    this.applyFilterData(this.optionsChecked);
    }
    resetsData() {
    this.defaultChoice=this.optionsRadio[0].id;
    this.optionsRadioChecked=this.optionsRadio[0].name;
    //this.checkReset(this.optionsChecked);
    this.applyRadioFilterData(this.optionsRadioChecked);
    }
    /************************************************************************************************/	
    changeCheck3() {
    let arrayData = this.ordersCheck3;
    for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i].isCheck == true) {
    this.ordersCheck[0].isCheck = false;
    break;
    } else if (arrayData[i].isCheck == false) {
    this.ordersCheck[0].isCheck = true;
    } else {
    this.ordersCheck[0].isCheck = true;
    break;
    }
    }
    this.finalData3 = this.ordersCheck3;
    }
    changeCheck() {
    let arrayData = this.ordersCheck;
    for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i].isCheck == true) {
    this.ordersCheck[0].isCheck = false;
    break;
    } else if (arrayData[i].isCheck == false) {
    this.ordersCheck[0].isCheck = true;
    } else {
    this.ordersCheck[0].isCheck = true;
    break;
    }
    }
    this.finalData = this.ordersCheck;
    }
    changeCheck2() {
    let arrayData = this.ordersCheck2;
    for (let i = 1; i < arrayData.length; i++) {
    if (arrayData[i].isCheck == true) {
    this.ordersCheck2[0].isCheck = false;
    break;
    } else if (arrayData[i].isCheck == false) {
    this.ordersCheck2[0].isCheck = true;
    } else {
    this.ordersCheck2[0].isCheck = true;
    break;
    }
    }
    this.finalData2 = this.ordersCheck2;
    }
    resets() {
    let arrayData = this.ordersCheck;
    for (var i = 1; this.ordersCheck.length; i++) {
    if (this.ordersCheck) {
    this.ordersCheck[i].isCheck = false;
    this.ordersCheck[0].isCheck = true;
    }
    }
    this.finalData = this.ordersCheck;
    console.log(this.ordersCheck);
    }
    apply() {
    this.ordersCheck = this.finalData;
    this.ordersCheck2 = this.finalData2;
    console.log(this.ordersCheck);
    console.log(this.ordersCheck2);
    }
    // https://alligator.io/angular/viewchild-access-component/
    /**
    *  CheckBox
    * changeCheck(order){
    console.log('order--', order);
    if(this.ordersCheck){
    this.ordersCheck.map((v, i) =>{
    if(this.ordersCheck[i+1].isChecked == true){
    this.ordersCheck[0].isChecked = false;
    }else if(this.ordersCheck[i+1].isChecked == false){
    this.ordersCheck[0].isChecked = true;
    }
    });
    }
    console.log(this.ordersCheck);
    }
    */
    minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
    .map(control => control.value)
    .reduce((prev, next) => next ? prev + next : prev, 0);
    return totalSelected >= min ? null : {
    required: true
    };
    };
    return validator;
    }
    submit() {
    }
    changeCheckBox(name) {
    //console.log('eeeeeeee',name);
    }
    checkBoxData = [{
    'name': "any",
    "isChecked": false
    },
    {
    'name': "apple",
    "isChecked": true
    },
    {
    'name': "Orange",
    "isChecked": false
    },
    {
    'name': "Red",
    "isChecked": false
    },
    {
    'name': "Pink",
    "isChecked": false
    },
    {
    'name': "Blue",
    "isChecked": false
    }
    ];
    /**
    * Method which will fetch country data and map it to class level object named 'countryData'
    */
    private getCountryData(): void {
    this.studentserviceService.getCountryData() //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    this.countryData = response;
    }, error => {
    console.error("Error deleting food!" + error);
    return Observable.throw(error);
    });
    }
    openModals(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
    }
    /**
    * studentFormData Method which will fetch student form data
    */
    private studentFormData(): void {
    this.signupForm = this.fb.group({
    //firstName: ['', [Validators.required, ValidationService.spaceNotAllow, ValidationService.onlyAlphabetsAllow]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required, ValidationService.spaceNotAllow]],
    userName: ['', Validators.required],
    email: ['', [Validators.required, ValidationService.emailValidator, ValidationService.spaceNotAllow]],
    password: this.fb.group({
    pwd: ['', [Validators.required, Validators.minLength(8)]],
    confirmPwd: ['', [Validators.required, Validators.minLength(8)]]
    }),
    //	mobile: ['', [Validators.required, Validators.minLength(8), ValidationService.spaceNotAllow, ValidationService.onlyIntegerAllow]],
    mobile: ['', [Validators.required, Validators.minLength(8)]],
    gender: ['', [Validators.required, ValidationService.spaceNotAllow]],
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required]
    });
    //	console.log('his.signupForm ', this.signupForm );
    }
    /**
    ** get email() method is use to return valid email to check form validation
    */
    get email() {
    return this.signupForm.get('email');
    }
    /**
    ** get password() method is use to compare the password and to check form validation
    */
    get password() {
    return this.signupForm.get('password');
    }
    /**
    ** get gender() method is use to return gender if selected to check form validation
    */
    get gender() {
    return this.signupForm.get('gender');
    }
    /**
    ** onCountryChange method is use when we select any country from select option and use to get list of all state of selected country.
    ** @param selecteCountry is the selectrd country name
    */
    onCountryChange(selecteCountry: string) {
    this.selectedCountry = selecteCountry;
    this.studentserviceService.getStateData(this.selectedCountry) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    this.stateData = response;
    },
    error => {
    console.error("Error deleting food!" + error);
    return Observable.throw(error);
    }
    );
    }
    /**
    ** onStateChange method is use when we select any state based on selected country from select option and use to get list of all state of selected country.
    ** @param selecteCountry is the selected state name
    */
    onStateChange(selecteState: string) {
    this.selectedState = selecteState;
    this.studentserviceService.getCityData(this.selectedCountry, this.selectedState) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    this.cityData = response;
    },
    error => {
    console.error("Error deleting food!" + error);
    return Observable.throw(error);
    }
    );
    }
    /**
    ** onCityChange method is use when we select any city from select option based on selected country and state and use to get list of all city of selected state.
    ** @param selecteCity is the selectred selecteCity name
    */
    onCityChange(selecteCity: string) {
    this.selectedCity = selecteCity;
    this.studentserviceService.getFinalCSCData(this.selectedCountry, this.selectedState, this.selectedCity) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    this.finalCSCData = response;
    },
    error => {
    console.error("Error deleting food!" + error);
    return Observable.throw(error);
    }
    );
    }
    /***
    * 
    * 
    */
    createForm() {
    this.formUpload = this.fb.group({
    name: ['', Validators.required],
    avatar: null
    });
    }
    createFormCheck() {
    this.formCheckBox = this.fb.group({
    name: ''
    });
    }
    onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
    this.formUpload.get('avatar').setValue({
    filename: file.name,
    filetype: file.type,
    value: reader.result.split(',')[1]
    })
    };
    }
    }
    upload() {
    alert('hi');
    const formModel = this.formUpload.value;
    this.loading = true;
    setTimeout(() => {
    //console.log(formModel);
    alert('done!');
    this.loading = false;
    }, 1000);
    }
    clearFile() {
    this.formUpload.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
    }
    submitdata() {
    const formModel = this.formCheckBox.value;
    console.log('formModel', formModel);
    }
    /***
    * 
    * 
    */
    private selectedData(): void {
    this.myForm = this.fb.group({
    range: ['', [Validators.required]],
    range2: ['', [Validators.required]],
    mobiles: ['', [Validators.required]]
    });
    }
    searchStudents() {
    alert('fdd');
    if (this.myForm.value.range != null) {
    //console.log('this.myForm.value.range', this.myForm.value);
    let datast = this.myForm.value;
    this.studentserviceService.getselectArray2(datast) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    //console.log("response", response);
    },
    error => {
    //	console.error("Error deleting food!" + error);
    return Observable.throw(error);
    }
    );
    }
    }
    public coun;
    public state;
    onCha(event) {
    //	console.log('event.target.value', event);
    this.coun = event;
    }
    onCha2(event) {
    //	console.log('event.target.value', event);
    this.state = event;
    }
    save() {
    if (this.coun && this.state) {
    let combinedData = {
    "cu": this.coun,
    "st": this.state
    }
    this.studentserviceService.getselectArray(combinedData) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    //console.log("response", response);
    },
    error => {
    //console.error("Error deleting food!" + error);
    return Observable.throw(error);
    }
    );
    }
    }
    /**
    ** onFormSubmit method is use to submit the user details data and navigate to './detail' page
    */
    public onFormSubmit() {
    if (this.signupForm.valid) {
    this.user = this.signupForm.value;
    //console.log('--------', this.signupForm.value);
    let d = new Date();
    let n = d.toLocaleDateString();
    this.user.currentDate = n;
    //console.log('this.user', this.user);
    this.studentserviceService.sendStudentdData(this.user) //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
    //console.log("response", response);
    },
    error => {
    //console.error("Error deleting food!" + error);
    return Observable.throw(error);
    }
    );
    setTimeout(() => {
    this.isSuccess = true;
    setTimeout(() => {
    this.router.navigate(['./detail']);
    }, 3000);
    }, 2000);
    }
    }
    /**
    ** getStudentsDetalis method
    */
    newStudentData: any;
    getNewStudents() {
    this.studentserviceService.getNewUserData()
    .subscribe(
    data => {
    this.newStudentData = data;
    //	console.log("this.newStudentData--asasa---", this.newStudentData);
    alert('dsfsdfs');
    }
    );
    }
    navigateSearch() {
    this.router.navigate(['./search']);
    }
    /**
    * The Need for Generics
    * The 
    <T>
    after the function name symbolizes that it's a generic function.When we call the function, every instance of T will be replaced with the actual provided type.
    * 
    */
    /**
    * check for Number type only
    function randomIntElem(theArray: number[]): number {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
    } 
    let positions: number[] = [103, 458, 472, 458];
    //let randomPosition: number = randomIntElem(positions);	 
    let randomPosition=randomIntElem(positions);	 
    console.log('typeof randomPosition Number:', typeof randomPosition);		 
    /**
    * check for String type only
    function randomStrElem(theArray: string[]): string {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
    }
    let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
    let randomColor: string = randomStrElem(colors);	
    console.log('typeof randomColor String :', typeof randomColor);	
    /**
    * Check if we set Any
    function randomElem(theArray: any[]): any {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
    }
    let positions = [103, 458, 472, 458];
    let randomPosition = randomElem(positions);
    let colors = ['violet', 'indigo', 'blue', 'green'];
    let randomColor = randomElem(colors)
    console.log('typeof randomColor Any :', typeof randomPosition);
    console.log('typeof randomColor Any :', typeof randomColor);
    // This code will compile without an error so below code is draw back of 'any'.
    //all we know is that the returned element could be of any type. In the above code, 
    //we could specify the type of randomColor to be a number and still not get any error.
    let colors2: string[] = ['violet', 'indigo', 'blue', 'green'];
    let randomColor: number = randomElem(colors2);
    console.log('typeof randomColor Any to check number:', typeof randomColor);
    /**
    * A better solution to avoid code duplication while still preserving the type information is to use generics. 
    *Here is a generic function that returns random elements from an array. 
    function randomElem1
    <T>
    (theArray: T[]): T {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
    }
    let colors11: string[] = ['violet', 'indigo', 'blue', 'green'];
    let randomColor3: string = randomElem(colors11);
    console.log('typeof randomColor3 generics to check number:', typeof randomColor3);
    let randomColor4: number;
    let randomColor4: number = randomElem1(colors);
    console.log('typeof randomColor4 generics to check number:', typeof randomColor4);
    /** Create Generic Functions Using Constraints */
    /**
    * A better solution to avoid code duplication while still preserving the type information is to use generics. 
    *Here is a generic function that returns random elements from an array. 
    function printName
    <T extends People>
    (theInput: T): void {
    console.log('My name is ${theInput.name}');
    console.log('My profession is ${theInput.profession}');
    }
    /** let serena: Celebrity-->>> this means 'serena' object use property name and data type of the property from  'Celebrity' interface. 
    let serena: Celebrity = {
    name: 'Serena Williams',
    profession: 'Tennis Player'
    }	 
    printName(serena);
    /**
    * Hello World of Generics
    * To start off, let’s do the “hello world” of generics: the identity function. 
    * The identity function is a function that will return back whatever is passed in.
    */
    /** Without generics, we would either have to give the identity function a specific type: 
    function identity(arg: number): number {
    return arg;
    }
    /** Or, we could describe the identity function using the any type:
    function identity(arg: any): any {
    return arg;
    }
    /**While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, 
    we actually are losing the information about what that type was when the function returns. If we passed in a number, 
    the only information we have is that any type could be returned. */
    /**
    Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. 
    Here, we will use a type variable, a special kind of variable that works on types rather than values.
    */
    /**We’ve now added a type variable T to the identity function. This T allows us to capture the type the user provides (e.g. number), 
    so that we can use that information later. Here, we use T again as the return type. 
    On inspection, we can now see the same type is used for the argument and the return type. 
    This allows us to traffic that type information in one side of the function and out the other */
    /** Now be;ow function accept all data type inof 
    function identity
    <T>
    (arg: T): T {
    return arg;
    }
    /** Once we’ve written the generic identity function, we can call it in one of two ways. The first way is to pass all of the arguments, 
    including the type argument, to the function: */
    /** Here we explicitly set T to be string as one of the arguments to the function call, denoted using the <> around the arguments rather than (). 
    let output = identity
    <string>
    ("myString");  // type of output will be 'string'
    /**
    The second way is also perhaps the most common. Here we use type argument inference – that is, 
    we want the compiler to set the value of T for us automatically based on the type of the argument we pass in:
    let output = identity("myString");  // type of output will be 'string'
    let output1 = identity(20);  // type of output will be 'number'
    /**
    You can read the type of loggingIdentity as “the generic function loggingIdentity takes a type parameter T, 
    and an argument arg which is an array of Ts, and returns an array of Ts.” 
    function loggingIdentity
    <T>
    (arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
    }
    /**  We can alternatively write the sample example this way:  
    function loggingIdentity
    <T>
    (arg: Array
    <T>
    ): Array
    <T>
    {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
    }
    /**
    the function logAndReturn doesn’t do anything useful but it shows us the syntax of a generic function, 
    and that is the T inside the angle brackets. The way to read it is: logAndReturn expects a parameter of a type T and will return a value of the same type T, 
    where T can be anything, a string, a number, a class, an object.
    function logAndReturn
    <T>
    (arg: T): T {
    console.log(arg);
    return arg;
    }
    var result = logAndReturn
    <string>
    ('hello generics');
    /** A second way is by using TypeScript’s type inference. */
    /**
    Let’s say we want to make an Ajax request and that we know that this Ajax request will be returning a JSON that we can parse into an object or class. 
    That function may look like this:	
    var result = logAndReturn('hello generics');
    */
    clickme() {
    //alert('ss');
    }
    /**
    * Navigate on next page
    */
    nextpage() {
    this.router.navigate(['/update', '5']);
    }
    /**
    *  https://stackoverflow.com/questions/35359358/angular-2-change-event-on-every-keypress
    * https://alligator.io/angular/binding-keyup-keydown-events/
    */
    onSearchChange(searchValue: string) {
    //console.log(searchValue);
    }
    /*************************************** */
    public roleData = [{
    "id": 1,
    "role": "Role1",
    "feature": [{
    'featureId': "featureId1_1",
    'featureName': "feature1",
    'isEnable': true
    },
    {
    'featureId': "featureId2_1",
    'featureName': "feature2",
    'isEnable': false
    }
    ]
    },
    {
    "id": 2,
    "role": "Role2",
    "feature": [{
    'featureId': "featureId2_2",
    'featureName': "feature2",
    'isEnable': true
    },
    {
    'featureId': "featureId2_2",
    'featureName': "feature2",
    'isEnable': true
    }
    ]
    }
    ];
    public featureData: any;
    onRoleChange(selecteRole: any) {
    if (typeof selecteRole != "undefined") {
    this.featureData = selecteRole.feature;
    }
    }
    isEnableFeature(checkEnable) {
    //console.log('checkEnable--', checkEnable);
    checkEnable.isEnable = !checkEnable.isEnable;
    //	console.log(checkEnable.isEnable);
    //this.isChecked = checkEnable.isEnable === true ? true : false;
    //console.log(this.isChecked);
    }
    isSelected(values: any, selecteFeature) {
    //	console.log('hghg', values.currentTarget.checked);
    //console.log('selecteFeature', selecteFeature);
    }
    public textValue: any;
    openModal(feature) {
    //  console.log('sds', feature);
    this.textValue = feature.featureName;
    }
    /**openModal(template: TemplateRef < any > , studentinfo) {
    this.modalRef = this.modalService.show(template, {
    class: 'modal-sm'
    });
    }*/
    /**
    ** confirm method is call when we click on 'OK' 
    */
    public message: string;
    confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
    // this.navigateRoute(this.paramRoute);
    }
    /**
    ** confirm method is call when we click on 'no' 
    */
    decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
    }
    /**
    * Check space
    * <button (keydown)='checkSpace($event)'/>
    */
    public isSpace: boolean = false;
    checkSpace(e) {
    if (e.which === 32) {
    this.isSpace = true;
    return false;
    }
    this.isSpace = false;
    return true;
    }
    /**
    * Check space
    * <button (keydown)='checkSpace($event)'/>
    */
    checkSpaceSs(e) {
    if (e.which === 32) {
    this.isSpace = true;
    return false;
    }
    this.isSpace = false;
    return true;
    }
    /**
    * Check space e.keydown >= 65 && e.keydown <= 90
    * <button (keydown)='checkSpace($event)'/>
    */
    checkSpaceS(e) {
    //console.log(e.target.value.length);
    //console.log(e.which);
    if (
    (e.target.value.length <= 2) && (e.which >= 97 && e.which <= 122)
    ) {
    this.isSpace = true;
    return true;
    } else if ((e.target.value.length > 2) && ((e.which >= 97 && e.which <= 122) 
    || (e.which === 95) || (e.which === 32) || (e.which === 45))) {
    //alert('dd' +'' + e.which);
    //console.log(e.which);
    return true;
    } else {
    //console.log(e.which);
    return false;
    }
    }
    /**
    * e.keydown <= 57
    * @param e checkAlphaNumeric
    * <button (keydown)='checkAlphaNumeric($event)'/>
    */
    checkAlphaNumeric(e) {
    if ((e.keydown >= 48 && e.keydown <= 57) ||
    (e.keydown >= 65 && e.keydown <= 90) ||
    (e.keydown >= 97 && e.keydown <= 122)) {
    return true;
    }
    return false;
    }
    /***
    * 
    * 
    */
    public isEnableService: boolean = false;
    public isEnableLogin: boolean = false;
    openCity(e, name) {
    //console.log('e-', e);
    //console.log('name-', name);
    if (name === "service") {
    this.isEnableService = true;
    this.isEnableLogin = false;
    } else if (name === "login") {
    this.isEnableService = false;
    this.isEnableLogin = true;
    }
    }
    /*********************************************************** */
    submitted = false;
    data: any = {};
    registerdata: any;
    lname: any;
    ssn: any;
    zipcode: any;
    congrats: any
    //-------------------onSubmit function for validations--------------------------------
    onSubmit() {
    this.submitted = true;
    }
    //----------------------postUser function suscribing service----------------------------- 
    postForm(valid) {
    console.log('', valid);
    /*this.studentserviceService.postUsers(valid).subscribe((data)=>{
    this.congrats=data
    })*/
    }
    /***********************Multi Steps Form*******************/
    public steps;
    public count = 1;
    public stepObj1;
    public stepObj2;
    public stepObj3;
    public stepObj4;
    public stepObj5;
    step1Form: FormGroup;
    step2Form: FormGroup;
    step3Form: FormGroup;
    step4Form: FormGroup;
    nextStep(){
    if(this.count <6){
    this.count = this.count+1; 
    }    
    this.steps = 'step' + this.count;
    console.log('this.steps', this.steps);
    console.log('this.steps', this.count);
    if(this.count == 5){
    this.submitdataStep1();
    this.submitdataStep2();
    this.submitdataStep3();
    this.submitdataStep4();
    this.stepObj5 = Object.assign({}, this.stepObj1, this.stepObj2, this.stepObj3, this.stepObj4);
    }
    }
    stepsBox(stepIndecator){
    let stepCount = parseInt(stepIndecator);
    let counts =this.count;
    if(stepCount<=counts){
    this.count = parseInt(stepIndecator);
    this.steps = 'step' + this.count;
    }
    }
    createStep1() {
    this.step1Form = this.fb.group({
    mobileNo: ['', [Validators.required]]
    });
    this.step2Form = this.fb.group({
    firstName: ['', [Validators.required]]
    });
    this.step3Form = this.fb.group({
    lastName: ['', [Validators.required]]
    });
    this.step4Form = this.fb.group({
    middleName: ['', [Validators.required]]
    });
    }
    submitdataStep1() {
    this.stepObj1 = this.step1Form.value;
    console.log('step1Form---', this.stepObj1);
    }
    submitdataStep2() {
    this.stepObj2 = this.step2Form.value;
    console.log('step2Form---', this.stepObj2);
    }
    submitdataStep3() {
    this.stepObj3 = this.step3Form.value;
    console.log('step3Form---', this.stepObj3);
    }
    submitdataStep4() {
    this.stepObj4 = this.step4Form.value;
    console.log('step4Form---', this.stepObj4);
    }
    public inputNumbers;
    onChange(event){
    console.log('number', event);
    //this.inputNumbers = '$' + event + '.00';
    }
    onAmountChange(amount: string) {
    console.log('amount----', amount);
    //this.myService.updateAmount(amount);
    }
   /**
    * Method to allow number only
    */
   isNumber(evt) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && ((charCode === 45 || charCode === 47 ||
         (charCode < 45 || charCode > 57)))) {
    return false;
    }
    return true;
    }
/**
 * Not allow any copy paste for !@#ABC123 // only allowa 12345 numeric valuse
 */
    valuechange(event) {
        const emailPattern = '^[0-9]+$';
        event = (event) ? event : window.event;
       const charCode = (event.which) ? event.which : event.keyCode;
       if (event.target.value.match(emailPattern)) {
        } else {
            event.target.value = '';
        }
    }
    /**input-group
     * 
     * @param e 
     */
    allowAlphabet(e) {
        if ((e.which >= 97 && e.which <= 122)
        ) {
        this.isSpace = true;
        return true;
        }else {
        return false;
        }
        }
        /**
         * 
         */
    public offerAmount:any;
    public offerAmounts:any;
    public fractionSize = 20;
    private decimal_separator='.';
  
    eventEmitBlur(e){
        this.offerAmountChange(e);
    }
    removformate(e){
        if(e){
            let intNumber=e.toString().replace(/\,/g,'');
            this.offerAmount = intNumber;
            this.offerAmountChange(e);
        }      
    }
    offerAmountChange(e){
        if(e){
      let intNumber=e.toString().replace(/\,/g,'');
      console.log('intNumber-->>', intNumber);
      const valueParts = intNumber.toString().split(".");
      if (valueParts.length > 1 && valueParts[1].length > 0) {
        let integer = valueParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands_separator);
        this.offerAmount = integer+'.'+valueParts[1];
        }else{
            let integer = valueParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands_separator);
            this.offerAmount = integer;
        }
     

        let removeComma=this.offerAmount.replace(/\,/g,'');
        let fractionNo = parseFloat(removeComma).toFixed(2);
        let integer = fractionNo.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands_separator);      
        if(integer==='NaN'){
            this.offerAmounts = parseFloat('00.00').toFixed(2);
        }else{
            this.offerAmounts = integer;
        } 
    }
    }


/**
 * apply , with every thousand place 
 * @param e 
 */
    offerAmountChanges(e){
       

      let intNumber=e.replace(/\,/g,'');
    const valueParts = intNumber.toString().split(".");
    if (valueParts.length > 1 && valueParts[1].length > 0) {
       
    let integer = valueParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands_separator);
    let fraction =  Number('.'+valueParts[1]).toFixed(2);
    this.offerAmount = Number(integer)+fraction;
    }else{
    let integer = valueParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands_separator);
    this.offerAmounts = integer;
    if(integer){
        this.offerAmount = this.offerAmounts+'.00';
    }else{
        this.offerAmount = '00'+'.00';
    }
    }     
        }
/**
 * Create component with modal
 * 
 */
        openModalWithComponent() {
            const initialState = {
              list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
              ],
              title: 'Modal with component'
            };
            this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
            this.bsModalRef.content.closeBtnName = 'Close';
          }
        //  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
         
/*************code for range set********************************************************************** */
public dataDate;
public firstData;
public seconDate;

GetFormattedFirstData() {
this.firstData = this.GetFormattedDate("27 July 2016 13:30:00 GMT+05:45");
 //will alert 1330210800000
//let ts = Math.round(new Date(this.firstData).getTime() / 1000);
let nextDay= new Date(this.firstData).getTime() + (24 * 3600 * 1000 );
console.log('tsYesterday',nextDay);
this.seconDate = this.GetFormattedDates(nextDay);
}

GetFormattedDate(timeStap) {
    let todayTime = new Date(timeStap);
    let month = ('0' +(todayTime .getMonth() + 1)).slice(-2);
    let day = ('0' +(todayTime .getDate())).slice(-2);
    let year = (todayTime .getFullYear());
    return month + "-" + day + "-" + year;
}

GetFormattedDates(timeStap) {
    console.log(timeStap);
    let todayTime = new Date(timeStap);
    let month = ('0' +(todayTime .getMonth() + 1)).slice(-2);
    let day = ('0' +(todayTime .getDate())).slice(-2);
    let year = (todayTime .getFullYear());
    return month + "-" + day + "-" + year;
}

onPhoneNumberChange(phone) {
    console.log("phone", phone.length);
    if (phone.length > 10) {
        if (phone.length == 14) {
            this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /[1-9]/]
        }
        else {
            this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, " ", "E", "x", "t", ".", /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/]
        }

    }
}
public phoneNumber;
onPhoneNumberChangeh(phoneNumber){
    console.log("phoneNumber", phoneNumber);
    console.log("phoneNumber", phoneNumber.length);
    if (phoneNumber.length == 11) {
       this.phoneNumber = phoneNumber;
    }
    if (phoneNumber.length > 11 ) {
        let phoneNum = phoneNumber.slice(0, 14);
        let extNum = phoneNumber.slice(14, phoneNumber.length);
        this.phoneNumber = `${phoneNum} ext. ${extNum}`;
        console.log(" this.phoneNumber",  this.phoneNumber);
    }
}



onPhoneNumberChanges(ipt) {
    console.log("1length", ipt.length);
    console.log("1length-->>>", ipt);
   
    let phone = ipt;
    let back;

    let conformedPhoneNumber = conformToMask(
        phone,
        this.mask,
        { guide: false }
    )
    // ipt = conformedPhoneNumber.conformedValue;
   // ValidationHelper.getEvent().subscribe(res => { back = res; })
    if (ipt.length == 14) {
        console.log("4", phone);
        let phoneNum = phone.slice(0, 14);
        let extNum = phone.slice(14, phone.length);
        // ipt = `${phoneNum} ext. ${extNum}`;
        ipt = `${phoneNum}`;
        console.log("5", phoneNum);
        console.log("6", extNum);
        console.log("7", ipt);


    }
    if (ipt.length > 14) {
        console.log("8", phone);
        // let phoneNum = phone;
        //let ext = phone.slice(phone.length);
        //ipt = `${phoneNum}${ext}`;
        let phoneNum = phone.slice(0, 14);
        let extNum = phone.slice(14, phone.length);
        let splits = ipt.split('ext.');
        if (splits.length > 1) {
            ipt = ``;
            ipt = `${phoneNum} ext. ${extNum}`;
        } else {
            ipt = `${phoneNum} ext. ${extNum}`;
        }

        console.log("5-->>>", ipt);
    }

    //this.updatePhoneNumber.emit(ipt);
}

public isOpenModal=false;

showModalBox(){
  this.isOpenModal=true;
}

hideModalBox(){
    this.isOpenModal=false;
}

/**
 * ElasticSearch dropdown
 */



navigate (){
    this.router.navigate(['./faq']);
}

checkedRadio() {
    return true;
}

selectionRadio1(event){
    console.log('event--><><><', event.target.value);
   
    }
    public isAlphanumeric = false;
    public pattern="^[a-zA-Z0-9]+$";
    public integrationName: any;
/**
 * 
 * @param integrationName (keyup) use this to check backspace method and another key also
 */
    checkBackSpaceKey(integrationName){
        console.log('event--3333333', integrationName);
        console.log('event--3333333', integrationName);
        if(!integrationName){
            this.isAlphanumeric = false;
            console.log('event--this.isAlphanumeric4', this.isAlphanumeric);
        }else{
            this.isAlphanumeric = true;
        }
    }
    alphanumeri3c(e) {
        console.log('e.keydown', e.keyCode);
        console.log('e.keydown2', e.target.value);
        if ((e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122)) {
       this.isAlphanumeric = true;
       console.log('event--this.isAlphanumeric', this.isAlphanumeric);
       
        } else{
            if ((e.keyCode != 9)){
                this.isAlphanumeric = false;
                console.log('event--this.isAlphanumeric2', this.isAlphanumeric);
            }
           
        }
        }


    emailValidator(e) {  
          const emailPattern = '^[a-zA-Z0-9]+$';
          console.log('event--this.isAlphanumeric', e.target.value);
            if (e.target.value.match(emailPattern)) {
                this.isAlphanumeric = true;
                console.log('event--this.isAlphanumeric', this.isAlphanumeric);
            } else {
                this.isAlphanumeric = false;
                console.log('event--this.isAlphanumeric2', this.isAlphanumeric);
            }
          }


public changetext= 'KM';
public changemeter: any;
public changeOptValue: any;
public isActive = false;
public isActiveValue: any;
public radioSelected = 'KM';
public radioSelecteds ;
          changeMeter(event){
            console.log('event--><><><', event.target.value);
            this.changemeter = event.target.value;
           this.isActive = true;
            if (this.changeOptValue ){
                this.changetext = this.changeOptValue + this.changemeter + 'from destination';
            }
            if (event.target.value === 'KM') {
                this.radioSelecteds = 'KM';
                this.radioSelected = undefined;
            }
            if (event.target.value === 'MI') {
                this.radioSelected = 'MI';
                this.radioSelecteds = undefined;
            }
           
            }
            changeOptionValue (event){
                console.log('event2--><><><', event.target.value);
                this.changeOptValue = event.target.value;
                this.changetext = this.changeOptValue + this.changemeter + 'from destination'
            }

            
            public borrowerList = [{'firstName': 'abhinav', 'primaryBorrflag': 'Y'},
            { 'lastName': 'Singh', 'primaryBorrflag': 'N'}];
            populateDetails(selectedBorrower) {
                console.log('selected borrower4', selectedBorrower);
                this.borrowerList.forEach(list => {
                    if (selectedBorrower.firstName === list['firstName'] || selectedBorrower.lastName === list['lastName']) {
                        list.primaryBorrflag = 'Y';
                    } else {
                        list.primaryBorrflag = 'N';
                    }
                });
                console.log('selected borrower', this.borrowerList);
              }


              // Edit table data row
                public editMode = false;
                public serviceData: any;
                public data1 ={};
              editData (data) {
                this.editMode = true;
                this.data1 ={
                    'firstName':data.firstName,
                    'lastName':data.lastName
                };
              }
              saveData (updatedData) {
                console.log ('updatedData', updatedData);
                this.editMode = false;
              }

              getDataArray() {
                this.studentserviceService.getData2()
                    .subscribe(data => {
                        /**  old data */
                        this.serviceData = data
                    });
            }
}

