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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var InputBaseCmp_1 = require('./InputBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wijmo_angular2_all_1 = require('../../../scripts/wijmo.angular2/wijmo.angular2.all');
// ComboBox sample component.
var ComboBoxCmp = (function (_super) {
    __extends(ComboBoxCmp, _super);
    function ComboBoxCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.country1 = '';
        this.country2 = 'Algeria';
        this.country3 = '';
        this.item1 = '';
        this.item2 = '';
    }
    ComboBoxCmp = __decorate([
        core_1.Component({
            selector: 'combo-box-cmp'
        }),
        core_1.View({
            templateUrl: 'src/components/input/comboBoxCmp.html',
            directives: [wijmo_angular2_all_1.wjNg2Input.WjComboBox, wijmo_angular2_all_1.wjNg2Grid.WjFlexGrid, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ComboBoxCmp);
    return ComboBoxCmp;
})(InputBaseCmp_1.InputBaseCmp);
exports.ComboBoxCmp = ComboBoxCmp;
//# sourceMappingURL=ComboBoxCmp.js.map