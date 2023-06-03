"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var core_1 = require("@angular/core");
var add_product_component_1 = require("../add-product/add-product.component");
var edit_product_component_1 = require("../edit-product/edit-product.component");
var delete_component_1 = require("src/app/shared/delete/delete.component");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(service, dialog, spinner, TranslationService, translate, rootRenderer, router) {
        this.service = service;
        this.dialog = dialog;
        this.spinner = spinner;
        this.TranslationService = TranslationService;
        this.translate = translate;
        this.rootRenderer = rootRenderer;
        this.router = router;
        this.allProducts = [];
        this.paginatedProducts = [];
        this.currentPage = 1;
        this.pageSize = 5;
        this.pageSizes = [5, 10, 15, 20];
        this.isArabic = false;
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProductData();
        this.lang = this.TranslationService.getSelectedLanguage();
    };
    ProductsComponent.prototype.getProductData = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllProducts().subscribe({
            next: function (res) {
                console.log(res);
                _this.spinner.hide();
                _this.allProducts = res;
                _this.paginatedProducts = res.slice(0, _this.pageSize);
                _this.totalPages = Math.ceil(_this.allProducts.length / _this.pageSize);
            },
            error: function (err) {
                console.log(err);
                _this.spinner.hide();
            }
        });
    };
    ProductsComponent.prototype.addNewProduct = function () {
        var _this = this;
        var dialogRef = this.dialog.open(add_product_component_1.AddProductComponent, {
            height: '600px',
            width: '600px',
            direction: this.lang == 'en' ? 'ltr' : 'rtl',
            panelClass: "dialog-responsive",
            autoFocus: false
        }).afterClosed().subscribe(function (res) {
            console.log(res);
            res == true ? _this.getProductData() : '';
        });
    };
    ProductsComponent.prototype.onPageChanged = function (e) {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
            _this.currentPage = e;
            _this.paginatedProducts = _this.allProducts.slice((e - 1) * _this.pageSize, e * _this.pageSize);
        }, 600);
    };
    ProductsComponent.prototype.getPaginator = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
            _this.currentPage = 1;
            _this.totalPages = Math.ceil(_this.allProducts.length / _this.pageSize);
            _this.paginatedProducts = _this.allProducts.slice(0, _this.pageSize);
        }, 600);
    };
    ProductsComponent.prototype.editProduct = function (product) {
        var dialogRef = this.dialog.open(edit_product_component_1.EditProductComponent, {
            data: product,
            height: '600px',
            width: '600px',
            panelClass: "dialog-responsive",
            direction: this.lang == 'en' ? 'ltr' : 'rtl',
            autoFocus: false
        });
    };
    ProductsComponent.prototype.deleteProduct = function (id) {
        var dialogRef = this.dialog.open(delete_component_1.DeleteComponent, {
            data: id,
            height: '300px',
            width: '450px',
            panelClass: "dialog-responsive",
            direction: this.lang == 'en' ? 'ltr' : 'rtl',
            autoFocus: false
        });
    };
    ProductsComponent.prototype.selectLanguage = function (lang) {
        this.lang = lang;
        this.TranslationService.setLanguage(lang);
        this.lang = this.TranslationService.getSelectedLanguage();
        this.isArabic = this.TranslationService.isArabic();
        if (this.isArabic) {
            this.renderer.setAttribute(document.querySelector('html'), 'dir', 'rtl');
            this.renderer.setAttribute(document.querySelector('html'), 'lang', 'ar');
            this.renderer.addClass(document.querySelector('body'), 'arabic');
        }
        else {
            this.renderer.setAttribute(document.querySelector('html'), 'dir', 'ltr');
            this.renderer.setAttribute(document.querySelector('html'), 'lang', 'en');
        }
        this.translate.use(lang);
    };
    ProductsComponent.prototype.logOut = function () {
        localStorage.removeItem('role');
        localStorage.removeItem('userLoginToken');
        this.router.navigate(['/login']);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.sass']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
