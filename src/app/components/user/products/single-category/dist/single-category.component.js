"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleCategoryComponent = void 0;
var core_1 = require("@angular/core");
var SingleCategoryComponent = /** @class */ (function () {
    function SingleCategoryComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
    }
    SingleCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.getAllProducts(params.params.category);
            _this.category = params.params.category;
        });
    };
    SingleCategoryComponent.prototype.getAllProducts = function (category) {
        var _this = this;
        console.log(category);
        if (!this.service.currentProducts) {
            this.service.getAllProducts().subscribe({
                next: function (res) {
                    _this.allProducts = res.filter(function (e) { return e.category.replace("'", '').replace(' ', '') == category; });
                }
            });
        }
        else {
            this.allProducts = this.service.currentProducts.filter(function (e) { return e.category.replace("'", '').replace(' ', '') == category; });
        }
    };
    SingleCategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-single-category',
            templateUrl: './single-category.component.html',
            styleUrls: ['./single-category.component.sass']
        })
    ], SingleCategoryComponent);
    return SingleCategoryComponent;
}());
exports.SingleCategoryComponent = SingleCategoryComponent;
