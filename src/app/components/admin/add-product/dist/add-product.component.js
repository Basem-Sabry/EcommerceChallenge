"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddProductComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(service, toastr, _fb, spinner, dialogRef) {
        this.service = service;
        this.toastr = toastr;
        this._fb = _fb;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.Categories = [];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddProductComponent.prototype.initForm = function () {
        this.form = this._fb.group({
            title: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            description: [''],
            categroy: ['', forms_1.Validators.required]
        });
        this.getAllCategories();
    };
    AddProductComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllCategries().subscribe({
            next: function (res) { _this.Categories = res; _this.spinner.hide(); },
            error: function (error) { _this.toastr.error(error.message); _this.spinner.hide(); }
        });
    };
    AddProductComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.form.status == 'VALID') {
            this.spinner.show();
            this.service.addProduct(this.form.value).subscribe({
                next: function (res) { _this.toastr.success('Product Added Successfully'); _this.spinner.hide(); _this.dialogRef.close(true); },
                error: function (err) { _this.toastr.error('Something Went Wrong Please Try Again'); }
            });
        }
        else {
            this.toastr.error('Please Enter Required Fields');
        }
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.sass']
        })
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
