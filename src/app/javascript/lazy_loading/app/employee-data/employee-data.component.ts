import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
	  this.titleService.setTitle('employee Data');
  }
emp=[{ 'id': 1, 'name': 'Abhinav' },
    { 'id': 2, 'name': 'Satwant' }];
	
// goToEmpDetails(id) {
  // this.router.navigate(['/employee', id]);
// }	
	
}
