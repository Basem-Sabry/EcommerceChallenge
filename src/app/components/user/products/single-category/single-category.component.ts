import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.sass']
})
export class SingleCategoryComponent {
  allProducts: any
  category:any
  constructor(private route: ActivatedRoute, private service: MainService, private router: Router) {


   }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.getAllProducts(params.params.category)
      this.category = params.params.category
    });
  }
  getAllProducts(category: any) {
     console.log(category )
     if (!this.service.currentProducts) {
           this.service.getAllProducts().subscribe({
      next:(res:any)=>{
          this.allProducts = res.filter((e:any)=> e.category.replace("'",'').replace(' ','') == category)
        }
      })
     }
     else{
       this.allProducts =  this.service.currentProducts.filter((e:any)=> e.category.replace("'",'').replace(' ','')  == category)

     }

  }
}
