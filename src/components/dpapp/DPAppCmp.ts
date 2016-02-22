import {Component}      from 'angular2/core';
import {DPAppFilterCmp} from './DPAppFilterCmp';
import {DPAppGridCmp}   from './DPAppGridCmp';

@Component({
  selector : 'dpApp',
  template : `
    <h1>Data Prep App goes here</h1>'
      <hr>
      <DPFilter>Data Grid goes here</DPFilter>
      <hr>
      <DPGrid></DPGrid>
    `,
  directives: [DPAppFilterCmp, DPAppGridCmp]
})

export class DPAppCmp {}