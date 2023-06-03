"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var user_routing_module_1 = require("./user-routing.module");
var products_component_1 = require("./products/products.component");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var single_product_component_1 = require("./products/single-product/single-product.component");
var single_category_component_1 = require("./products/single-category/single-category.component");
var all_products_component_1 = require("src/app/shared/all-products/all-products.component");
var index_component_1 = require("./products/index/index.component");
var expansion_1 = require("@angular/material/expansion");
var core_2 = require("@ngx-translate/core");
var menu_1 = require("@angular/material/menu");
var button_1 = require("@angular/material/button");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            declarations: [
                products_component_1.UserProductsComponent,
                single_product_component_1.SingleProductComponent,
                single_category_component_1.SingleCategoryComponent,
                all_products_component_1.AllProductsComponent,
                index_component_1.IndexComponent
            ],
            imports: [
                common_1.CommonModule,
                user_routing_module_1.UserRoutingModule,
                ngx_owl_carousel_o_1.CarouselModule,
                expansion_1.MatExpansionModule,
                core_2.TranslateModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
