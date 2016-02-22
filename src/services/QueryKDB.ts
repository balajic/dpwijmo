import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class QueryKDB {

  // Inject the Http object here
  constructor(public http:Http) {
    console.log('kdb construnctor');
  }

  // Memeber function returs the json Observable and Component consumes it should subscribe to it
  getStates(): any {
    console.log('kdb gteStates');
    return this.http.get('http://q.rxdatasci.com:5001/.jxo?state')
    .map(res => res.json()); // This just convert the result into the JSON object.
  }

  getHCPs(): any {
    console.log('kdb gteStates');
    return this.http.get('http://q.rxdatasci.com:5001/.jxo?gnrl')
    .map(res => res.json()); // This just convert the result into the JSON object.
  }

}