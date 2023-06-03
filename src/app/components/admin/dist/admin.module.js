"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_routing_module_1 = require("./admin-routing.module");
var products_component_1 = require("./products/products.component");
var add_product_component_1 = require("./add-product/add-product.component");
var edit_product_component_1 = require("./edit-product/edit-product.component");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var forms_1 = require("@angular/forms");
var pagination_component_1 = require("src/app/shared/pagination/pagination.component");
var core_2 = require("@ngx-translate/core");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                products_component_1.ProductsComponent,
                add_product_component_1.AddProductComponent,
                edit_product_component_1.EditProductComponent,
                pagination_component_1.PaginationComponent
            ],
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
