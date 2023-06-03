import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass']
})
export class EditProductComponent {
  Categories: any = []
  form!: FormGroup;
  constructor(private service: MainService, private toastr: ToastrService,private _fb : FormBuilder,private spinner:NgxSpinnerService,@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<EditProductComponent>) { }
  ngOnInit(): void {
    console.log(this.data)
    this.initForm(this.data)
  }
  initForm(data:any) {
    this.form = this._fb.group({
      title: [data.title, Validators.required],
      price: [data.price,Validators.required],
      description: [data.description],
      categroy:[data.category,Validators.required]
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
  editProduct() {
    if (this.form.status == 'VALID') {
      this.spinner.show()
      this.service.editProduct(this.form.value,this.data.id).subscribe({
        next: (res: any) => { this.toastr.success('Product Updated Successfully'); this.spinner.hide();this.dialogRef.close(true) },
        error: (err: any) => { this.toastr.error('Something Went Wrong Please Try Again'); this.spinner.hide()}
      })
    }
    else {
      this.toastr.error('Please Enter Required Fields')
    }
  }
}
