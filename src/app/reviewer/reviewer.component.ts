import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {
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
    public reviewerData: any;

  constructor(public httpRequestService: HttpRequestService) { }

  ngOnInit() {
  }

  private reviewer(): void {
    this.reviewerData = this.roleData;
    this.httpRequestService.getReviewerData() //Observable need to subscribe to get value
    .subscribe(response => { //Observer  An Observer is a consumer of values delivered by an Observable.
      console.error("response deleting food!" + response);
    // this.reviewerData = this.roleData;
    }, error => {
    console.error("Error deleting food!" + error);
    });
    }
}
