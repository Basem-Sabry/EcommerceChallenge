import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.sass']
})
export class DeleteComponent {
  constructor(private service: MainService, private toastr: ToastrService, private _fb: FormBuilder, private spinner: NgxSpinnerService, @Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<DeleteComponent>) { }
  deleteAction() {
    this.service.deleteProduct(this.data).subscribe({
      next: (res: any) => {
        this.toastr.success('Successfully Deleted')
        this.dialogRef.close(true)
      }
    })
  }
  cancel() {
    this.dialogRef.close();
  }
}
