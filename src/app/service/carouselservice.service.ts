import { Injectable,EventEmitter } from '@angular/core';
/**
     ** @Injectable
     */
@Injectable()
/**
     * A class representing a CarouselserviceService
     * @class  CarouselserviceService
     */
export class CarouselserviceService {
 /**
    ** finalOffSetLeft variable is use as flag to store boolean value
    */
  finalOffSetLeft;
   /**
     ** marginleft variable is use to store the all info data from the user login details
    */
  marginleft = 0;
   /**
    ** lastChildOffSetvalue variable is use interface which include the object structure of user form details
    */
  lastChildOffSetvalue;

  /**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */

  private sliderObject: EventEmitter<object> = new EventEmitter<object>();
/**
     ** sliderObject is instance of EventEmitter which accept ony object data
    */
  constructor() { }

   /**
       ** addSliderName is method which is use to add all slider element which are use for slider
       ** @param {string} carouselBox - carouselBox which accept the string
       */

  addSliderName(carouselBox: string) {
    let emitObject = {
      carouselBox: carouselBox
    };
    this.sliderObject.emit(emitObject);
  }

   /**
    ** getSliderName is method which is use to call this.sliderObject
    */

  getSliderName(): EventEmitter<object> {
    return this.sliderObject;
    }
    
     /**
       ** nextSlider is method which is use to to check the offSet value fo any element which use in slider
       ** @param childObj - childObj conaine the list of all slider element for which I need to fnd thier offSet value
       */

  offsetValue(childObj){
    for (let key in childObj) {
            if (childObj.hasOwnProperty(key)) {
                let lastIndex = (childObj.length - 1).toString();
                let prvIndex = parseInt(key);
                let nextIndex = prvIndex + 1;
                let finalIndex = nextIndex.toString();
                if (childObj[nextIndex] && childObj[prvIndex]) {
                    this.finalOffSetLeft = childObj[nextIndex].offsetLeft - childObj[prvIndex].offsetLeft;
                    this.lastChildOffSetvalue = childObj[lastIndex].offsetLeft;
                }
            }
        }
  }

 /**
  ** nextSlider is method which is use to call slider form right to left based on theire offSetRight value
  ** @param containerBox - containerBox conaine the element name which element needs to move from right to left
    */

nextSlider(containerBox){
  console.log('containerBox-- ',+ containerBox);
  let marginOffsetApplied = parseInt(containerBox.nativeElement.style.marginLeft.replace('px', ''), 10) || 0;
  let scrollableWidth = containerBox.nativeElement.offsetWidth;
  let parentWidth = containerBox.nativeElement.offsetParent.offsetWidth;
  if ((scrollableWidth - parentWidth) > (-1 * marginOffsetApplied)) {
      this.marginleft += this.finalOffSetLeft;
      containerBox.nativeElement.style.marginLeft = -this.marginleft + 'px';
  }
else {
  return;
}
}

/**
  ** prevSlider is method which is use to call slider form left to right based on theire offSetLeft value
  ** @param containerBox - containerBox conaine the element name which element needs to move from left to right
    */

prevSlider(containerBox){
  if (this.marginleft != 0) {
    this.marginleft -= this.finalOffSetLeft;
    containerBox.nativeElement.style.marginLeft = -this.marginleft + 'px';
    } else {
        return;
    }
  }

}
