"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var single_category_component_1 = require("./products/single-category/single-category.component");
var index_component_1 = require("./products/index/index.component");
var single_product_component_1 = require("./products/single-product/single-product.component");
var routes = [
    { path: 'index', component: index_component_1.IndexComponent },
    { path: ':category', component: single_category_component_1.SingleCategoryComponent },
    { path: 'product/:id', component: single_product_component_1.SingleProductComponent },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;
