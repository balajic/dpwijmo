// Angular
import { Component, View, EventEmitter, provide, Input, Inject, enableProdMode } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, PathLocationStrategy, APP_BASE_HREF,LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { bootstrap } from 'angular2/platform/browser';

// Services
import { MenuSvc } from './services/MenuSvc';
import { DataSvc } from './services/DataSvc';
import { SparkSvc } from './services/SparkSvc';
import { QueryKDB } from './services/QueryKDB';

// App Component
import { explorer } from './app';

// uncommnet it to enable Production mode
//enableProdMode();

// Bootstrap application with hash style navigation and global services.
bootstrap(explorer.AppCmp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    MenuSvc,
    DataSvc,
    SparkSvc,
    QueryKDB
]);
