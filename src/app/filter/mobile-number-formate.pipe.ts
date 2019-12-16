import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileNumberFormate'
})
  /**
   ** A class representing a MobileNumberFormatePipe
   ** @class  MobileNumberFormatePipe
   ** MobileNumberFormatePipe class implements PipeTransform
   */
export class MobileNumberFormatePipe implements PipeTransform {
 /**
     ** transform is the the method which are use to transfer the mobile number in formate 96-5413-2611
     ** @param {any} mobileNumber - mobileNumber is the parameter which accept the mobile number
     ** @example Usage:
     ** value | MobileNumberFormatePipe
     ** Example:
     ** {{ 9654132611 | MobileNumberFormatePipe }}
     **  formats to: 96-5413-2611
     **  @returns formats to: 96-5413-2611
     */
  transform(mobileNumber : any){
    console.log('mobileNumber--', mobileNumber);
		return "(" + mobileNumber.slice(0,2) + ")" +"-"+ "(" + mobileNumber.slice(2,6) + ")" +"-"+ "(" + mobileNumber.slice(6,10) + ")";
	}

}
