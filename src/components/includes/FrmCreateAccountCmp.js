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
var FrmBaseCmp_1 = require('./FrmBaseCmp');
var FrmCreateAccountCmp = (function (_super) {
    __extends(FrmCreateAccountCmp, _super);
    function FrmCreateAccountCmp() {
        _super.call(this);
    }
    FrmCreateAccountCmp = __decorate([
        core_1.Component({
            selector: 'frm-create-account-cmp',
            templateUrl: 'src/components/includes/frmCreateAccountCmp.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
        })
    ], FrmCreateAccountCmp);
    return FrmCreateAccountCmp;
})(FrmBaseCmp_1.FrmBaseCmp);
exports.FrmCreateAccountCmp = FrmCreateAccountCmp;
//# sourceMappingURL=FrmCreateAccountCmp.js.map