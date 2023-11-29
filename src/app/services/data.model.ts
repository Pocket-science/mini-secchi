//fill with the fields in your parse dataset
export const ParseConfig = {
  dataset: 'secchi_data',
  //the field that contains the result value for the marker (color/type/size)
  resultColumn: 'colourathalfdepth',
  latitudeColumn: 'latitude',
  longitudeColumn: 'longitude',
  //other fields you want to extract and have available for data visualization
  otherResultColumns: ['secchi_depth', 'distancetowater', 'colourathalfdepthimage','colouratsurfaceimage', 'createdAt'],
};

export interface ParseFile {
  _name: string;
  _url: string;
}


export interface ParseObject {
  //standard parse fields
  id: string;
  _objCount: number;
  className: string;
  createdAt: Date;
  updatedAt: Date;

  //GPS coordinate field names
  latitude: number;
  longitude: number;

  //project specific fields
  distancetowater: number;
  reappear: number;
  secchi_depth: number;
  colourathalfdepth: number;

  colourathalfdepthimage?: ParseFile;
  colouratsurfaceimage?: ParseFile;
}
