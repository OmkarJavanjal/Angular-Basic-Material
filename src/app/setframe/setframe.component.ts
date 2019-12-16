import {
    Component,
    OnInit
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
    frameDataInfo
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
import * as _ from 'underscore';
import {
    PagerService
} from '../service/pager.service';
import {
    LocalStorageService
} from '../service/local-storage.service';
import * as jsPDF from 'jspdf';
/**
     * A class representing a SearchProductDetailsComponent
     */
@Component({
    selector: 'app-setframe',
    templateUrl: './setframe.component.html',
    styleUrls: ['./setframe.component.css']
})

/**
     * A class representing a SetframeComponent
     * @class  SetframeComponent
     */
export class SetframeComponent implements OnInit {

	 /**
    ** studentData variable is use to store the as array data
    ** studentDatalen variable is use to store the length student data length
    ** isDelete variable is use as flag to delete the data
    ** modalRef variable is use for modal
    ** message variable is use to set the message
    ** paramRoute variable is use to find the param of URL
    ** fromDate variable is use to store From data
    ** studentDataLength variable is use to store the length student data length
	*/
    Amttotal=0;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    myStyle: any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    selectedColor: any;
    selectedBorder:any;
    selectedBackground:any
    /**
     * A class representing a SearchProductDetailsComponent
     */
    allColorData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    colorData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    allBorderData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    borderData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    allBackgroundData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    backgroundData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    finalData = [];
    /**
     * A class representing a SearchProductDetailsComponent
     */
    totalTax = 0; 
    /**
     * A class representing a SearchProductDetailsComponent
     */
    totalAmtWithTax=0;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    isCal: boolean = false;
    /**
     * A class representing a SearchProductDetailsComponent
     */
    setFrameinfo:object[]=[];
    /**
     * A class representing a SearchProductDetailsComponent
     */
    completeData:any;
    /**
     * A class representing a SearchProductDetailsComponent
     */
	private frameDataInfoData:frameDataInfo;

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
	
	constructor(private localStorageService: LocalStorageService, private pagerService: PagerService, 
		private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
		 private titleService: Title, private studentserviceService: StudentService) {}

		 /**
     		** ngOnInit is use to call method on page load
     	*/

    ngOnInit() {
	 this.studentserviceService.getColorData()
            .subscribe(response => {
                    this.allColorData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
	this.studentserviceService.getBorderData()
            .subscribe(response => {
                    this.allBorderData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );
	this.studentserviceService.getBackgroundData()
            .subscribe(response => {
                    this.allBackgroundData = response;
                },
                error => {
                    console.error("Error deleting food!" + error);
                    return Observable.throw(error);
                }
            );		
    }   
  /** 'border-image': 'url(https://www.tutorialspoint.com/css/'+ selecteImg.bordeUrl +')', */

  /**
     ** ngOnInit is use to call method on page load
     */

    onColorChange(selectedColor) {
		this.colorData=selectedColor;
	 }
	 /**
     ** ngOnInit is use to call method on page load
     */
    onBorderChange(selectedBorder) {
		this.borderData=selectedBorder;
	 }
	 /**
     ** ngOnInit is use to call method on page load
     */
	 onBackgroundChange(selectedBackground) {
		 this.backgroundData=selectedBackground;
	 }	
	 /**
     ** ngOnInit is use to call method on page load
     */
	 calculate() {
		 if(this.finalData.length ==3){
			 this.finalData=[];
			 this.finalData.push(this.colorData,this.borderData,this.backgroundData);
		 }
		 else{
			 this.finalData.push(this.colorData,this.borderData,this.backgroundData);
		 }
		 
         this.myStyle = {             
			 'background-color': this.finalData[0].colorCode,
			 'border-image': 'url(' + this.finalData[1].bordeUrl + ')',
			 'background-image': 'url(' + this.finalData[2].imgUrl + ')',
          }	
        this.completeData={			
			'colorCode': this.finalData[0].colorCode,
			'ColorName': this.finalData[0].name,
			'colorPrice': this.finalData[0].price,
			'borderImage': 'url(' + this.finalData[1].bordeUrl + ')',
			'borederName': this.finalData[1].name,
			'borderPrice': this.finalData[1].price,
			'backgroundImage': 'url(' + this.finalData[2].imgUrl + ')',
			'backgroundName': this.finalData[2].name,
			'backgroundPrice': this.finalData[2].price,
			'totalAmounts':this.Amttotal
		}  
	 }	
	
	/**
	 ** totalAmounts is  method to add total amounts
	 ** @param data - data is list of all amount in array data
     */
	totalAmounts(data) {
		this.isCal=true;
		let total = 0;
		data.forEach((d) => {
		  total += parseInt(d.price, 10);
		});
		this.totalTax=(total*18)/100;
		this.totalAmtWithTax= this.totalTax + total;
		this.Amttotal = total;
		return total;
	  }

      saveAsPDF(){
        this.router.navigate(['./frameInfo']);
      }
}