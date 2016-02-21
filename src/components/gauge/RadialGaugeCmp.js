'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var GaugeBaseCmp_1 = require('./GaugeBaseCmp');
var wijmo_angular2_all_1 = require('../../../scripts/wijmo.angular2/wijmo.angular2.all');
// Radial gauge sample component.
var RadialGaugeCmp = (function (_super) {
    __extends(RadialGaugeCmp, _super);
    function RadialGaugeCmp() {
        _super.call(this);
    }
    RadialGaugeCmp = __decorate([
        core_1.Component({
            selector: 'radial-gauge-cmp'
        }),
        core_1.View({
            templateUrl: 'src/components/gauge/radialGaugeCmp.html',
            directives: [wijmo_angular2_all_1.wjNg2Gauge.WjRadialGauge, wijmo_angular2_all_1.wjNg2Gauge.WjRange, common_1.CORE_DIRECTIVES],
        })
    ], RadialGaugeCmp);
    return RadialGaugeCmp;
})(GaugeBaseCmp_1.GaugeBaseCmp);
exports.RadialGaugeCmp = RadialGaugeCmp;
//# sourceMappingURL=RadialGaugeCmp.js.map