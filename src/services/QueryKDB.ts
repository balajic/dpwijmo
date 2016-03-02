import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class QueryKDB {
  public state: String;

  // Inject the Http object here
  constructor(public http:Http) {console.log('QueryKDB()'); }

  // SetState
  setState(state:String){
    this.state=state;
  }

  // Memeber function returs the json Observable and Component consumes it should subscribe to it
  getStates(): any {
    console.log('QueryKDB.getStates()');
    return this.http.get('http://10.0.1.23/.jxo?state')
    .map(res => res.json()); // This just convert the result into the JSON object.
  }

  getHCPs(): any {
    console.log('QueryKDB.getHCPs()');
    return this.http.get('http://10.0.1.23/.jxo?select from GNRL where i<1000')
    .map(res => res.json()); // This just convert the result into the JSON object.
  }

}