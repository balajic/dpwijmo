//DPAppGrid

import {Component} from 'angular2/core';
import {QueryKDB} from '../../services/QueryKDB';
@Component({
  selector : 'DPGrid',
  template : `
      <H3>Query Results</H3>
    <p>This is a FlexGrid control:</p>
    <div id="theGrid" style="width:100%;height:auto;"></div>      
    `
})

export class DPAppGridCmp {

  public HCPList: String;

  constructor(public kdbConn:QueryKDB) {
    kdbConn.getHCPs()
      .subscribe(res => {
        console.log('In HCP');
        this.HCPList = JSON.stringify(res);
        var grid = new wijmo.grid.FlexGrid('#theGrid');
        grid.itemsSource = res;
      }, err => console.log('Unable to retrive gnrl List'));
  }
}