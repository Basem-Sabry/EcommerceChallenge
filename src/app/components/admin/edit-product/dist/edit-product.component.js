"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.EditProductComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(service, toastr, _fb, spinner, data, dialogRef) {
        this.service = service;
        this.toastr = toastr;
        this._fb = _fb;
        this.spinner = spinner;
        this.data = data;
        this.dialogRef = dialogRef;
        this.Categories = [];
    }
    EditProductComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.initForm(this.data);
    };
    EditProductComponent.prototype.initForm = function (data) {
        this.form = this._fb.group({
            title: [data.title, forms_1.Validators.required],
            price: [data.price, forms_1.Validators.required],
            description: [data.description],
            categroy: [data.category, forms_1.Validators.required]
        });
        this.getAllCategories();
    };
    EditProductComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.spinner.show();
        this.service.getAllCategries().subscribe({
            next: function (res) { _this.Categories = res; _this.spinner.hide(); },
            error: function (error) { _this.toastr.error(error.message); _this.spinner.hide(); }
        });
    };
    EditProductComponent.prototype.editProduct = function () {
        var _this = this;
        if (this.form.status == 'VALID') {
            this.spinner.show();
            this.service.editProduct(this.form.value, this.data.id).subscribe({
                next: function (res) { _this.toastr.success('Product Updated Successfully'); _this.spinner.hide(); _this.dialogRef.close(true); },
                error: function (err) { _this.toastr.error('Something Went Wrong Please Try Again'); _this.spinner.hide(); }
            });
        }
        else {
            this.toastr.error('Please Enter Required Fields');
        }
    };
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-product',
            templateUrl: './edit-product.component.html',
            styleUrls: ['./edit-product.component.sass']
        }),
        __param(4, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
