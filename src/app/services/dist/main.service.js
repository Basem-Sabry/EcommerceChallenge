"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var rxjs_1 = require("rxjs");
var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.currentProduct = new rxjs_1.BehaviorSubject('');
        this.currentCategroy = new rxjs_1.BehaviorSubject('');
        this.currentUser = new rxjs_1.BehaviorSubject(localStorage.getItem('role'));
    }
    Object.defineProperty(MainService.prototype, "currentProducts", {
        get: function () {
            if (this.currentProduct) {
                return this.currentProduct.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainService.prototype, "currentCategroies", {
        get: function () {
            if (this.currentCategroy) {
                return this.currentCategroy.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainService.prototype, "currentLoggedUser", {
        get: function () {
            if (this.currentUser) {
                return this.currentUser.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    //Admin
    MainService.prototype.getAllCategries = function () {
        return this.http.get(environment_1.environment.endpoint + "/products/categories");
    };
    MainService.prototype.getAllProducts = function () {
        return this.http.get(environment_1.environment.endpoint + "/products");
    };
    MainService.prototype.addProduct = function (req_body) {
        return this.http.post(environment_1.environment.endpoint + "/products", req_body);
    };
    MainService.prototype.editProduct = function (req_body, id) {
        return this.http.put(environment_1.environment.endpoint + "/products/" + id, req_body);
    };
    MainService.prototype.deleteProduct = function (id) {
        return this.http["delete"](environment_1.environment.endpoint + "/products/" + id);
    };
    //User
    MainService.prototype.cacheCategroies = function () {
        var _this = this;
        return this.http.get(environment_1.environment.endpoint + "/products/categories").subscribe({
            next: function (res) {
                _this.currentCategroy.next(res);
            }
        });
    };
    MainService.prototype.cacheProduct = function () {
        var _this = this;
        this.http.get(environment_1.environment.endpoint + "/products").subscribe({
            next: function (res) {
                _this.currentProduct.next(res);
            },
            complete: function () {
                return _this.currentProducts;
            }
        });
    };
    MainService.prototype.getSingleProduct = function (id) {
        return this.http.get(environment_1.environment.endpoint + "/products/" + id);
    };
    MainService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
