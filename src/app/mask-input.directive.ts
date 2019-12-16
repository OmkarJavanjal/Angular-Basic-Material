import { ValidationService } from './service/validation.service';
import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";

@Directive({ selector: "[myCurrencyFormatter]" })
export class MyCurrencyFormatterDirective implements OnInit {

  public temp;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    setTimeout(()=>{
      this.temp= this.el.nativeElement.value;
     // this.el.nativeElement.value = "XXX-XX" + this.temp.slice(6);
      this.el.nativeElement.value = this.temp.slice(0,3) +'-'+ this.temp.slice(3,6) + '-' + this.temp.slice(6,10)  ;
    },500)    
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus() {
    if(this.temp !== undefined) {
      this.el.nativeElement.value = this.temp; // opossite of transform     
    }  
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.temp = value;
   // this.el.nativeElement.value = "XXX-XX" + value.slice(6)  ;
   // this.el.nativeElement.value = "XXX-XX" + value.slice(6)  ;
    this.el.nativeElement.value = value.slice(0,3) +'-'+ value.slice(3,6) + '-' + value.slice(6,10)  ;
    console.log(this.el.nativeElement.value);
  }
}