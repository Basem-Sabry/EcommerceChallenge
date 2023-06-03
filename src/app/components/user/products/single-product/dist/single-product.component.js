"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleProductComponent = void 0;
var core_1 = require("@angular/core");
var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    SingleProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getSingleProduct(params.params.id);
        });
    };
    SingleProductComponent.prototype.getSingleProduct = function (id) {
        var _this = this;
        if (!this.service.currentProducts) {
            this.service.getSingleProduct(id).subscribe({
                next: function (res) {
                    _this.selectedProduct = res;
                    _this.selectedProduct.category = _this.selectedProduct.category.replace("'", '').replace(' ', '');
                }
            });
        }
        else {
            this.selectedProduct = this.service.currentProducts.filter(function (e) { return e.id == id; })[0];
            this.selectedProduct.category = this.selectedProduct.category.replace("'", '').replace(' ', '');
            console.log(this.selectedProduct);
        }
    };
    SingleProductComponent.prototype.parseInteger = function (a) {
        return parseInt(a);
    };
    SingleProductComponent = __decorate([
        core_1.Component({
            selector: 'app-single-product',
            templateUrl: './single-product.component.html',
            styleUrls: ['./single-product.component.sass']
        })
    ], SingleProductComponent);
    return SingleProductComponent;
}());
exports.SingleProductComponent = SingleProductComponent;
