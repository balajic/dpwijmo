import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class QueryKDB {

  // Inject the Http object here
  constructor(public http:Http) { }

  // Memeber function returs the json Observable and Component consumes it should subscribe to it
  getStates(): any {
    return this.http.get('http://localhost/.jxo?state')
    .map(res => res.json()); // This just convert the result into the JSON object.
  }

  getHCPs(): any {
    return this.http.get('http://localhost/.jxo?select from GNRL where i<1000')
    .map(res => res.json()); // This just convert the result into the JSON object.
  }

}