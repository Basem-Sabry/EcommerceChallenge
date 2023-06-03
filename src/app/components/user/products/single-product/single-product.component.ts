import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.sass']
})
export class SingleProductComponent {
  selectedProduct:any
  constructor(private route: ActivatedRoute, private service: MainService, private router: Router) {


  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.getSingleProduct(params.params.id)
    });
  }
  getSingleProduct(id: any) {
    if (!this.service.currentProducts) {
      this.service.getSingleProduct(id).subscribe({
        next: (res: any) => {
          this.selectedProduct = res
          this.selectedProduct.category = this.selectedProduct.category.replace("'",'').replace(' ','')
        }
      })
    }
    else {
      this.selectedProduct = this.service.currentProducts.filter((e: any) => e.id == id)[0]
      this.selectedProduct.category =  this.selectedProduct.category.replace("'",'').replace(' ','')
      console.log(this.selectedProduct)
    }

  }
  parseInteger(a: any)
  {
    return parseInt(a);
  }
}
