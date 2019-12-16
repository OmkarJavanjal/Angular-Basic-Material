import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  public selectedOrderIds;
   public selectedOrderIds2;
  orders = [
    { id: 100, name: 'Any', isCheck: true },
    { id: 200, name: 'order 2', isCheck: false },
    { id: 300, name: 'order 3', isCheck: false },
    { id: 400, name: 'order 4', isCheck: false }
  ];
 form2: FormGroup;
  orders2 = [
    { id: 100, name: 'Any', isCheck: true },
    { id: 200, name: 'order2 2', isCheck: false },
    { id: 300, name: 'order2 3', isCheck: false },
    { id: 400, name: 'order2 4', isCheck: false }
  ];

  constructor(private formBuilder: FormBuilder) {
    const controls = this.orders.map(c => new FormControl());
    this.form = this.formBuilder.group({
      orders: new FormArray(controls)
    });

    const controls2 = this.orders2.map(c => new FormControl());
    this.form2 = this.formBuilder.group({
      orders2: new FormArray(controls2)
    });
  }
  submit() {
   this.submit1();
    this.submit2();
    if(this.selectedOrderIds || this.selectedOrderIds2){

    }
  }
  submit1(){
      this.selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i] : null)
      .filter(v => v !== null);
    console.log(this.selectedOrderIds);
  }
   submit2(){
      this.selectedOrderIds2 = this.form2.value.orders2
      .map((v, i) => v ? this.orders2[i] : null)
      .filter(v => v !== null);
    console.log(this.selectedOrderIds2);
  }
 changeCheck(order){
    this.isCheckMethod(this.orders, order);
		}
 changeCheck2(order){
    this.isCheckMethod(this.orders2, order);
		}
isCheckMethod(orders, order){
orders.map(c => {
      console.log(c);
      if(c.id == order.id){
				c.isCheck = order.isCheck;
        if(order.id !== orders[0].id){
           orders[0].isCheck = false;        
           for (let i = 1; i < orders.length; i++) { 
              if(orders[i].isCheck == true){
                orders[0].isCheck = false;
                break;
              }else if(orders[i].isCheck == false){
               orders[0].isCheck = true;
              }else{
                orders[0].isCheck = true;
               // break;
              }			
              }
        }
			}
    });
}
    
}


