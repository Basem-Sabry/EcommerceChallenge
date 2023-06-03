"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IndexComponent = void 0;
var core_1 = require("@angular/core");
var IndexComponent = /** @class */ (function () {
    function IndexComponent(service, spinner, translate) {
        this.service = service;
        this.spinner = spinner;
        this.filteredCategories = [];
        this.carouselItems = [];
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            autoHeight: true,
            rtl: true,
            navText: ['<i class="bx bxs-chevron-right"></i>', '<i class="bx bxs-chevron-left"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: true
        };
    }
    IndexComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAllCategries();
        this.getAllProducts();
    };
    IndexComponent.prototype.getStart = function () {
    };
    IndexComponent.prototype.getAllCategries = function () {
        var _this = this;
        if (!this.service.currentCategroies) {
            this.service.getAllCategries().subscribe({
                next: function (res) {
                    console.log(res);
                    _this.categories = res;
                    _this.categories.map(function (e) {
                        _this.filteredCategories.push({
                            img: "../../../../assets/" + e + ".png",
                            name: e.replace("'", '').replace(' ', '')
                        });
                    });
                }
            });
        }
        else {
            this.service.currentCategroies.map(function (e) {
                _this.filteredCategories.push({
                    img: "../../../../assets/" + e + ".png",
                    name: e.replace("'", '').replace(' ', '')
                });
            });
        }
    };
    IndexComponent.prototype.getAllProducts = function () {
        var _this = this;
        if (!this.service.currentProducts) {
            this.service.getAllProducts().subscribe({
                next: function (res) {
                    console.log(res);
                    _this.allProducts = res.slice(0, 7);
                    _this.carouselItems = res.slice(0, 5);
                }
            });
        }
        else {
            this.allProducts = this.service.currentProducts.slice(0, 7);
            this.carouselItems = this.service.currentProducts.slice(0, 5);
        }
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.sass']
        })
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
