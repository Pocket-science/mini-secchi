import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { ENV } from '..//app.constant'; // your constant file
import { ParseConfig, ParseObject } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
//config
  private parseDataset = ParseConfig.dataset;
  private parseResultColumn = ParseConfig.resultColumn;
  private parseLat = ParseConfig.latitudeColumn;
  private parseLon = ParseConfig.longitudeColumn;


  private parseQuery = new Parse.Query('');
  private statsQuery = new Parse.Query('');

  constructor() {
    this.initializeParse;

   }

  initializeParse(){
    Parse.initialize(ENV.parseAppId, ENV.parseJSKey);
    (Parse as any).serverURL = ENV.parseServerUrl;

    //filter out data without GPS coordinates (0,0)
    const filterLatZero = new Parse.Query(this.parseDataset);
    filterLatZero.notEqualTo(this.parseLat,0);

    const filterLonZero = new Parse.Query(this.parseDataset);
    filterLonZero.notEqualTo(this.parseLon, 0);
    this.parseQuery = Parse.Query.and(filterLatZero, filterLonZero);

    //optional: fetch only data from last 180 or x days
    const d = new Date();
    d.setDate(d.getDate() - 180);
    //this.parseQuery.greaterThan('createdAt', d);

    //filter out invalid result values so the marker can be shown correctly.
    this.parseQuery.notContainedIn(this.parseResultColumn, ['0', 'nan', 'inf', null,'null', 0]);

    //prepare the statsquery for record count
    this.statsQuery = new Parse.Query(this.parseDataset);
  }

  getResults() {
    return this.extractData(this.parseQuery, [
      'objectId',
      ParseConfig.latitudeColumn,
      ParseConfig.longitudeColumn,
      ParseConfig.resultColumn,
      ...ParseConfig.otherResultColumns,
  ]);
  }

  async extractData(originalParseQuery: Parse.Query, fieldsToExtract: string[]) {
    try {
        const results = await originalParseQuery.find();
        const resultsArray: Partial<ParseObject>[] = [];

        for (const object of results) {
          //put the id
            let extractedObject: Partial<ParseObject> = { id: object.id };

            for (const object of results) {
              let extractedObject: { [key: string]: any } = { id: object.id };
          
              for (const field of fieldsToExtract) {
                  if (field in object.attributes) {
                      extractedObject[field] = object.get(field);
                  }
              }
          
              resultsArray.push(extractedObject);
          }
          

            resultsArray.push(extractedObject);
        }

        return resultsArray;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // or handle it as needed
    }
}

}
