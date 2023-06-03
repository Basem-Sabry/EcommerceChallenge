"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserProductsComponent = void 0;
var core_1 = require("@angular/core");
var UserProductsComponent = /** @class */ (function () {
    function UserProductsComponent(service, spinner, TranslationService, translate, rootRenderer, router) {
        this.service = service;
        this.spinner = spinner;
        this.TranslationService = TranslationService;
        this.translate = translate;
        this.rootRenderer = rootRenderer;
        this.router = router;
        this.isOpened = false;
        this.allCategroyProduct = [];
        this.isArabic = false;
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
        console.log(this.service.currentLoggedUser);
    }
    UserProductsComponent.prototype.ngOnInit = function () {
        this.lang = this.TranslationService.getSelectedLanguage();
        this.selectLanguage(this.lang);
        this.getAllCategries();
    };
    UserProductsComponent.prototype.getStart = function () {
    };
    UserProductsComponent.prototype.getAllCategries = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllCategries().subscribe({
            next: function (res) {
                _this.service.currentCategroy.next(res);
                _this.categories = res;
                _this.getAllProducts();
            }
        });
    };
    UserProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.service.getAllProducts().subscribe({
            next: function (res) {
                console.log(res);
                _this.allProducts = res;
                _this.service.currentProduct.next(res);
                _this.categories.map(function (cat) {
                    _this.allCategroyProduct.push({ cat: cat.replace("'", '').replace(' ', ''), products: _this.allProducts.filter(function (product) { return product.category == cat; }) });
                });
                _this.spinner.hide();
                console.log(_this.allCategroyProduct);
            }
        });
    };
    UserProductsComponent.prototype.shortName = function (name) {
        return name.split(' ')[0] + name.split(' ')[1];
    };
    UserProductsComponent.prototype.selectLanguage = function (lang) {
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
    UserProductsComponent.prototype.logOut = function () {
        localStorage.removeItem('role');
        localStorage.removeItem('userLoginToken');
        this.router.navigate(['/login']);
    };
    UserProductsComponent.prototype.openMenu = function () {
        this.isOpened = !this.isOpened;
    };
    UserProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.sass'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], UserProductsComponent);
    return UserProductsComponent;
}());
exports.UserProductsComponent = UserProductsComponent;
