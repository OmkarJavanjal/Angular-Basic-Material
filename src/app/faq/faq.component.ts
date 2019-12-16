import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() {
   }
   public iim;
   public products;
public product = {'name': 'ds', "image": 'saul.jpg'};
  ngOnInit() {
    if(this.product){
      //For the default product selection.
      // this.products = this.product;
    //  this.iim = 'C:/Abhinav Accenture/angularPocFinal/student-data/angular2pocproject/student-data/src/assets/image/saul.jpg'
    }

    this.products =  [
      {
          "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
          "username": "testuser3",
          "description": "The company required the 28-year-old's help on a matter the directors felt could affect the share price: its Wikipedia page. Short, uninteresting ."
      },
      {
          "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
          "username": "Sumanth",
          "description": "Sample"
      },
      {
          "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
          "username": "as",
          "description": "as"
      }
  ];

  this.previ();
  }

  previ() {
  console.log('history.back()',  window.history);
  
  }

  checkClicked() {
    if(this.product){
      //For the default product selection.
      this.products =  [
        {
            "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
            "username": "testuser3",
            "description": "The company required the 28-year-old's help on a matter the directors felt could affect the share price: its Wikipedia page. Short, uninteresting ."
        },
        {
            "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
            "username": "Sumanth",
            "description": "Sample"
        },
        {
            "fileLocation": "http://images.clipartpanda.com/sports-equipment-clipart-black-and-white-soccer-ball-hi.png",
            "username": "as",
            "description": "as"
        }
    ]
     
    }
  }
}
