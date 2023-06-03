import { Component, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.sass']
})
export class AllProductsComponent {
  @Input() Products!: any;
  allProducts: any
  constructor(private service: MainService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  shortName(name: string) {
    return name.split(' ')[0] + name.split(' ')[1]
  }
}
