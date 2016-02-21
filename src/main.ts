import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
  selector: 'rx-data',
  template: `
  <div>
    Hello world in Angular 2.0.1!!
  </div>
  `
})
class HelloWorld {
}

bootstrap(HelloWorld);
