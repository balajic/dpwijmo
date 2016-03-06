import {Component} from 'angular2/core';
import {QueryKDB} from '../../services/QueryKDB';
@Component({
  selector : 'DPFilter',
  template : `
      <label>State</label>
      <select [(ngModel)]="kdbConn.state" (click)="refreshGrid()">
        <option *ngFor="#stateObj of stateArr" [value]="stateObj.state">{{stateObj.state}}</option>
      </select>
      <button (click) ="refreshGrid()">Query</button> 
  `
})

export class DPAppFilterCmp {

  public stateArr: Object[];

  //constructor(public kdbConn:QueryKDB, @Inject(() => DPAppCmp) private _dpApp: DPAppCmp ) {
  constructor(public kdbConn:QueryKDB) {
    kdbConn.getStates()
      .subscribe(res => this.stateArr = res, err => console.log('Unable to retrive State List'));
  }

  refreshGrid(){
    alert('clicked');
    //this._dpApp.dpGrid.refreshGrid(JSON.parse('[{"name":"Balaji"},{"name":"Chellappa"}]'));
  }
}