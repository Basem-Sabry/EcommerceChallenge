"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, toastr, router, TranslationService, translate, rootRenderer, service) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.TranslationService = TranslationService;
        this.translate = translate;
        this.rootRenderer = rootRenderer;
        this.service = service;
        this.diFlag = false;
        this.lang = '';
        this.isArabic = false;
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.lang = this.TranslationService.getSelectedLanguage();
    };
    LoginComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.loginAction = function () {
        var req_body = { 'username': this.form.value['username'], 'password': this.form.value['password'] };
        if (this.form.status == 'VALID') {
            // if(this.form.ema)
            if (this.form.value['username'].toLowerCase() == 'admin' && this.form.value['password'].toLowerCase() == "admin") {
                localStorage.setItem('role', 'admin');
                localStorage.setItem('userLoginToken', 'loginToken');
                this.service.currentUser.next('admin');
                this.toastr.success('Login Successful');
                this.router.navigate(['admin/index']);
            }
            else if (this.form.value['username'].toLowerCase() == 'user' && this.form.value['password'].toLowerCase() == "user") {
                this.service.currentUser.next('user');
                localStorage.setItem('role', 'user');
                localStorage.setItem('userLoginToken', 'loginToken');
                this.toastr.success('Login Successful');
                this.router.navigate(['user/index']);
            }
            else {
                this.toastr.error('Wrong Username or Password');
            }
        }
    };
    LoginComponent.prototype.selectLanguage = function (lang) {
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
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
