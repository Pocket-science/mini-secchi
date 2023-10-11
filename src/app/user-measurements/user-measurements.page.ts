import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';


@Component({
  selector: 'app-user-measurements',
  templateUrl: './user-measurements.page.html',
  styleUrls: ['./user-measurements.page.scss'],
})
export class UserMeasurementsPage implements OnInit {
  userMeasurements: any[]; // Declare the property here

  constructor() { }

  async ngOnInit() {
    const currentUser = Parse.User.current();
    await currentUser.fetch(); // fetch the latest data for this user
    console.log("Current User ID: ", currentUser.id);

    const query = new Parse.Query('secchi_data');
    query.equalTo('user_uid', currentUser.id);

    const userMeasurements = await query.find();
    this.userMeasurements = userMeasurements; 
    console.log("User Measurements: ", userMeasurements);

  }

}
