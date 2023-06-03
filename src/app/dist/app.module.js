"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/auth/login/login.component");
var forms_1 = require("@angular/forms");
var ngx_toastr_1 = require("ngx-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var not_found_component_1 = require("./shared/not-found/not-found.component");
var main_service_1 = require("./services/main.service");
var http_1 = require("@angular/common/http");
var dialog_1 = require("@angular/material/dialog");
var select_1 = require("@angular/material/select");
var ngx_spinner_1 = require("ngx-spinner");
var delete_component_1 = require("./shared/delete/delete.component");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var translations_service_1 = require("./services/translations.service");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                not_found_component_1.NotFoundComponent,
                delete_component_1.DeleteComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                    progressBar: true,
                    countDuplicates: true
                }),
                core_2.TranslateModule.forRoot({
                    defaultLanguage: 'en'
                }),
                http_1.HttpClientModule,
                dialog_1.MatDialogModule,
                select_1.MatSelectModule,
                ngx_spinner_1.NgxSpinnerModule,
                ngx_owl_carousel_o_1.CarouselModule,
                router_1.RouterModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule
            ],
            providers: [main_service_1.MainService, translations_service_1.TranslationsService],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
