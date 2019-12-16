export class prodDetails {
	// // Property (public by default)
	public name: string;
	public description: string;
	public productCode: string;
	public itemPrice: number;
	public quantity: number;
	public totalPrice: number;
	public discount: number;
	public discountedPrice: number;
	public status: string;
	public discountCode: string;
	public grossItemPrice: number;
	public grossPrice: number;
	public itemDiscount: number;
	public netItemPrice: number;
	public netPrice: number;
	public invoiceNo: number;
	public discountDescription?: string;
	public buy: boolean;

	constructor(
		name: string,
		description: string,
		productCode: string,
		itemPrice: number,
		quantity: number,
		totalPrice: number,
		discount: number,
		discountedPrice: number,
		status: string,
		discountCode: string,
		grossItemPrice: number,
		grossPrice: number,
		itemDiscount: number,
		netItemPrice: number,
		netPrice: number,
		invoiceNo?: number,
		discountDescription?: string,
		buy?: boolean
	){
		this.name = name
		this.description = description,
		this.productCode = productCode,
		this.itemPrice = itemPrice,
		this.quantity = quantity,
		this.totalPrice = totalPrice,
		this.discount = discount,
		this.discountedPrice = discountedPrice,
		this.status = status,
		this.discountCode = discountCode,
		this.grossItemPrice = grossItemPrice,
		this.grossPrice = grossPrice,
		this.itemDiscount = itemDiscount,
		this.netItemPrice = netItemPrice,
		this.netPrice = netPrice,
		this.invoiceNo = invoiceNo,
		this.discountDescription = discountDescription,
		this.buy = buy
	}
}
/**
 * 
 */
export class incrementDetails {
	constructor(
		public productCode: string,
		public incrementBy: number,
		public minQuantity: number,
		public maxQuantity: number		
	  ){}
}
/**
	** getValidatorErrorMessage method
	*/
export class User {
	/**
	** getValidatorErrorMessage method
	*/
	id: number;
	/**
	** getValidatorErrorMessage method
	*/
	firstName: string;
	
	/**
	** getValidatorErrorMessage method
	*/
	lastName: string;
	
	/**
	** getValidatorErrorMessage method
	*/
	userName: string;
	/**
	** getValidatorErrorMessage method
	*/
	email: string;
	/**
	** getValidatorErrorMessage method
	*/
    //Both the passwords are in a single object
	password: { 
		/**
	** getValidatorErrorMessage method
	*/
	  pwd: string;
	  /**
	** getValidatorErrorMessage method
	*/
	  confirmPwd: string;
	};
	mobile: number;
	/**
	** getValidatorErrorMessage method
	*/
	gender: string;
	/**
	** getValidatorErrorMessage method
	*/
	country: string;
	
	/**
	** getValidatorErrorMessage method
	*/
	state: string;
	/**
	** getValidatorErrorMessage method
	*/
	city: string;
	
	/**
	** getValidatorErrorMessage method
	*/
	currentDate:string;
	/**
	** getValidatorErrorMessage method
	*/
	constructor(values: Object = {}) {
	  //Constructor initialization
      Object.assign(this, values);
  }
}
/**
	** getValidatorErrorMessage method
	*/
export class frameDataInfo{
	/**
	** getValidatorErrorMessage method
	*/
	'background-image': string;
	/**
	** getValidatorErrorMessage method
	*/
	'border-image': string;
	/**
	** getValidatorErrorMessage method
	*/
	'background-color': string
      /**
	** getValidatorErrorMessage method
	*/    
	constructor(values: Object = {}) {
	  //Constructor initialization
      Object.assign(this, values);
  }
}

/**
	** getValidatorErrorMessage method
	*/
	export class countryDataType{
		"id": number;
		"country": string;
		"state": string;
		"city": string  
		constructor(values: Object = {}) {
		  //Constructor initialization
		  Object.assign(this, values);
	  }
	}
	
	
interface People {
    name: string
}
 
interface Family {
    name: string,
    age: number,
    relation: string
}
 
interface Celebrity extends People {
    profession: string
}	
export enum utSoftwareProductFamilies {
    available ="offline",
    busy = "available",
    away = "busy",
    offline = "away",
}

/**
	** getValidatorErrorMessage method
	*/
export class CryptoJSData{
	base64Key= 'd1ABCDEFGHIJK3484fc2f28fd0426ffd201bbd2fe6ac213542d28a7ca421f17adc0cf234381+/=/@#/$/%/^&';
	iv= '2811da22377d62fcfdb02f29aad77d9e';
}
//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=/@#/$/%/^&*
//d13484fc2f28fd0426ffd201bbd2fe6ac213542d28a7ca421f17adc0cf234381+/=/@#/$/%/^&
//d1ABCDEFGHIJK3484fc2f28fd0426ffd201bbd2fe6ac213542d28a7ca421f17adc0cf234381+/=/@#/$/%/^&