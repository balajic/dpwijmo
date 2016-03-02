import {Component} from 'angular2/core';
import {QueryKDB} from '../../services/QueryKDB';
@Component({
  selector : 'DPFilter',
  template : `
      <label>State</label>
      <select [(ngModel)]="kdbConn.state" (click)="refreshGrid()">
        <option *ngFor="#stateObj of stateArr" [value]="stateObj.state">{{stateObj.state}}</option>
      </select>
  `
})

export class DPAppFilterCmp {

  public stateArr: Object[];

  constructor(public kdbConn:QueryKDB) {
    kdbConn.getStates()
      .subscribe(res => this.stateArr = res, err => console.log('Unable to retrive State List'));
  }

  refreshGrid(){
  }
}