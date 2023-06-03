import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {
  Categories: any = []
  form!: FormGroup;
  constructor(private service: MainService, private toastr: ToastrService,private _fb : FormBuilder,private spinner:NgxSpinnerService,private dialogRef: MatDialogRef<AddProductComponent>) { }
  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.form = this._fb.group({
      title: ['', Validators.required],
      price: ['',Validators.required],
      description: [''],
      categroy:['',Validators.required]
    })
    this.getAllCategories()
  }
  getAllCategories() {
    this.spinner.show()
    this.service.getAllCategries().subscribe({
      next: (res) => { this.Categories = res; this.spinner.hide()},
      error: (error) => { this.toastr.error(error.message);this.spinner.hide() }
    })
  }
  addProduct() {
    if (this.form.status == 'VALID') {
      this.spinner.show()
      this.service.addProduct(this.form.value).subscribe({
        next: (res: any) => { this.toastr.success('Product Added Successfully'); this.spinner.hide();this.dialogRef.close(true) },
        error:(err:any)=>{this.toastr.error('Something Went Wrong Please Try Again')}
      })
    }
    else {
      this.toastr.error('Please Enter Required Fields')
    }
  }
}
