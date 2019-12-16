import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-submitter',
  templateUrl: './submitter.component.html',
  styleUrls: ['./submitter.component.css']
})
export class SubmitterComponent implements OnInit {

  public roleData = [{
    "id": 1,
    "role": "Role1",
    "feature": [{
    'featureId': "featureId1_1",
    'featureName': "feature1",
    'isEnable': true
    },
    {
    'featureId': "featureId2_1",
    'featureName': "feature2",
    'isEnable': false
    }
    ]
    },
    {
    "id": 2,
    "role": "Role2",
    "feature": [{
    'featureId': "featureId2_2",
    'featureName': "feature2",
    'isEnable': true
    },
    {
    'featureId': "featureId2_2",
    'featureName': "feature2",
    'isEnable': true
    }
    ]
    }
    ];
    public submitterrData: any;

  constructor(public httpRequestService: HttpRequestService) { }
  
  ngOnInit() {
  let v1: any = false
  let v2: boolean = v1;
  console.log ('fdfd', v2);

  let v3: boolean= false
  let v4: string = v1;
  console.log ('fdfd', v4);
  }

  private submitter(): void {
    this.submitterrData = this.roleData;
    this.httpRequestService.getSubmitterData() //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
      console.error("response deleting food!" + response);
    // this.submitterrData = this.roleData;
    }, error => {
    console.error("Error deleting food!" + error);
    });
    }

   
}
