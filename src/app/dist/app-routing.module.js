"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_component_1 = require("./components/admin/products/products.component");
var products_component_2 = require("./components/user/products/products.component");
var main_guard_1 = require("./guard/main.guard");
var login_component_1 = require("./components/auth/login/login.component");
var not_found_component_1 = require("./shared/not-found/not-found.component");
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'admin',
        canActivate: [main_guard_1.mainGuard],
        component: products_component_1.ProductsComponent,
        data: { routeRole: ['admin'] },
        loadChildren: function () { return Promise.resolve().then(function () { return require('./components/admin/admin.module'); }).then(function (m) { return m.AdminModule; }); }
    },
    {
        path: 'user',
        canActivate: [main_guard_1.mainGuard],
        data: { routeRole: ['user'] },
        component: products_component_2.UserProductsComponent,
        loadChildren: function () { return Promise.resolve().then(function () { return require('./components/user/user.module'); }).then(function (m) { return m.UserModule; }); }
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
