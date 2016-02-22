//DPAppGrid

import {Component} from 'angular2/core';
import {QueryKDB} from '../../services/QueryKDB';
@Component({
  selector : 'DPGrid',
  template : `
      <H3>Query Results</H3>
      {{HCPList}}
    `
})

export class DPAppGridCmp {

  public HCPList: String;

  constructor(public kdbConn:QueryKDB) {
    kdbConn.getHCPs()
      .subscribe(res => this.HCPList = JSON.stringify(res), err => console.log('Unable to retrive State List'));
  }
}