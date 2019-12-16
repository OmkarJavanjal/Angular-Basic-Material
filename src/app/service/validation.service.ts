
/**
	** getValidatorErrorMessage method
	*/
export class ValidationService {
/**
	** getValidatorErrorMessage method
	*/
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
	  'spaceNotAllow': 'Space is not allow',
	  'onlyIntegerAllow': 'Only integer value is allow',
	  'onlyAlphabetsAllow': 'Only alphabets is allow',
    };
    return config[validatorName];
  }
/**
	** emailValidator method
	*/
  static emailValidator(control) {
    // RFC 2822 compliant regex
    // '^[-_a-zA-Z0-9]+(\\.[-_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,4})$';   // allow  -._ before @ in mail
  const emailPattern = '^[_a-zA-Z0-9]+(\\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,4})$';

    if (control.value.match(emailPattern)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
/**
	** passwordValidator method
	*/
  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
 /**
	** spaceNotAllow method
	*/ 
  static spaceNotAllow(control) {
    console.log('control--', control);
    if (control.value.match(/^\S*$/)) {
      return null;
    } else {
      return { 'spaceNotAllow': true };
    }
  }
 /**
	** onlyIntegerAllow method
	*/ 
   static onlyIntegerAllow(control) {
    if (control.value.match(/^[0-9]*$/)) {
      return null;
    } else {
      return { 'onlyIntegerAllow': true };
    }
  }
 /**
  ** onlyAlphabetsAllow method: /^[a-zA-Z]*$/
  ** allow only alphas, hyphens, apostrophes and white space:  /^[A-Za-z\s'-]{1,50}$/
  ** allow only alphas-numaric, hyphens, apostrophes and white space:  /^[0-9A-Za-z\s'-]{1,50}$/
	*/ 
   static onlyAlphabetsAllow(control) {
    if (control.value.match(/^[a-zA-Z]*$/)) {
      return null;
    } else {
      return { 'onlyAlphabetsAllow': true };
    }
  }
  
  
}