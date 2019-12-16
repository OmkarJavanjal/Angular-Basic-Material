import {
    StockchangeComponent
} from './../stockchange/stockchange.component';
import {
    Component,
    OnInit,
    TemplateRef,
    ViewContainerRef,
    ElementRef,
    AfterViewChecked,
    ViewChild,
    Directive
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
import {
    SharedServiceService
} from '../service/shared-service.service';
import {
    LoadScriptsService
} from './../services/load-scripts.service';
declare var jQuery: any;
declare var $: any;
import {
    TreeNode
} from 'primeng/api';
import {
    ConfirmationService,
    Message
} from "primeng/components/common/api";
/**
 ** confirm method is call when we click on 'no' 
 */
@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.css'],
    providers: [CarouseldirectiveDirective, ConfirmationService]
})

/**
 * A class representing a StudentDetailsComponent
 * @class  StudentDetailsComponent
 */
export class StudentDetailsComponent extends StockchangeComponent implements OnInit {
    pageNum = 0;
    /**
     ** deleteStudentDetails method
     */
    @ViewChild('containerBox') containerBox: ElementRef;
    /**
     ** deleteStudentDetails method
     */
    @ViewChild('containerBox2') containerBox2: ElementRef;
    searchResults: any;
    public responceData;
    public transactionsPerPage = 10;
    public pendingTransactions;
    public postedTransactions;
    private searchStudent: Subject < string > = new Subject < string > ();
    data: TreeNode[] = [{
        label: 'CEO',
        type: 'person',
        styleClass: 'ui-person',
        expanded: true,
        data: {
            name: 'Walter White',
            'avatar': 'walter.jpg'
        },
        children: [{
                label: 'CFO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {
                    name: 'Saul Goodman',
                    'avatar': 'saul.jpg'
                },
                children: [{
                        label: 'Tax',
                        styleClass: 'department-cfo'
                    },
                    {
                        label: 'Legal',
                        styleClass: 'department-cfo'
                    }
                ],
            },
            {
                label: 'COO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {
                    name: 'Mike E.',
                    'avatar': 'mike.jpg'
                },
                children: [{
                    label: 'Operations',
                    styleClass: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                styleClass: 'ui-person',
                expanded: true,
                data: {
                    name: 'Jesse Pinkman',
                    'avatar': 'jesse.jpg'
                },
                children: [{
                        label: 'Development',
                        styleClass: 'department-cto',
                        expanded: true,
                        children: [{
                                label: 'Analysis',
                                styleClass: 'department-cto'
                            },
                            {
                                label: 'Front End',
                                styleClass: 'department-cto'
                            },
                            {
                                label: 'Back End',
                                styleClass: 'department-cto'
                            }
                        ]
                    },
                    {
                        label: 'QA',
                        styleClass: 'department-cto'
                    },
                    {
                        label: 'R&D',
                        styleClass: 'department-cto'
                    }
                ]
            }
        ]
    }];
    get_InitialData=[{
        "title": "QF 1040 QUICKFINDER",
        "description": "QF -  1040 Quickfinder - Print",
        "dueDate": "1/1/2018 - 1/1/2018",
        "renewalType": 0,
        "quantity": 1,
        "price": 62.099999999999994,
        "invoiceNo": "16539650",
        "productId": "Q40P"
    },
    {
        "title": "QF SMALL BUSINESS",
        "description": "QF -  Small Business  - Print",
        "dueDate": "1/1/2018 - 1/1/2018",
        "renewalType": 0,
        "quantity": 1,
        "price": 62.099999999999994,
        "invoiceNo": "16539650",
        "productId": "QSBP"
    }
];
getUpdatedData = [{
    "title": "QF 1040 QUICKFINDER",
    "description": "QF -  1040 Quickfinder - Print",
    "dueDate": "1/1/2018 - 1/1/2018",
    "renewalType": 0,
    "quantity": 1,
    "price": 62.099999999999994,
    "invoiceNo": "16539650",
    "productId": "Q40P"
},
{
    "title": "QF SMALL BUSINESS",
    "description": "QF -  Small Business  - Print",
    "dueDate": "1/1/2018 - 1/1/2018",
    "renewalType": 3,
    "quantity": 2,
    "price": 93.5,
    "invoiceNo": "16539650",
    "productId": "QSBP",
    "grossPrice": 110
}
];
    /**
     ** studentData variable is use to store the as array data
     */
    states: any = '';
    selected: any = '';
    studentData;
    /** studentDatalen variable is use to store the length student data length */
    // studentDatalen: number;
    /** isDelete variable is use as flag to delete the data */
    isDelete: boolean = false;

    isGC: boolean = true;
    /**  modalRef variable is use for modal */
    modalRef: BsModalRef;
    /**  message variable is use to set the message */
    message: string;
    /** paramRoute variable is use to find the param of URL */
    paramRoute: any;
    /** fromDate variable is use to store From data */
    myForm: FormGroup;
    /** fromDate variable is use to store From data */
    fromDate: string;
    /** fromDate variable is use to store From data */
    toDate: string;
    /** studentDataLength variable is use to store the length student data length */
    studentDataLength: number;
    newStudentData: any;
    oldAmt: number;
    tableData: any;
    tableDataQty: any;
    oldAmtValue: number;
    isChangeQty: boolean;
    businessDaat = [{
            "title": "QF 1040 QUICKFINDER",
            "description": "QF -  1040 Quickfinder - Print",
            "dueDate": "1/1/2018 - 1/1/2018",
            "renewalType": 3,
            "quantity": 7,
            "price": 70,
            "invoiceNo": "16539650",
            "productId": "Q40P",
            "grossPrice": 110
        },
        {
            "title": "QF SMALL BUSINESS",
            "description": "QF -  Small Business  - Print",
            "dueDate": "1/1/2018 - 1/1/2018",
            "renewalType": 3,
            "quantity": 5,
            "price": 100,
            "invoiceNo": "16539650",
            "productId": "QSBP",
            "grossPrice": 110
        }
    ];
    updatedBusinessDaat = [{
            "title": "QF 1040 QUICKFINDER",
            "description": "QF -  1040 Quickfinder - Print",
            "dueDate": "1/1/2018 - 1/1/2018",
            "renewalType": 3,
            "quantity": 3,
            "price": 30,
            "invoiceNo": "16539650",
            "productId": "Q40P",
            "grossPrice": 110
        },
        {
            "title": "QF SMALL BUSINESS",
            "description": "QF -  Small Business  - Print",
            "dueDate": "1/1/2018 - 1/1/2018",
            "renewalType": 3,
            "quantity": 2,
            "price": 40,
            "invoiceNo": "16539650",
            "productId": "QSBP",
            "grossPrice": 110
        }
    ];
    TREE_DATA = {
        "Documents": {
            "angular": {
                "src": {
                    "core": "ts",
                    "compiler": "ts"
                }
            },
            "material2": {
                "src": {
                    "button": "ts",
                    "checkbox": "ts",
                    "input": "ts"
                }
            }
        },
        "Downloads": {
            "Tutorial": "html",
            "November": "pdf",
            "October": "pdf"
        },
        "Pictures": {
            "Sun": "png",
            "Woods": "jpg",
            "Photo Booth Library": {
                "Contents": "dir",
                "Pictures": "dir"
            }
        },
        "Applications": {
            "Chrome": "app",
            "Calendar": "app",
            "Webstorm": "app"
        }
    };
    name: string;
    userResponse: Message[] = [];
    theUserSaid: string;

    public checkConfirmationData: {} = {};
    public checkConfirmationDataArray = [];
    public UltraTaxArrayData = [];
    public FixedArrayData = [];
    public FixeArrayData = [];
    public checkConfirmation: any
    /**
     ** Create a point.
     ** @param fb - this create instance of FormBuilder.
     ** @param router - this create instance of Router.
     ** @param activatedRoute - this create instance of ActivatedRoute.
     ** @param titleService - this create instance of Title.
     ** @param studentserviceService - this create instance of StudentService.
     ** @param carouselserviceService - this create instance of carouselserviceService.
     ** @param carouseldirectiveDirective - this create instance of carouseldirectiveDirective.
     */
    constructor(
        public elRef: ElementRef,
        private fb: FormBuilder,
        private modalService: BsModalService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private studentserviceService: StudentService,
        private carouselserviceService: CarouselserviceService,
        private carouseldirectiveDirective: CarouseldirectiveDirective,
        public sharedServiceService: SharedServiceService,
        private confirmationService: ConfirmationService
    ) {
        super(sharedServiceService);
        this.titleService.setTitle(activatedRoute.snapshot.routeConfig.path);
        /**  old data */
        this.getDataArray();

        /***
         * private checkConfirmationData:{
                name:string,
                price:number,
                parent:boolean,
                children:[{
                name:string,
                price:number,
                parent:boolean
                }]
            };
         * 
         */
        this.getConfirmationData();
    }
    ngOnInit() {
        
        history.forward();


        this.checkForChange();
        /**
         ** myForm method to store the selected date
         */
        this.myForm = this.fb.group({
            cot: null
        });
        /**
         ** getStudentsDetalis method
         */
        this.getStudentsDetalis();
        //this.getNewStudents();

        this.checkFOrChangeData();
        /**
         * 
         * 
         */
        // Array:
        //let arrayData=['A', 'B', 'C', 'D'];
        let arrayData = [{
                "name": "UltraTax CS Local Area Network",
                "price": 1180,
                "parent": false
            },
            {
                "name": "1040 - Illinois",
                "price": 430,
                "parent": false
            },
            {
                "name": "1040 - Indiana",
                "price": 480,
                "parent": false
            }
        ];
        arrayData.forEach(function(value) {
            console.log(value); // A, B, C, D// it will return value of each index
            // console.log(index); // 0, 1, 2, 3
        });
        /***
         * 
         * forEach() for Objects
         */
        this.scroll();
    }
       /**
     * This method is call on page load when we change any quantity and price to chekc changes
     */
    checkFOrChangeData() {
        if (this.businessDaat && this.updatedBusinessDaat) {
            if (this.businessDaat.length == this.updatedBusinessDaat.length) {
                for (let i = 0; i < this.updatedBusinessDaat.length; i++) {
                    if (
                        (this.updatedBusinessDaat[i].quantity !== this.businessDaat[i].quantity) &&
                        (this.updatedBusinessDaat[i].price !== this.businessDaat[i].price)
                    ) {
                        this.updatedBusinessDaat[i]['isChangeQty'] = true;
                        this.updatedBusinessDaat[i]['singleQtyprice'] = (this.updatedBusinessDaat[i].price / this.updatedBusinessDaat[i].quantity);
                        this.updatedBusinessDaat[i]['changeInQuantity'] = (this.updatedBusinessDaat[i].quantity) - (this.businessDaat[i].quantity);
                        this.updatedBusinessDaat[i]['changeInPriceWithChangeQty'] = (this.updatedBusinessDaat[i]['singleQtyprice']) * (this.updatedBusinessDaat[i]['changeInQuantity']);
                        if ((this.updatedBusinessDaat[i].quantity) > (this.businessDaat[i].quantity)) {
                            this.updatedBusinessDaat[i]['isGreaterQty'] = true;
                        } else {
                            this.updatedBusinessDaat[i]['isGreaterQty'] = false;
                        }
                        if ((this.updatedBusinessDaat[i].price) > (this.businessDaat[i].price)) {
                            this.updatedBusinessDaat[i]['isGreaterPrice'] = true;
                        } else {
                            this.updatedBusinessDaat[i]['isGreaterPrice'] = false;
                        }
                    } else {
                        this.updatedBusinessDaat[i]['isChangeQty'] = false;
                    }
                }
            } else {
                console.error('Data stores out of sync, please refresh.');
            }
        }
    };
    changeinprice() {
        this.checkFOrChangeData();
    }
    getConfirmationData() {
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
    getDataArray() {
        this.studentserviceService.getData()
            .subscribe(data => {
                /**  old data */
                this.tableData = data
                /** New updated data */
                this.studentserviceService.getDataUpdate()
                    .subscribe(data => {
                        /** New updated data */
                        this.tableDataQty = data
                        /**
                         * This method is call on page load when we change any quantity and price to chekc changes
                         */
                        this.checkForChanges();
                    });
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
     * This method is call on page load when we change any quantity and price to chekc changes
     */
    checkForChanges() {
        if (this.tableDataQty && this.tableData) {
            if (this.tableDataQty.length == this.tableData.length) {
                for (let i = 0; i < this.tableData.length; i++) {
                    if (
                        (this.tableData[i].totalQty !== this.tableDataQty[i].totalQty) &&
                        (this.tableData[i].changeprice !== this.tableDataQty[i].changeprice)
                    ) {
                        this.tableData[i]['isChangeQty'] = true;
                    } else {
                        this.tableData[i]['isChangeQty'] = false;
                    }
                }
            } else {
                //   console.error('Data stores out of sync, please refresh.');
            }
        }
    }
    /**
     * to share data into another componet using service 
     */
    newMessage() {
        this.studentserviceService.changeMessage("Hello from Sibling");
    }
    /**
     * Navigate on another page base on when only path is prsent 
     * Also navigate when path name and param name present.
     */
    nextpage() {
        //this.router.navigate(['/update', '5']);
        this.router.navigate(['/update'], {
            queryParams: {
                id: '5'
            }
        });
    }
    /**
     ** openModal method is use to open the modal when we click on button
* in modalcomponnet ts file define @Input() id; @Input name; and use this in modal html file
     openModal(template: TemplateRef < any > , studentinfo) {
        this.modalRef = this.modalService.show(componentNameof modal from another file, {
            class: 'modal-sm',
            id:id1,
            name:name1
        });
        this.paramRoute = studentinfo;
    }
     */
    openModal(template: TemplateRef < any > , studentinfo) {
        this.modalRef = this.modalService.show(template, {
            class: 'modal-sm'
        });
        this.paramRoute = studentinfo;
    }
    /**
     ** confirm method is call when we click on 'OK' 
     */
    confirm(): void {
        this.message = 'Confirmed!';
        this.modalRef.hide();
        this.navigateRoute(this.paramRoute);
    }
    /**
     ** confirm method is call when we click on 'no' 
     */
    decline(): void {
        this.message = 'Declined!';
        this.modalRef.hide();
    }
    /**
     ** navigateRoute method is to navigate to the update page based on param
     */
    navigateRoute(studentinfoId): void {
        this.router.navigate(['/update', studentinfoId]);
    }
    /**
     ** ngOnInit is use to call method on page load
     */
    sharedToAnotherComponentData() {
        if (this.businessDaat) {
            this.sharedServiceService.setShareData(this.businessDaat);
            //this.sharedServiceService.setShareDataUsingSubject(this.businessDaat); 
        }
    }
    /**
     ** ngOnInit is use to call method on page load
     */
    checkForChange() {
        if (this.get_InitialData && this.getUpdatedData) {
            if (this.get_InitialData.length === this.getUpdatedData.length) {
                for (let i = 0; i < this.getUpdatedData.length; i++) {
                    if (
                        (this.getUpdatedData[i].invoiceNo === this.get_InitialData[i].invoiceNo) &&
                        ((this.getUpdatedData[i].quantity !== this.get_InitialData[i].quantity) ||
                            (this.getUpdatedData[i].price !== this.get_InitialData[i].price))
                    ) {
                        this.getUpdatedData[i]['isChangeQt'] = true;
                    } else {
                        this.getUpdatedData[i]['isChangeQt'] = false;
                    }
                }
            } else if (this.get_InitialData.length !== this.getUpdatedData.length) {
                //console.error('Data stores out of sync, please refresh.');
            }
        }
    }
    scroll() {
        this.studentserviceService.transactionHistory()
            .subscribe(
                data => {
                    this.responceData = data;
                    this.pendingTransactions = data.pendingTransactions;
                    this.postedTransactions = data.postedTransactions;
                    this.responceData = this.pendingTransactions.concat(this.postedTransactions);;

                    //let lotal=this.responceData.totalRecords;
                    //this.transactionsPerPage=this.transactionsPerPage-lotal;
                },
                error => {
                    return Observable.throw(error);
                }
            );
    }
    handleScroll(event) {
        console.log(event);
    }
    /*
     * Navigate on registration page when we call navigateOnRegistration()
     */
    navigateOnRegistration() {
        this.router.navigate(['/registration']);
        /**
         * Call this.sharedToAnotherComponentData() to share data into another component using shared service.
         */
        this.sharedToAnotherComponentData();
    }
    /**
     ** ngOnInit method is use for inilization the value or load data at first time
     */
    onkeySearch(event) {
        this.searchStudent.next(event.target.value);

        /**
         *  Convert this.searchUpdated subject data into obserable so that we can subscribe it
         *  In addition you can get a observable from behavior subject using the asobservable() method on  subject.
         *  An observable can be created from both Regular and Behavior Subjects using subject.asobservable(). 
         */
        this.searchStudent.asObservable()
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(event => this.studentserviceService.searchStudentData(event))
            .subscribe(results => {
                this.searchResults = results;
            });
    }
    /**
     ** searchStudents method is use to select date from input text box which are use to display data based on selected date.
     */

    searchStudents() {
        if (this.myForm.value.range != null) {
            this.fromDate = this.myForm.value.range[0].toLocaleDateString();
            this.toDate = this.myForm.value.range[1].toLocaleDateString();
        }
        this.studentserviceService.getStudentDataBasedOnDate(this.fromDate, this.toDate)
            .subscribe(
                data => {
                    this.studentData = data
                    this.studentDataLength = this.studentData.length;
                    this.getNewStudents();
                },
                error => {
                    return Observable.throw(error);
                }
            );
    }
    /**
     ** getStudentsDetalis method
     */
    getNewStudents() {
        this.studentserviceService.getNewUserData()
            .subscribe(
                data => {
                    this.newStudentData = data;
                }
            );
    }
    /**
     ** getStudentsDetalis method
     */
    getStudentsDetalis() {
        this.studentserviceService.getStudentData()
            .subscribe(
                data => {
                    this.studentData = data;
                    //  this.studentData = JSON.parse('[' + data + ']');
                    // console.log(this.studentData + '');
                    // console.log(JSON.parse('[' + data + ']'));
                    this.studentDataLength = this.studentData.length;

                    for (let i = 0; i < this.studentDataLength; i++) {
                        if (this.studentData[i].isChangeQty == true) {
                            this.oldAmt = this.studentData[i].totalAmounts / this.studentData[i].totalQty;
                        }
                    }
                },
                error => {
                    return Observable.throw(error);
                }
            );
    }
    /**
     ** deleteStudentDetails method
     */
    deleteStudentDetails(studentId: number) {
        if (confirm("Are you sure you want to delete " + studentId + "?")) {
            this.studentserviceService.deleteStudentData(studentId)
                .subscribe(response => {
                        this.getStudentsDetalis();
                        return true;
                    },
                    error => {
                        return Observable.throw(error);
                    }
                );
            setTimeout(() => {
                this.isDelete = true;
            }, 2000);

        }
    }
    /**
     ** deleteStudentDetails method
     */
    ngAfterViewChecked() {
        let childObj2 = this.containerBox2.nativeElement.children;
        this.carouselserviceService.offsetValue(childObj2);
    }
    /**
     ** deleteStudentDetails method
     */
    nextSlide() {

        this.carouseldirectiveDirective.nextArrow();
    }
    /**
     ** deleteStudentDetails method
     */
    prevSlide() {
        this.carouseldirectiveDirective.prevArrow();
    }
    /**
     ** deleteStudentDetails method
     */
    nextSlide2() {
        this.carouselserviceService.nextSlider(this.containerBox2);
    }
    /**
     ** deleteStudentDetails method
     */
    prevSlide2() {
        this.carouselserviceService.prevSlider(this.containerBox2);
    }
    /***
     * Setting up PrimeNG with the Angular CLI To DEsign UI using PRIMENG
     */
    onChangeEvent({
        target
    }) {
        this.name = target.value;
    }
    greetMe() {
        this.confirmationService.confirm({
            message: ` Hey ${this.name}, do you like PrimeNG?`,
            header: 'Greeting',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.userResponse = [];
                this.userResponse.push({
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: 'I like PrimeNG'
                });
                this.theUserSaid = this.name + " responded " +
                    this.userResponse[0].detail;
            },
            reject: () => {
                this.userResponse = [];
                this.userResponse.push({
                    severity: 'info',
                    summary: 'Rejected',
                    detail: 'I don\'t really like PrimeNG'
                });
                this.theUserSaid = this.name + " responded " +
                    this.userResponse[0].detail;
            }
        });
    }
    next2020page() {
        this.router.navigate(['2020/primary'], {
            queryParams: {
                order: 'primary'
            }
        });
    }
    next2018page() {
        console.log(this.pageNum);
        this.router.navigate(['2018/primary'], {
            queryParams: {
                pageNum: this.pageNum + 1
            }
        });
    }
    next2019page() {
        this.router.navigate(['2019/primary'], {
            queryParams: {
                order: 'primary'
            }
        });
    }
    next2018pagewrong() {
        this.router.navigate(['/primary'], {
            queryParams: {
                order: 'primary'
            }
        });
    }


	selectForm:FormGroup;
    private selectedData(): void {
		this.selectForm = this.fb.group({
			country: ['', []]
		});
	}
	btnSubmit() {
	alert('tyu');
		console.log('this.selectForm.value---', this.selectForm);		
	}
    navigate(){
        history.forward();
        this.router.navigate(['/faq']);
    }

}