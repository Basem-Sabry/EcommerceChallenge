"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TranslationsService = void 0;
var core_1 = require("@angular/core");
var TranslationsService = /** @class */ (function () {
    function TranslationsService(translate) {
        this.translate = translate;
        this.langIds = [];
        // get web client default language
        var defaultLang = 'en';
        // add new langIds to the list
        this.translate.addLangs([defaultLang]);
    }
    TranslationsService.prototype.loadTranslations = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var locales = __spreadArrays(args);
        locales.forEach(function (locale) {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            _this.translate.setTranslation(locale.lang, locale.data, true);
            console.log(locale);
            _this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    };
    TranslationsService.prototype.setLanguage = function (lang) {
        if (lang) {
            localStorage.setItem('user-language', lang);
        }
    };
    TranslationsService.prototype.getSelectedLanguage = function () {
        return (localStorage.getItem('user-language') || this.translate.getDefaultLang());
    };
    TranslationsService.prototype.isArabic = function () {
        this.selectedLanguage = this.getSelectedLanguage();
        if (this.selectedLanguage === 'ar') {
            return true;
        }
        else {
            return false;
        }
    };
    TranslationsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TranslationsService);
    return TranslationsService;
}());
exports.TranslationsService = TranslationsService;
